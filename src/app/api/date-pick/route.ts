import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import client from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json("Auth Error", { status: 401 });
  }

  if (token.role === "USER") {
    return NextResponse.json("Forbidden", { status: 403 });
  }

  const {
    requestId,
    ...rest
  }: {
    date: Date;
    fullName: string;
    email: string;
    tel: string;
    createdAt: string;
    serviceId: string;
    requestId: string;
  } = await req.json();

  try {
    const personnelId = await client.personnel.findUnique({
      where: {
        userId: token.id,
      },
      select: {
        id: true,
      },
    });

    if (!personnelId) {
      return NextResponse.json("error", { status: 403 });
    }

    try {
      const appointment = await client.appointment.create({
        data: {
          ...rest,
          personnel: { connect: { id: personnelId.id } },
        },
      });

      const request = await client.appointmentRequest.update({
        where: {
          id: requestId,
        },
        data: {
          status: "APPROVED",
        },
      });

      return NextResponse.json(appointment, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 400 });
    }
  } catch (error) {}
}

export async function GET(req: NextRequest) {
  const appointments = await client.appointment.findMany({
    where: {
      date: {
        gt: new Date("2023-08-29"),
        lt: new Date("2023-08-31"),
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  return NextResponse.json(appointments, { status: 200 });
}
