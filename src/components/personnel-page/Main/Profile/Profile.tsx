import { FC } from "react";
import classes from "./Profile.module.css";
import Welcoming from "./Welcoming";
import ProfileCard from "./ProfileCard";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div className={classes.container}>
      <ProfileCard />
      <Welcoming name="Şemsi" appointmentCount={6} />
    </div>
  );
};

export default Profile;
