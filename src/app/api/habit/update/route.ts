import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";



export async function PUT(req : Request) {
    try {
        const body = await req.json();
        const updatedHabit = await prisma.habit.update({
            where : { username : body.username, email : body.email },
            data : {
                username : body.username,
                email : body.email,
                habitName : body.habitName,
                status : body.status
            }
        })

        return NextResponse.json( { updatedHabit, updateStatus : "Success"}, { status : 200 })
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error : "Cannot update habit..." }, {status : 500 })
    }
}





