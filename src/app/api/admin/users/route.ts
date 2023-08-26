import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const users = await client.user.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {}
}
