import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await client.appointment.findMany({
      orderBy: {
        approvedAt: "asc",
      },
      take: 5,
      select: {
        email: true,
        fullName: true,
        serviceId: true,
        date: true,
        personnel: {
          select: {
            user: {
              select: {
                fullName: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json("error", { status: 400 });
  }
}
