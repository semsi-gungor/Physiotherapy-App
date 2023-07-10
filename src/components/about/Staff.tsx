import { FC } from "react";
import classes from "./Staff.module.css";
import StaffCard from "./StaffCard";

const Crew: FC = ({}) => {
  return (
    <div className={classes.container}>
      <StaffCard />
      <StaffCard />
      <StaffCard />
    </div>
  );
};

export default Crew;
