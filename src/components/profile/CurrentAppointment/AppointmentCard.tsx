import { FC } from "react";
import classes from "./AppointmentCard.module.css";
import client from "@/lib/prisma";

interface AppointmentCardProps {
  appointmentReq: {
    id: string;
    message: string;
    fullName: string;
    email: string;
    tel: string;
    creationDate: string;
    serviceId: string;
    createdAt: Date;
    status: string;
    userId: string | null;
  };
}

const AppointmentCard: FC<AppointmentCardProps> = async ({
  appointmentReq,
}) => {
  const service = await client.service.findUnique({
    where: {
      serviceId: appointmentReq.serviceId ?? "",
    },
    select: {
      title: true,
    },
  });

  let bg = classes.info;

  let dayArray = appointmentReq.creationDate.split("-");

  if (appointmentReq.status === "APPROVED") {
    bg = classes.succsess;
  } else if (appointmentReq.status === "PENDING") {
    bg = classes.warning;
  } else if (appointmentReq.status === "OUTDATED") {
    bg = classes.error;
  }

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <p className={classes.day}>{dayArray[2]}</p>
        <p className={classes.month}>{dayArray[1]}</p>
        <p className={classes.year}>{dayArray[0]}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.service}>{service?.title ?? ""}</p>
        <div className={classes.status}>
          <div className={`${classes.indicator} ${bg}`}></div>
          <p className={classes.statusInfo}>
            {appointmentReq.status === "PENDING" &&
              "Randevunun onaylanması bekleniyor."}
            {appointmentReq.status === "APPROVED" && "Randevununuz onaylandı."}
            {appointmentReq.status === "FULFILLED" && "Tekrar bekleriz."}
            {appointmentReq.status === "OUTDATED" &&
              "Randevu tarihini geçirdiniz."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
