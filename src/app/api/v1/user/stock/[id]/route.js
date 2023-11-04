import { deleteUserStock } from "@/actions/stock/userStock";
import { NextResponse } from "next/server";

export async function DELETE({ params }) {
  try {
    const guid = params.id;
    const user = await deleteUserStock(guid);

    if (!user) {
      return NextResponse.json({ error: "Failed to delete stock of user" });
    }
    return NextResponse.json(
      {
        message: "Delete Stock Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error while deleting user stock",
      error: error.message,
    });
  }
}
