"use client";

import { FC } from "react";
import classes from "./ProfileHeader.module.css";
import { BsPerson } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import { signOut } from "next-auth/react";

type HeaderProps = {
  fullName?: string;
};

const ProfileHeader: FC<HeaderProps> = ({ fullName }) => {
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <BsPerson />
      </div>
      <div className={classes.nameContainer}>
        <div className={classes.name}>{fullName}</div>
        <ProfileSettings />
        <div
          className={classes.logout}
          onClick={() => {
            signOut({ callbackUrl: "http://localhost:3000/" });
          }}
        >
          <BiLogOut />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
