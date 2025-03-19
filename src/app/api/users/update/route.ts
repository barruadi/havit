import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const updatedUser = await prisma.user.update({
      where: { name : body.name, email : body.email},
      data: { 
        name: body.name,
        email: body.email,
        password: body.password,
        username: body.name,
        birthdate: null,
        coin: null,
        picture: body.picture
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "User update failed" }, { status: 500 });
  }
}
