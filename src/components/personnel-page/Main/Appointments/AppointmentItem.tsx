import { FC } from "react";
import classes from "./AppointmentItem.module.css";
import { BsPersonCircle } from "react-icons/bs";

interface AppointmentProps {
  id: string;
  date: string;
  fullName: string;
  onClick: (id: string) => void;
}

const Appointment: FC<AppointmentProps> = ({ id, date, fullName, onClick }) => {
  let time = date.slice(0, 5);

  return (
    <li
      className={classes.item}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={classes.person}>
        <span className={classes.icon}>
          <BsPersonCircle />
        </span>
        <p className={classes.name}>{fullName}</p>
      </div>
      <div className={classes.time}>
        <span>{time}</span>
      </div>
    </li>
  );
};

export default Appointment;
