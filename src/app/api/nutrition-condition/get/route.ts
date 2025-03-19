import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req : Request) {
    try {
        const nutrition_conditions = await prisma.kondisiGizi.findMany();
        return NextResponse.json(nutrition_conditions, { status : 200});
    } catch (error) {
        console.error("User creation error:", error);
        return NextResponse.json({ error: "User creation failed", details: (error as Error).message }, { status: 500 });
    }
    
}

