import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    await prisma.user.delete({ where: { name: body.name, username : body.username, password : body.password, email : body.email } });
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User deletion failed" }, { status: 500 });
  }
}
