import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const serviceId = req.url.split("/").at(-1);

  try {
    const service = await client.service.findUnique({
      where: {
        serviceId: serviceId,
      },
    });

    if (service) {
      return NextResponse.json({ data: service }, { status: 200 });
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
