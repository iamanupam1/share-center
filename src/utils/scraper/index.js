import axios from "axios";
import { MEROLAGANI_LATEST_STOCK_URL } from "../../../config";
import cheerio from "cheerio";

export async function latestStockDataScraper() {
  try {
    let finalArray = [];
    const resp = await axios.get(MEROLAGANI_LATEST_STOCK_URL);
    const $ = cheerio.load(resp.data);
    const tableRows = $("#live-trading table tr");
    tableRows.each((index, element) => {
      if (index !== 0) {
        const columns = $(element).find("td");
        finalArray.push({
          symbol: $(columns[0]).text(),
          ltp: Number($(columns[1]).text()) || 0,
          change: Number($(columns[2]).text()) || 0,
          open: Number($(columns[3]).text()) || 0,
          high: Number($(columns[4]).text()) || 0,
          low: Number($(columns[5]).text()) || 0,
          quantity: $(columns[6]).text(),
          previousClose: Number($(columns[7]).text()) || 0,
          difference: Number($(columns[8]).text()) || 0,
          date: Date.now(),
        });
      }
    });
    return finalArray;
  } catch (error) {
    throw new Error(`Failed to Scrape Product: ${error.message}`);
  }
}
