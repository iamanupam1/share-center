import { connectDB } from "@/lib/helpers/database";
import StockTrendData from "@/lib/models/StockTrendData";
import { latestStockDataScraper } from "@/utils/scraper";
import { MEROLAGANI_URL } from "../../../config";

export const getLatestStockData = async () => {
  try {
    connectDB();
    const stocks = await StockTrendData.find({});
    return stocks;
  } catch (error) {
    console.log(error);
  }
};

export const addLatestStockData = async () => {
  try {
    const scrappedMerolaganiData = await latestStockDataScraper(MEROLAGANI_URL);
    // console.log("scrappedMerolaganiData", scrappedMerolaganiData);
    // return scrappedMerolaganiData;
    // const latestStockData = [
    //   {
    //     symbol: "ADBL",
    //     date: Date.now(),
    //     ltp: 261.8,
    //     change: 0.58,
    //     open: 257,
    //     high: 262.9,
    //     low: 257,
    //     quantity: "35,324",
    //     previousClose: 260.3,
    //     difference: 1.5,
    //   },
    // ];
    if (scrappedMerolaganiData?.length) {
      connectDB();
      const createORupdateOperations = scrappedMerolaganiData.map((data) => ({
        updateOne: {
          filter: { date: data["date"], symbol: data["symbol"] },
          update: { $set: data },
          upsert: true,
        },
      }));
      return StockTrendData.bulkWrite(createORupdateOperations);
    }
  } catch (error) {
    console.log(error);
  }
};
