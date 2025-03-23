import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const username = searchParams.get("username");

		if (!username) {
			return NextResponse.json(
				{ message: "Username is required" },
				{ status: 400 }
			);
		}

		const activities = await prisma.activity.findMany({
			where: { username },
		});

		return NextResponse.json(
			{
				message: "Successfully fetch activities",
				records: activities,
			},
			{ status: 200 }
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