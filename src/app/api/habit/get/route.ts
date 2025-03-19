import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";



export async function GET(req : Request) {
    try {
        const body = await req.json();
        const habits = await prisma.habit.findMany();
        return NextResponse.json( { habits, getStatus : "Success" }, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot get habit... "}, { status : 500 })
    }
}

