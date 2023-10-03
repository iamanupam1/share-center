import {
  addStockAbbrevation,
  getStockAbbrevation,
} from "@/actions/stock/stockAbbrevation";
import { NextResponse } from "next/server";

export const maxDuration = 300;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const stockList = await getStockAbbrevation();
    if (!stockList) {
      return NextResponse.json({
        error: "Failed to Fetch Stock Abbrevation Data",
      });
    }
    return NextResponse.json({
      total: stockList.length,
      data: stockList,
    });
  } catch (error) {
    console.log("error");
  }
  return NextResponse.json({ message: "hello" });
}
export async function POST() {
  try {
    const addedStock = await addStockAbbrevation();
    if (!addedStock) {
      return NextResponse.json({ error: "Failed to Add/Update Data" });
    }
    return NextResponse.json({
      message: "Add/Update Successful",
      data: addedStock,
    });
  } catch (error) {
    console.log("error");
  }
  return NextResponse.json({ message: "hello" });
}
