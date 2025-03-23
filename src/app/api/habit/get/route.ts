import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";



export async function GET(req : Request) {
    try {
        const habits = await prisma.habit.findUnique({
            where : {
                id : 5,
                username : "user1",
                email : "user1@email.com"
            }
        });
        return NextResponse.json( { habits, getStatus : "Success" }, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot get habit... "}, { status : 500 })
    }
}

