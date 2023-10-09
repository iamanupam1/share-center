import { connectDB } from "@/lib/helpers/database";
import UserStocks from "@/lib/models/UserStock";

export const getUserStocks = async (userId) => {
  if (!userId) return null;
  try {
    connectDB();
    const stocks = await UserStocks.find({ user: userId });
    return stocks;
  } catch (error) {
    console.log(error);
  }
};

export const addUserStock = async (payload) => {
  if (!payload) return null;
  try {
    const { symbol, quantity, userId } = payload;
    connectDB();
    const addedStock = new UserStocks({
      symbol,
      quantity,
      user: userId,
    });
    await addedStock.save();
    return addedStock;
  } catch (error) {
    console.log(error);
  }
};
