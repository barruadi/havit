import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
      const body = await req.json();
      // console.log("Received body:", body); // debug
      
      // clearing the data table
      await prisma.popQuiz.deleteMany();

      // filling the table
      for (const quiz of body){
          if (!body.question || !body.option1 || !body.option2 || !body.option3 || !body.option4 || !body.answer) {
              console.error("Validation Error: Missing fields");
              return NextResponse.json({ error: "Missing fields" }, { status: 400 });
          }
        }
    
        const popQuiz = await prisma.popQuiz.createMany({
        data: body.map( (quiz: { question: any; option1: any; option2: any; option3: any; option4: any; answer: any; }) => ({
            question: quiz.question,
            option1: quiz.option1,
            option2: quiz.option2,
            option3: quiz.option3,
            option4: quiz.option4,
            answer: quiz.answer
        }))
        });
            

      // console.log("User created:", user); // debug
      return NextResponse.json(body, { status: 201 });

  } catch (error) {
      console.error("Pop Quiz creation error:", error);
      return NextResponse.json({ error: "Pop quiz creation failed", details: (error as Error).message }, { status: 500 });
  }
}
