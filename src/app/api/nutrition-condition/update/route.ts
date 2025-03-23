import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req : Request) {
    try {
        const body = await req.json();

        const updatedNutritionCondition = await prisma.kondisiGizi.update({
            where : { username : body.username, email : body.email},
            data : {
                username : body.username,
                email : body.email,
                date : body.date,
                carbohydrate : body.carbohydrate,
                protein : body.protein,
                fat : body.fat,
                vitamin : body.vitamin,
                calorie : body.calorie
            }
        });
        return NextResponse.json({updatedNutritionCondition, updateStatus : "Success" }, { status : 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error : "Updating nutrition condition failed..."}, { status : 500})
    }
}
