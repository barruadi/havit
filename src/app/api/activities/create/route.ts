import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const {
			username,
            email,         
            activityName,
            status, 
            coin,          
            habitName,     
            activityPicture, 
            finishedDate,
		} = body;

		const newActivity = await prisma.activity.create({
			data: {
				username,
                email,         
                activityName,
                status, 
                coin,          
                habitName,     
                activityPicture, 
                finishedDate,
			},
		});

		return NextResponse.json(
			{
				message: "Activity created successfully",
				sleepHistory: newActivity,
			},
			{ status: 201 }
		);
	} catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json(
            { message: "Failed to fetch activities", error: error.message },
            { status: 500 }
          );
        } else {
          return NextResponse.json(
            { message: "An unknown error occurred" },
            { status: 500 }
          );
        }
	}
}

export const runtime = "nodejs";