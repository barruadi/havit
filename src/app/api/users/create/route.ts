import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await prisma.user.create({ data: body });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "User creation failed" }, { status: 500 });
  }
}
