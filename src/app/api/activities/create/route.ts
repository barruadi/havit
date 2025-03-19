import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
    try {
        const body = await req.json();
        const activity = await prisma.activity.create({
            data : {
                username : body.username,
                email : body.email,
                activityName : body.activityName,
                status : body.status,
                coin : body.coin,
                habitName : body.habitName,
                activityPicture : body.activityPicture,
                date : body.date
            }
        })
        return NextResponse.json( { activity , createStatus : "Success" }, { status : 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error : "Cannot create activity", details : (error as Error).message }, { status : 500})
    }
}




