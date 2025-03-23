import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req :Request) {
    try {
        // const body = await req.json();
        const activities = await prisma.activity.findUnique({
            where : {
                id : 1,
                username : "user1",
                email : "user1@example.com",
                date : new Date("2025-03-23T06:30:00Z")
            }
        });
        return NextResponse.json(activities, {status : 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot get activities", details : (error as Error).message}, {status : 500})
    }
}




