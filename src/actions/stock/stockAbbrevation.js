import { MEROLAGANI_STOCK_ABBREV_URL } from "../../../config";
import { connectDB } from "@/lib/helpers/database";
import StockAbbrevation from "@/lib/models/StockAbbreviation";
import axios from "axios";

export const getStockAbbrevation = async () => {
  try {
    connectDB();
    const stocks = await StockAbbrevation.find({});
    return stocks;
  } catch (error) {
    console.log(error);
  }
};
export const addStockAbbrevation = async () => {
  try {
    const stockResponse = await axios.get(MEROLAGANI_STOCK_ABBREV_URL);
    if (stockResponse.data?.length) {
      connectDB();
      const preparedData = stockResponse.data.map((stock) => ({
        fullName: stock["l"] || "",
        abbrev: stock["d"] || "",
        vCount: stock["v"] || "",
      }));
      const updateOperations = preparedData.map((data) => ({
        updateOne: {
          filter: { abbrev: data["abbrev"] },
          update: { $set: data },
          upsert: true,
        },
      }));
      return StockAbbrevation.bulkWrite(updateOperations);
    }
  } catch (error) {
    console.log(error);
  }
};
