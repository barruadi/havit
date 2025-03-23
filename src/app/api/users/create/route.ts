import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await prisma.user.create({ data: body });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
      console.error("User creation error:", error);
      return NextResponse.json({ error: "User creation failed", details: (error as Error).message }, { status: 500 });
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "API is working" }, { status: 200 });
// }
