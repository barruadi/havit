import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";



export async function PUT(req : Request) {
    try {
        const body = await req.json()
        const updatedMentalCondition = await prisma.kondisiMental.update({
            where : { username : body.username, email : body.email },
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

        return NextResponse.json( { updatedMentalCondition, updateStatus : "Success"}, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error : "Failed to update mental condition..."}, { status :  500})
    }
}

