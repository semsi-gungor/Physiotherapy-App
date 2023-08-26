import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const userId = req.url.split("/").at(-1);

  try {
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
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
