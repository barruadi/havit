import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
      const activityId = parseInt(params.id, 10); // Parse the activity ID from the URL
      if (isNaN(activityId)) {
        return NextResponse.json(
          { message: 'Invalid activity ID' },
          { status: 400 }
        );
      }
  
      const formData = await req.formData(); // Parse FormData
      const status = formData.get('status');
      const image = formData.get('image');
  
      // Check if status is provided
      if (!status) {
        return NextResponse.json(
          { message: 'Status is required' },
          { status: 400 }
        );
      }
  
      // Update only status and image (other fields remain unchanged)
      const updatedActivity = await prisma.activity.update({
        where: { id: activityId },
        data: {
          status: status.toString(),
          activityPicture: image ? image.toString() : null,  // Only update image if provided
        },
      });
  
      return NextResponse.json(
        { activity: updatedActivity },
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
  