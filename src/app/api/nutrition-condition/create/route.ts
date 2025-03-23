import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
      const body = await req.json();
    //   console.log("Received body:", body); // debug
      
      // filling the table
          if (!body.username || !body.email || !body.date || !body.carbohydrate || !body.protein || !body.fat || !body.vitamin || !body.calorie) {
              console.error("Validation Error: Missing fields");
              return NextResponse.json({ error: "Missing fields" }, { status: 400 });
          }
        
        const nutrition_condition = await prisma.kondisiGizi.create({
        data: {
            username: body.username,
            email: body.email,
            date: body.date,
            carbohydrate: body.carbohydrate,
            protein: body.protein,
            fat: body.fat,
            vitamin : body.vitamin,
            calorie : body.calorie
        }
        });
            

      // console.log("User created:", user); // debug
      return NextResponse.json({ message : "Creating nutrition condition successful!"}, { status: 201 });

  } catch (error) {
      console.error("Nutrition Update creation error:", error);
      return NextResponse.json({ error: "Nutrition Update creation failed", details: (error as Error).message }, { status: 500 });
  }
}
