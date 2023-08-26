import { FC } from "react";
import classes from "./DashboardCard.module.css";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  icon: IconType;
  children: React.ReactNode;
}

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  icon: Icon,
  children,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>{title}</p>
        <span>
          <Icon />
        </span>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default DashboardCard;
