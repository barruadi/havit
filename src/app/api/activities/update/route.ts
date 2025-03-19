import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


// input 
export async function PUT(req : Request) {
    try {
        const body = await req.json();
        const updatedActivity = await prisma.activity.update({
            where : { username : body.username, email : body.email, date : body.date, activityName : body.prevActivityName },
            data : {
                username : body.username,
                email : body.email,
                date : body.date,
                activityName : body.activityName,
                status : body.status,
                coin : body.coin,
                habitName : body.habitName,
                activityPicture : body.activityPicture
            }
        });
        return NextResponse.json( { updatedActivity, updateStatus : "Success"}, {status : 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot update activities", details : (error as Error).message }, {status : 500})
    }
}

