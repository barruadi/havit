import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User deletion failed" }, { status: 500 });
  }
}
