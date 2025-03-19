import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
    try {
        const body = await req.json();
        
        // validation if empty
        if ( !body.username || !body.email || !body.date || !body.depression || !body.anxiety || !body.stress || !body.result) {
            console.error("Validation Error: Missing fields");
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // putting inside the database
        const mentalCondition = await prisma.kondisiMental.create({
            data : {
                username : body.username,
                email : body.email,
                date : body.date,
                depression : body.depression,
                anxiety : body.anxiety,
                stress : body.stress,
                result : body.result   
            }
        })

        return NextResponse.json( {mentalCondition, createStatus : "Success"}, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Failed to create mental condition..."}, { status : 500 })
    }
}








