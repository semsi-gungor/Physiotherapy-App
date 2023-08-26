import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const services = await client.service.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {}
}
