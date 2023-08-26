import { NextRequest, NextResponse } from "next/server";
import { UserDeleteSchema, UserSchema } from "@/models/User";
import { z } from "zod";
import bcrypt from "bcrypt";
import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type User = z.infer<typeof UserSchema>;
type DeleteConfig = z.infer<typeof UserDeleteSchema>;

//kullanıcı oluşturur
export async function POST(req: NextRequest) {
  const body: User = await req.json();

  const parsedUser = UserSchema.safeParse(body);

  if (parsedUser.success) {
    const fullName = parsedUser.data.fullName;
    const email = parsedUser.data.email;
    const hashedPassword = await bcrypt.hash(parsedUser.data.password, 15);
    const dob = parsedUser.data.dob;
    const role = parsedUser.data.role;
    const tel = parsedUser.data.tel;

    try {
      const user = await client.user.create({
        data: {
          fullName,
          email,
          password: hashedPassword,
          dob,
          role: role,
          tel,
        },
      });

      return NextResponse.json({ message: user }, { status: 200 });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          return NextResponse.json(
            { errorMessage: ["Email önceden kullanılmış."] },
            { status: 400 }
          );
        }
      }
      throw e;
    }
  } else {
    const errors = parsedUser.error.formErrors.fieldErrors;

    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}

//tek bir kullanıcıyı siler
export async function DELETE(req: NextRequest) {
  const body: DeleteConfig = await req.json();

  const parsedConfig = UserDeleteSchema.safeParse(body);

  if (parsedConfig.success) {
    if (body.role === "ADMIN") {
      return NextResponse.json("Admin hesap silinemez.", { status: 400 });
    }

    if (body.role === "PERSONNEL") {
      return NextResponse.json(
        "Lütfen personel hesaplarını personel sayfasından yapınız.",
        { status: 400 }
      );
    }

    try {
      const data = await client.user.delete({
        where: {
          email: body.email,
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
  } else {
    const errors = parsedConfig.error.formErrors.fieldErrors;

    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}

//tüm kullanıcıları getirir
export async function GET(req: NextRequest) {
  try {
    const data = await client.user.findMany();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
    }
    throw error;
  }
}

//field update
export async function PATCH(req: NextRequest) {
  const body: any = await req.json();

  let id = body.id;
  delete body.id;

  try {
    const user = await client.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json({ data: user }, { status: 200 });
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
