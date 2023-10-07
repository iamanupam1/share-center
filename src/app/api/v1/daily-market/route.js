import {
  addLatestStockData,
  getLatestStockData,
} from "@/actions/stock/stockTrend";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const dailyMarketData = await getLatestStockData();
    if (!dailyMarketData) {
      return NextResponse.json({
        error: "Failed to Fetch Latest Stock Data",
      });
    }
    return NextResponse.json({
      total: dailyMarketData.length,
      data: dailyMarketData,
    });
  } catch (error) {
    console.log("error", error);
  }
}

export async function POST() {
  try {
    const addedStock = await addLatestStockData();
    if (!addedStock) {
      return NextResponse.json({ error: "Failed to Add/Update Data" });
    }
    return NextResponse.json({
      message: "Add/Update Successful",
      data: addedStock,
    });
  } catch (error) {
    console.log("error", error);
  }
}
