import getUser from "@/helpers/getUser";
import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await getUser(req);

  if (user !== "ADMIN") {
    return NextResponse.json("Error", { status: 401 });
  }

  try {
    const totalUsers = await client.appointment.count();

    return NextResponse.json(totalUsers, { status: 200 });
  } catch (error) {}
}
