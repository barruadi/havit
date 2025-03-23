import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req : Request) {
    try {
        const nutrition_conditions = await prisma.kondisiGizi.findUnique({
            where : {
                username: "user1",
                email: "user1@example.com",
                date: new Date("2025-03-23T12:00:00Z"),
            }
        });
        return NextResponse.json(nutrition_conditions, { status : 200});
    } catch (error) {
        console.error("User creation error:", error);
        return NextResponse.json({ error: "User creation failed", details: (error as Error).message }, { status: 500 });
    }
    
}

