import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma"; // Ensure correct import path

export async function DELETE(req: Request) {
  try {
    // console.log("DELETE method triggered");
    // console.log("Request method:", req.method); // Debugging
    const { name, username, password, email } = await req.json();

    // Find the user by unique constraints (change this if needed)
    const user = await prisma.user.findFirst({
      where: { name, username, password, email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Delete the user
    await prisma.user.delete({
      where: { id: user.id },
    });

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("User deletion error:", error);
    return NextResponse.json(
      { error: "User deletion failed", details: (error as Error).message },
      { status: 500 }
    );
  }
}
