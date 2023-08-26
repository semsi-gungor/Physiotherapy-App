import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { add } from "date-fns";

export async function GET(req: NextRequest) {
  const month = req.url.split("/").at(-1);

  let monthIndex = parseInt(month!);

  if (isNaN(monthIndex)) {
    return NextResponse.json("error", { status: 400 });
  }

  let today = new Date().getFullYear();
  let firstDay = new Date(today, monthIndex);
  let monthLater = add(firstDay, { days: 30 });

  let lastMonthFirst = add(firstDay, { days: -31 });

  try {
    const thisMonth = await client.user.findMany({
      where: {
        date: {
          gte: firstDay,
          lt: monthLater,
        },
      },
    });

    const lastMonth = await client.user.findMany({
      where: {
        date: {
          gte: lastMonthFirst,
          lt: firstDay,
        },
      },
    });

    return NextResponse.json(
      { lastMonth: lastMonth.length, thisMonth: thisMonth.length },
      { status: 200 }
    );
  } catch (error) {}
}
