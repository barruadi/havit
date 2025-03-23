// api/activities/[id].ts
import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const activityId = parseInt(params.id, 10); //base 10
    const activity = await prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!activity) {
      return NextResponse.json({ message: "Activity not found" }, { status: 404 });
    }

    return NextResponse.json({ activity }, { status: 200 });
    } catch (error) {
    if (error instanceof Error) {
        return NextResponse.json({ message: "Error fetching activity", error: error.message }, { status: 500 });
      } else {
        return NextResponse.json({ message: "An unknown error occurred" }, { status: 500 });
      }
    }
  }

