import { FC } from "react";
import classes from "./Welcoming.module.css";

interface WelcomingProps {
  name: string;
  appointmentCount: number;
}

const Welcoming: FC<WelcomingProps> = ({ name, appointmentCount }) => {
  return (
    <div className={classes.container}>
      <div className={classes.welcoming}>
        <p>Hoş geldin</p>
        <p className={classes.name}>{name}!</p>
      </div>
      <div className={classes.info}>
        Bugün{" "}
        <span className={classes.number}>{appointmentCount} randevun</span> var.
      </div>
    </div>
  );
};

export default Welcoming;
