import { FC } from "react";
import classes from "./AppointmentDetails.module.css";
import { Appointment } from "../MainPage";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

interface AppointmentDetailsProps {
  appointment: {
    id: string;
    date: Date;
    fullName: string;
    email: string;
    tel: string;
    createdAt: Date;
    approvedAt: Date;
    serviceId: string;
    personnelId: string;
  };
}

const AppointmentDetails: FC<AppointmentDetailsProps> = ({ appointment }) => {
  let telno = "";
  let name = "";
  let email = "";

  if (appointment) {
    telno = appointment.tel;
    name = appointment.fullName;
    email = appointment.email;
  } else {
    return (
      <div className={classes.container}>
        <div className="w-full h-full flex items-center justify-center text-3xl text-gray-400 font-bold">
          Randevu detayları yok.
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <h2>RANDEVU DETAYLARI</h2>
      </div>
      <div className={classes.body}>
        <div className={classes.person}>
          <div className={classes.credentials}>
            <p>İsim Soyisim: </p>
            <p>{name}</p>
          </div>
          <div className={classes.phone}>
            <AiFillPhone />
            <p>{telno}</p>
          </div>
          <div className={classes.mail}>
            <AiOutlineMail />
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
