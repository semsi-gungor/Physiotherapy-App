import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const appCounts = await client.appointment.groupBy({
    by: "serviceId",
    _count: {
      id: true,
    },
  });

  const serviceIds = await client.service.findMany({
    select: {
      serviceId: true,
    },
  });

  let data = serviceIds.map((serviceId) => {
    return {
      name: serviceId.serviceId,
      value:
        appCounts.find((app) => {
          return app.serviceId === serviceId.serviceId;
        })?._count.id ?? 0,
    };
  });

  return NextResponse.json(data, { status: 200 });
}
