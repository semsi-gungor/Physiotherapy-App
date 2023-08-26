import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/prisma";
import { z } from "zod";
import { ServiceSchema } from "@/models/Service";
import { Prisma } from "@prisma/client";

type Service = z.infer<typeof ServiceSchema>;

//hizmet oluşturur
export async function POST(req: NextRequest) {
  const body: Service = await req.json();

  const parsedService = ServiceSchema.safeParse(body);

  if (parsedService.success) {
    try {
      const service = await client.service.create({
        data: {
          body: parsedService.data.body,
          definition: parsedService.data.definition,
          serviceId: parsedService.data.serviceId,
          title: parsedService.data.title,
          bodyImage: parsedService.data.bodyImage,
          headerImage: parsedService.data.headerImage,
          treatments: parsedService.data.treatments,
        },
      });
      return NextResponse.json({ message: service }, { status: 200 });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return NextResponse.json(
            { errorMessage: ["ServiceId önceden kullanışmış."] },
            { status: 400 }
          );
        }
      }
    }
  } else {
    const errors = parsedService.error.formErrors.fieldErrors;
    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}

//tüm hizmetleri getirir
export async function GET(req: NextRequest) {
  try {
    const services = await client.service.findMany({
      include: {
        personnels: true,
      },
    });
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Something went wrong!" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const config: { id: string } = await req.json();

  try {
    const service = await client.service.update({
      where: {
        id: config.id,
      },
      data: {
        personnels: {
          set: [],
        },
      },
    });

    const data = await client.service.delete({
      where: {
        id: service.id,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { errorMessage: ["Kullanıcı bulunamadı."] },
          { status: 400 }
        );
      }
    }
    throw error;
  }
}
