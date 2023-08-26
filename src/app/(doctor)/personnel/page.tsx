import { FC } from "react";
import MainPage from "@/components/personnel-page/Main/MainPage";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import client from "@/lib/prisma";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import { add } from "date-fns";

const Page: FC = async () => {
  const session = await getServerSession(options);

  const personnel = await client.personnel.findUnique({
    where: {
      userId: session?.user.id,
    },
    include: {
      services: { select: { id: true } },
      user: true,
      _count: {
        select: {
          appointsments: true,
          blogPosts: true,
        },
      },
    },
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = add(today, { days: 1 });

  const todaysAppointments = await client.appointment.findMany({
    where: {
      personnelId: personnel?.id,
      date: {
        gte: today,
        lt: target,
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  let profileDetails = {
    fullName: personnel?.user.fullName ?? "",
    title: personnel?.title ?? "",
    totalAppointmentCount: personnel?._count.appointsments ?? 0,
    totalBlogPostCount: personnel?._count.blogPosts ?? 0,
  };

  return (
    <QueryProvider>
      <MainPage
        profileDetails={profileDetails}
        todaysAppointments={todaysAppointments}
      />
    </QueryProvider>
  );
};

export default Page;
