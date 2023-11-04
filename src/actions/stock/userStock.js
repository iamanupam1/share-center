import { options } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/lib/helpers/database";
import UserStocks from "@/lib/models/UserStock";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import { getLatestStockData } from "./stockTrend";

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

export const getUserStocksLatestValuation = async () => {
  const session = await getServerSession(options);
  if (!session) return null;
  try {
    connectDB();
    let stocks = await UserStocks.find({ user: session?.user?._id });
    const latestStockData = await getLatestStockData();
    const valuatedStock = stocks.map((stock) => {
      const ltp =
        latestStockData.find((item) => item.symbol == stock.symbol)?.ltp ||
        null;
      stock.latestValuation = Number(stock.quantity) * Number(ltp);
      return stock;
    });
    return valuatedStock;
  } catch (error) {
    console.log(error);
  }
};

export const addEditUserStock = async (payload) => {
  const session = await getServerSession(options);
  if (!payload || !session) return null;
  try {
    const { symbol, quantity } = payload;
    connectDB();
    const existingStock = await UserStocks.findOne({ symbol });

    // Updating quantity of already added stock
    if (existingStock) {
      existingStock.quantity = quantity;
      await existingStock.save();
      return existingStock;
    }

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

export const deleteUserStock = async (guid) => {
  if (!guid) return null;
  try {
    connectDB();
    const result = await UserStocks.deleteOne({ guid });
    return result.deletedCount;
  } catch (error) {
    console.log(error);
  }
};
