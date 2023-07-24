import { FC } from "react";
import classes from "./CurrentAppointment.module.css";

interface CurrentAppointmentProps {}

type AppointmentRequest = {
  appointmentId: string;
  serviceId: string;
  status: "pending" | "appoved" | "fulfilled" | "outdated";
  date: string;
};

const request: AppointmentRequest = {
  appointmentId: "ar1",
  date: "24.07.2023",
  serviceId: "s1",
  status: "pending",
};

const CurrentAppointment: FC<CurrentAppointmentProps> = ({}) => {
  let bg = classes.info;

  if (request.status === "appoved") {
    bg = classes.succsess;
  } else if (request.status === "pending") {
    bg = classes.warning;
  } else if (request.status === "outdated") {
    bg = classes.error;
  }

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <p className={classes.day}>24</p>
        <p className={classes.month}>Haziran</p>
        <p className={classes.year}>2023</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.service}>Hamile Pilates</p>
        <div className={classes.status}>
          <div className={`${classes.indicator} ${bg}`}></div>
          <p className={classes.statusInfo}>
            {request.status === "pending" &&
              "Randevunun onaylanması bekleniyor."}
            {request.status === "appoved" && "Randevununuz onaylandı."}
            {request.status === "fulfilled" && "Tekrar bekleriz."}
            {request.status === "outdated" && "Randevu tarihini geçirdiniz."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentAppointment;
