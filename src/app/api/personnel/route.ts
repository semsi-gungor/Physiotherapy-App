import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import client from "@/lib/prisma";
import { z } from "zod";
import { PersonnelSchema } from "@/models/Personnel";
import { Prisma } from "@prisma/client";

type Personnel = z.infer<typeof PersonnelSchema>;

//personel oluşturma
export async function POST(req: NextRequest) {
  const body: Personnel = await req.json();

  const parsedPersonnel = PersonnelSchema.safeParse(body);

  if (parsedPersonnel.success) {
    const fullName = parsedPersonnel.data.fullName;
    const email = parsedPersonnel.data.email;
    const hashedPassword = await bcrypt.hash(parsedPersonnel.data.password, 15);
    const dob = parsedPersonnel.data.dob;
    const title = parsedPersonnel.data.title;
    const serviceId = parsedPersonnel.data.serviceId;
    const role = parsedPersonnel.data.tel;
    const tel = parsedPersonnel.data.tel;

    try {
      const personnel = await client.personnel.create({
        data: {
          title,
          user: {
            create: {
              dob,
              email,
              fullName,
              password: hashedPassword,
              role: "PERSONNEL",
              tel,
            },
          },
          services: {
            connect: serviceId.map((id) => ({ id })),
          },
        },
      });

      return NextResponse.json({ data: personnel }, { status: 200 });
    } catch (error) {}
  } else {
    const errors = parsedPersonnel.error.formErrors.fieldErrors;

    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}

//tek bir personeli ve bağlı olduğu kullanıcıyı siler ayrıca bağlı olduğu servislerden karşılıklı kopar
export async function DELETE(req: NextRequest) {
  const config: { id: string } = await req.json();

  try {
    const user = await client.personnel.update({
      where: {
        id: config.id,
      },
      data: {
        services: {
          set: [],
        },
      },
    });

    const data = await client.user.delete({
      where: {
        id: user.userId,
      },
      include: {
        personnel: true,
      },
    });

    return NextResponse.json({ data: data }, { status: 200 });
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

//tüm personelleri getirir
export async function GET(req: NextRequest) {
  try {
    const data = await client.personnel.findMany({
      include: {
        user: true,
        services: true,
        blogPosts: true,
        appointsments: true,
      },
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
    }
    throw error;
  }
}
