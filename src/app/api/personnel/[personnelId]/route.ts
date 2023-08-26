import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const personnelId = req.url.split("/").at(-1);

  try {
    const user = await client.personnel.findUnique({
      where: {
        id: personnelId,
      },
      include: { services: true, user: true },
    });

    if (user) {
      return NextResponse.json({ data: user }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Not found." }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Something went wrong!" },
      { status: 400 }
    );
  }
}
