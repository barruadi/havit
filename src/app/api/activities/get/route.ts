import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req :Request) {
    try {
        const body = await req.json();
        const activities = await prisma.activity.findMany();
        return NextResponse.json( {activities, getStatus : "Success"}, {status : 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot get activities", details : (error as Error).message}, {status : 500})
    }
}




