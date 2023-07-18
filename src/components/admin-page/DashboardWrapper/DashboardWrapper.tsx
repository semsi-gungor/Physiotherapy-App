import { FC } from "react";
import classes from "./DashboardWrapper.module.css";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default DashboardWrapper;
