import { FC } from "react";
import classes from "./Profile.module.css";
import Welcoming from "./Welcoming";
import ProfileCard from "./ProfileCard";

interface ProfileProps {
  profileDetails: {
    fullName: string;
    title: string;
    totalAppointmentCount: number;
    totalBlogPostCount: number;
  };
  todaysAppointmentsCount: number;
}

const Profile: FC<ProfileProps> = ({
  profileDetails,
  todaysAppointmentsCount,
}) => {
  let name = profileDetails.fullName.split(" ");

  return (
    <div className={classes.container}>
      <ProfileCard profileDetails={profileDetails} />
      <Welcoming name={name[0]} appointmentCount={todaysAppointmentsCount} />
    </div>
  );
};

export default Profile;
