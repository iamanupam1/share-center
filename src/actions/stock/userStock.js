import { options } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/lib/helpers/database";
import UserStocks from "@/lib/models/UserStock";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const getUserStocks = async () => {
  const session = await getServerSession(options);
  if (!session) return null;
  try {
    connectDB();
    const stocks = await UserStocks.find({ user: session?.user?._id });
    return stocks;
  } catch (error) {
    console.log(error);
  }
};

export const addUserStock = async (payload) => {
  const session = await getServerSession(options);
  if (!payload || !session) return null;
  try {
    const { symbol, quantity } = payload;
    connectDB();
    const addedStock = new UserStocks({
      guid: uuidv4(),
      symbol,
      quantity,
      user: session["user"]["_id"],
    });
    await addedStock.save();
    return addedStock;
  } catch (error) {
    console.log(error);
  }
};
