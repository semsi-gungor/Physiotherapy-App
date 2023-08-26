import { NextRequest, NextResponse } from "next/server";
import { MessageSchema } from "@/models/Message";
import { z } from "zod";
import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import getUser from "@/helpers/getUser";
import { add } from "date-fns";

type Message = z.infer<typeof MessageSchema>;

export async function POST(req: NextRequest) {
  const body: Message = await req.json();

  const parsedMessage = MessageSchema.safeParse(body);

  if (parsedMessage.success) {
    try {
      const message = await client.message.create({
        data: {
          ...parsedMessage.data,
        },
      });

      return NextResponse.json({ message: message }, { status: 200 });
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
  const user = await getUser(req);

  if (user === "USER") {
    return NextResponse.json("Forbidden.", { status: 403 });
  }

  try {
    const today = new Date();
    const weekBefore = add(today, { days: -7 });

    const messages = await client.message.findMany({
      where: {
        createdAt: {
          gte: weekBefore,
          lte: today,
        },
      },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
