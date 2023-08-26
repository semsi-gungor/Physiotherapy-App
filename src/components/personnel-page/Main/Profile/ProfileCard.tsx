import { FC } from "react";
import classes from "./ProfileCard.module.css";
import { BsPerson } from "react-icons/bs";

interface ProfileCardProps {
  profileDetails: {
    fullName: string;
    title: string;
    totalAppointmentCount: number;
    totalBlogPostCount: number;
  };
}

const ProfileCard: FC<ProfileCardProps> = ({ profileDetails }) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <BsPerson />
      </div>
      <p className={classes.name}>{profileDetails.fullName}</p>
      <p className={classes.title}>{profileDetails.title}</p>
      <div className={classes.infoContainer}>
        <div className={classes.infoCard}>
          <p className={classes.number}>
            {profileDetails.totalAppointmentCount}
          </p>
          <p>Randevu Sayın</p>
        </div>
        <div className={classes.infoCard}>
          <p className={classes.number}>{profileDetails.totalBlogPostCount}</p>
          <p>Blog Yazıların</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
