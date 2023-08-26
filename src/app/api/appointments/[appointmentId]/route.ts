import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const appointmentId = req.url.split("/").at(-1);

  try {
    const appointment = await client.appointment.delete({
      where: {
        id: appointmentId,
      },
    });

    return NextResponse.json(appointment, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error", { status: 400 });
  }
}
