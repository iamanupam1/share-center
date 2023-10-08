import { registerUser } from "@/actions/auth/userRegistration";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req) {
  try {
    const payload = await req.json();
    const user = await registerUser(payload);

    if (!user) {
      return NextResponse.json({ error: "Failed to create a new user" });
    }
    return NextResponse.json(
      {
        message: "New User Created Successfully",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error while creating a new user",
      error: error.message,
    });
  }
}
