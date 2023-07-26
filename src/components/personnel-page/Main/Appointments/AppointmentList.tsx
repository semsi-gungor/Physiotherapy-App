import { FC } from "react";
import classes from "./AppointmentList.module.css";
import AppointmentItem from "./AppointmentItem";
import { Appointment } from "../MainPage";

interface AppointmentsProps {
  appointments: Appointment[];
  onClick: (id: string) => void;
}

const Appointments: FC<AppointmentsProps> = ({ appointments, onClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <h2>Bugünün Randevuları</h2>
      </div>
      <ul className={classes.list}>
        {appointments.map((appointment) => {
          return (
            <AppointmentItem
              id={appointment.id}
              key={appointment.id}
              date={appointment.date}
              dob={appointment.dob}
              fullName={appointment.fullName}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Appointments;
