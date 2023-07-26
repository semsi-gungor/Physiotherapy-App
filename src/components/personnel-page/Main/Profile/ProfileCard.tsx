import { FC } from "react";
import classes from "./ProfileCard.module.css";
import { BsPerson } from "react-icons/bs";

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = ({}) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <BsPerson />
      </div>
      <p className={classes.name}>Şemsi GÜNGÖR</p>
      <p className={classes.title}>Fizyoterapist</p>
      <div className={classes.infoContainer}>
        <div className={classes.infoCard}>
          <p className={classes.number}>165</p>
          <p>Randevu Sayın</p>
        </div>
        <div className={classes.infoCard}>
          <p className={classes.number}>4</p>
          <p>Blog Yazıların</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
