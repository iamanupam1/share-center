import axios from "axios";
import { SHARE_SANSAR_LATEST_MARKET_URL } from "../../../config";
import cheerio from "cheerio";

export async function latestStockDataScraper() {
  try {
    let finalArray = [];
    const resp = await axios.get(SHARE_SANSAR_LATEST_MARKET_URL);
    const $ = cheerio.load(resp.data);
    const tableRows = $("table tbody tr");
    const dateValue = $("#dDate").text().trim();
    const currentDate = new Date().toISOString();
    tableRows.each((index, element) => {
      const columns = $(element).find("td");
      finalArray.push({
        symbol: $(columns[1]).text().trim() || "",
        ltp: $(columns[2]).text().trim() || "",
        difference: $(columns[3]).text().trim() || "",
        change: $(columns[4]).text().trim() || "",
        open: $(columns[5]).text().trim() || "",
        high: $(columns[6]).text().trim() || "",
        low: $(columns[7]).text().trim() || "",
        quantity: $(columns[8]).text().trim() || "",
        previousClose: $(columns[9]).text().trim() || "",
        date: new Date(dateValue) || currentDate,
      });
    });
    return finalArray;
  } catch (error) {
    throw new Error(`Failed to Scrape Product: ${error.message}`);
  }
}
