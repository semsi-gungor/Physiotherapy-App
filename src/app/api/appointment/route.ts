import { NextRequest, NextResponse } from "next/server";
import { AppointmentRequestSchema } from "@/models/AppointmentRequest";
import { z } from "zod";
import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getToken } from "next-auth/jwt";

type Appointment = z.infer<typeof AppointmentRequestSchema>;

export async function POST(req: NextRequest) {
  const body: Appointment = await req.json();

  const parsedMessage = AppointmentRequestSchema.safeParse(body);

  if (parsedMessage.success) {
    try {
      if (parsedMessage.data.userId) {
        let appointmentObj = {
          creationDate: parsedMessage.data.creationDate,
          email: parsedMessage.data.email,
          fullName: parsedMessage.data.fullName,
          message: parsedMessage.data.message,
          serviceId: parsedMessage.data.serviceId,
          tel: parsedMessage.data.tel,
          userId: parsedMessage.data.userId,
        };

        const appointment = await client.appointmentRequest.create({
          data: { ...appointmentObj },
        });

        return NextResponse.json({ message: appointment }, { status: 200 });
      } else {
        const user = await client.appointmentRequest.create({
          data: {
            creationDate: parsedMessage.data.creationDate,
            email: parsedMessage.data.email,
            fullName: parsedMessage.data.fullName,
            message: parsedMessage.data.message,
            serviceId: parsedMessage.data.serviceId,
            tel: parsedMessage.data.tel,
          },
        });

        return NextResponse.json({ message: user }, { status: 200 });
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
      }
      throw e;
    }
  } else {
    const errors = parsedMessage.error.formErrors.fieldErrors;
    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || token.role === "USER") {
    return NextResponse.json("Authorization Required.", { status: 401 });
  }

  if (token.role === "ADMIN") {
    const requests = await client.appointmentRequest.findMany();

    return NextResponse.json(requests, { status: 200 });
  }

  const ids = await client.user.findUnique({
    where: {
      id: token.id,
    },
    select: {
      personnel: {
        select: {
          services: {
            select: {
              serviceId: true,
            },
          },
        },
      },
    },
  });

  let serviceIds = ids?.personnel?.services.map((service) => {
    return service.serviceId;
  });

  const requests = await client.appointmentRequest.findMany({
    where: {
      serviceId: {
        in: serviceIds,
      },
      status: {
        equals: "PENDING",
      },
    },
  });

  return NextResponse.json(requests, { status: 200 });
}
