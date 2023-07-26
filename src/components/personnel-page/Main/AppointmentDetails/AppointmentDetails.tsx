import { FC } from "react";
import classes from "./AppointmentDetails.module.css";
import { Appointment } from "../MainPage";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

interface AppointmentDetailsProps {
  appointment: Appointment;
}

const AppointmentDetails: FC<AppointmentDetailsProps> = ({ appointment }) => {
  const telno = appointment.phoneNum;
  const name = appointment.fullName;
  const email = appointment.email;
  const message = appointment.message;

  let dobDate = new Date(appointment.dob).getTime();
  let now = new Date().getTime();
  let ageDate = now - dobDate;

  const age = new Date(ageDate).getUTCFullYear() - 1970;

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
          <div className={classes.credentials}>
            <p>Yaş: </p>
            <p>{age}</p>
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
        <p className={classes.message}>{message}</p>
      </div>
    </div>
  );
};

export default AppointmentDetails;
