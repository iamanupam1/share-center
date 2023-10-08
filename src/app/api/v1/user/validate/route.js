import { registerUser } from "@/actions/auth/userRegistration";
import { validateUser } from "@/actions/auth/userValidation";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = await validateUser(email, password);

    if (!user) {
      return NextResponse.json({ error: "Failed to find the user" });
    }
    return NextResponse.json(
      {
        message: `Valid User ${email}`,
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while creating a new user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
