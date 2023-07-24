import { FC } from "react";
import classes from "./ProfilePage.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import CurrentAppointment from "./CurrentAppointment/CurrentAppointment";
import ProfileMain from "./ProfileMain/ProfileMain";

const ProfilePage: FC = () => {
  return (
    <div className={classes.container}>
      <ProfileHeader name="Şemsi Güngör" />
      <CurrentAppointment />
      <ProfileMain />
    </div>
  );
};

export default ProfilePage;
