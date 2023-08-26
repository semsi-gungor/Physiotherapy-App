import { FC } from "react";
import classes from "./ProfilePage.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import CurrentAppointment from "./CurrentAppointment/CurrentAppointment";
import ProfileMain from "./ProfileMain/ProfileMain";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import client from "@/lib/prisma";

const ProfilePage: FC = async () => {
  const session = await getServerSession(options);
  const user = await client.user.findUnique({
    where: {
      id: session?.user.id,
    },
    select: {
      email: true,
      fullName: true,
      tel: true,
      appointmentRequests: {
        where: {
          status: {
            in: ["APPROVED", "PENDING"],
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return (
    <div className={classes.container}>
      <ProfileHeader fullName={session?.user.fullName} />
      {session?.user.role === "USER" &&
        user!.appointmentRequests.length > 0 && (
          <CurrentAppointment appointments={user!.appointmentRequests} />
        )}
      <ProfileMain />
    </div>
  );
};

export default ProfilePage;
