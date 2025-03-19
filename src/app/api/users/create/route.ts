import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
      const body = await req.json();
      // console.log("Received body:", body); // debug

      if (!body.name || !body.email || !body.password) {
          console.error("Validation Error: Missing fields");
          return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }

      const user = await prisma.user.create({
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

      // console.log("User created:", user); // debug
      return NextResponse.json(user, { status: 201 });

  } catch (error) {
      console.error("User creation error:", error);
      return NextResponse.json({ error: "User creation failed", details: (error as Error).message }, { status: 500 });
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "API is working" }, { status: 200 });
// }
