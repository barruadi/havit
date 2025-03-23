import { db } from "~/server/db";
import { NextResponse } from "next/server";


export async function GET(req : Request) {
    try {
        const nutrition_conditions = await db.kondisiGizi.findMany();
        return NextResponse.json(nutrition_conditions, { status : 200});
    } catch (error) {
        console.error("User creation error:", error);
        return NextResponse.json({ error: "User creation failed", details: (error as Error).message }, { status: 500 });
    }
    
}
