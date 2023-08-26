import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await client.user.findMany({
      orderBy: {
        date: "desc",
      },
      take: 5,
      select: {
        email: true,
        fullName: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json("error", { status: 400 });
  }
}
