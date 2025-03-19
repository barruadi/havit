import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";




export async function POST(req : Request) {
    try {
        const body = await req.json();
        const habit = await prisma.habit.create({
            data : {
                username : body.username,
                email : body.email,
                habitName : body.habitName,
                status : body.status
            },
        });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot create habit... ", details : (error as Error).message}, { status : 500})
    }
}



