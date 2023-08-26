import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const totalUsers = await client.user.count();

    return NextResponse.json(totalUsers, { status: 200 });
  } catch (error) {}
}
