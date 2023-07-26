import { FC } from "react";
import classes from "./AppointmentItem.module.css";
import { BsPersonCircle } from "react-icons/bs";

interface AppointmentProps {
  id: string;
  date: string;
  fullName: string;
  dob: string;
  onClick: (id: string) => void;
}

const Appointment: FC<AppointmentProps> = ({
  id,
  date,
  fullName,
  dob,
  onClick,
}) => {
  let dobDate = new Date(dob).getTime();
  let now = new Date().getTime();
  let ageDate = now - dobDate;

  let age = new Date(ageDate).getUTCFullYear() - 1970;

  let time = new Date(date);
  let hour = time.getHours().toString();
  let minutes = time.getMinutes().toString();

  if (hour.length === 1) {
    hour = "0" + hour;
  }

  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

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
        <p className={classes.age}>Yaş: {age}</p>
      </div>
      <div className={classes.time}>
        <span>{`${hour}:${minutes}`}</span>
      </div>
    </li>
  );
};

export default Appointment;
