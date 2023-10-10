import { MEROLAGANI_STOCK_ABBREV_URL } from "../../../config";
import { connectDB } from "@/lib/helpers/database";
import StockAbbreviation from "@/lib/models/StockAbbreviation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const getStockAbbreviation = async () => {
  try {
    connectDB();
    const stocks = await StockAbbreviation.find({}, "-_id");
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
          update: { $set: { ...data, guid: uuidv4() } },
          upsert: true,
        },
      }));
      return StockAbbreviation.bulkWrite(updateOperations);
    }
  } catch (error) {
    console.log(error);
  }
};
