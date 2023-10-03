import {
  addStockAbbrevation,
  getStockAbbrevation,
} from "@/app/actions/stock/stockAbbrevation";
import { NextResponse } from "next/server";

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
