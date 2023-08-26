import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const year = new Date().getFullYear();
const firstDay = new Date(year, 0, 1);
const lastDay = new Date(year, 11, 31);

export async function GET(req: NextRequest) {
  const data = await client.appointment.findMany({
    where: {
      date: {
        gte: firstDay,
        lte: lastDay,
      },
    },
  });

  let jan = 0;
  let feb = 0;
  let mar = 0;
  let apr = 0;
  let may = 0;
  let jun = 0;
  let jul = 0;
  let aug = 0;
  let sep = 0;
  let oct = 0;
  let nov = 0;
  let dec = 0;

  for (let index = 0; index < data.length; index++) {
    switch (data[index].date.getMonth()) {
      case 0:
        jan++;
        break;
      case 1:
        feb++;
        break;
      case 2:
        mar++;
        break;
      case 3:
        apr++;
        break;
      case 4:
        may++;
        break;
      case 5:
        jun++;
        break;
      case 6:
        jul++;
        break;
      case 7:
        aug++;
        break;
      case 8:
        sep++;
        break;
      case 9:
        oct++;
        break;
      case 10:
        nov++;
        break;
      case 11:
        dec++;
        break;
      default:
        break;
    }
  }

  return NextResponse.json(
    [
      { name: "Oc.", value: jan },
      { name: "Şu.", value: feb },
      { name: "Ma.", value: mar },
      { name: "Ni.", value: apr },
      { name: "Ma.", value: may },
      { name: "Ha.", value: jun },
      { name: "Te.", value: jul },
      { name: "Ağ.", value: aug },
      { name: "Ey.", value: sep },
      { name: "Ek.", value: oct },
      { name: "Ka.", value: nov },
      { name: "Ar.", value: dec },
    ],
    { status: 200 }
  );
}
/*
const monthlyCounts = await client.appointment.groupBy({
    by: "serviceId",
    _count: {
      id: true,
    },
});
*/
