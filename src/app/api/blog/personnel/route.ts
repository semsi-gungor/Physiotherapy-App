import client from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (token?.role === "USER") {
    return NextResponse.json("Auth Error", { status: 401 });
  }

  try {
    const personnel = await client.personnel.findUnique({
      where: {
        userId: token?.id,
      },
    });

    const modules = await client.blogPost.findMany({
      where: {
        personnelId: personnel?.id,
      },
    });

    return NextResponse.json(modules, { status: 200 });
  } catch (e) {}
}
