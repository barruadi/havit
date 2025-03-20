import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function PUT(req: Request) {
  try {
    const { id, name, email, age } = await req.json();
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, age: Number(age) },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User update failed" }, { status: 500 });
  }
}
