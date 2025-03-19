import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req : Request) {
    try {
        const body = await req.json();
        const mentalCondition = await prisma.kondisiMental.findMany();
        return NextResponse.json( {mentalCondition, getStatus : "Success"}, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error : "Cannot get mental condition..."}, { status : 500 })
    }
}
