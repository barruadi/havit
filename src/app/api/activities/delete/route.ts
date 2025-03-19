import { stat } from "fs";
import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


export async function DELETE(req : Request) {
    try {
        const body = await req.json();
        const deletedActivity = await prisma.habit.deleteMany({
            where : { username : body.username, email : body.email, date : new Date(body.date), activityName : body.activityName}
        })
        if (deletedActivity.count === 0) {
            return NextResponse.json({ error: "No matching records found" }, { status: 404 });
        }
        return NextResponse.json( { message : "Activity deleted"}, { status : 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json( { error : "Cannot delete activity", details : (error as Error).message}, {status : 500})
    }
}







