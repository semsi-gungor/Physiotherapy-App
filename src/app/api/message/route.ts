import { NextRequest, NextResponse } from "next/server";
import { MessageSchema } from "@/models/Message";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parsedMessage = MessageSchema.safeParse(body);

  if (parsedMessage.success) {
    return NextResponse.json(
      { message: "Message posted succsessfully." },
      { status: 200 }
    );
  } else {
    const errors = parsedMessage.error.formErrors.fieldErrors;

    return NextResponse.json({ errorMessage: errors }, { status: 400 });
  }
}
