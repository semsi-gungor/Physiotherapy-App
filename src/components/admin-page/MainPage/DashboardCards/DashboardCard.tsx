import { FC } from "react";
import classes from "./DashboardCard.module.css";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  icon: IconType;
  body: string;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, icon: Icon, body }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>{title}</p>
        <span>
          <Icon />
        </span>
      </div>
      <div className={classes.body}>{body}</div>
    </div>
  );
};

export default DashboardCard;
