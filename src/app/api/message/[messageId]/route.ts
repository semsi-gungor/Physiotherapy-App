import getUser from "@/helpers/getUser";
import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const user = await getUser(req);

  if (user === "USER") {
    return NextResponse.json("Forbidden.", { status: 403 });
  }

  const id = req.url.split("/").at(-1);

  try {
    const data = await client.message.delete({
      where: {
        id: id,
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
