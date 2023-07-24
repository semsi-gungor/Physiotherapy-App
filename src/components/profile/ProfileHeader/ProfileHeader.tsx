import { FC } from "react";
import classes from "./ProfileHeader.module.css";
import { BsPerson } from "react-icons/bs";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

interface ProfileHeaderProps {
  name: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ name }) => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <BsPerson />
      </div>
      <div className={classes.nameContainer}>
        <div className={classes.name}>{name}</div>
        <ProfileSettings />
      </div>
    </div>
  );
};

export default ProfileHeader;
