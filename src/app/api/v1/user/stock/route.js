import {
  addEditUserStock
  getUserStocks,
} from "@/actions/stock/userStock";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req) {
  try {
    const payload = await req.json();
    const user = await addEditUserStock(payload);

    if (!user) {
      return NextResponse.json({ error: "Failed to add stocks to user" });
    }
    return NextResponse.json(
      {
        message: "Add/Edit Stock Successful",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error while creating/editing a user stock",
      error: error.message,
    });
  }
}

export async function GET() {
  try {
    const dailyMarketData = await getUserStocks();
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
