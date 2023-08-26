import { FC } from "react";
import classes from "./RecentContainer.module.css";
import RecentAppointments from "./RecentAppointments/RecentAppointments";
import RecentUsers from "./RecentUsers/RecentUsers";

interface RecentContainerProps {}

const RecentContainer: FC<RecentContainerProps> = ({}) => {
  return (
    <div className={classes.container}>
      <RecentAppointments />
      <RecentUsers />
    </div>
  );
};

export default RecentContainer;
