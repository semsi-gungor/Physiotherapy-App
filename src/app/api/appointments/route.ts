import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { add } from "date-fns";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  let today = new Date();
  let target = add(today, { days: 6 });

  try {
    const personnelId = await client.personnel.findUnique({
      where: {
        userId: token?.id,
      },
      select: {
        id: true,
      },
    });

    const data = await client.personnel.findUnique({
      where: {
        id: personnelId?.id,
      },
      select: {
        appointsments: {
          where: {
            date: {
              gt: today,
              lt: target,
            },
          },
          orderBy: {
            date: "asc",
          },
        },
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    throw error;
  }
}
