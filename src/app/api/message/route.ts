import { NextRequest, NextResponse } from "next/server";
import { MessageSchema } from "@/models/Message";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parsedMessage = MessageSchema.safeParse(body);

  if (parsedMessage.success) {
    return NextResponse.json({ message: "Message posted succsessfully." });
  } else {
    const errors = parsedMessage.error.formErrors.fieldErrors;
    const newErrorResponse = new Response(
      JSON.stringify({
        error: errors,
      }),
      {
        status: 400,
        statusText: "Bad Request",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return newErrorResponse;
  }
}
