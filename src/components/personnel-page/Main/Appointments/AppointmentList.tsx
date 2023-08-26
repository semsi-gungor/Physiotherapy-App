import { FC } from "react";
import classes from "./AppointmentList.module.css";
import AppointmentItem from "./AppointmentItem";
import { Appointment } from "../MainPage";

interface AppointmentsProps {
  todaysAppointments: {
    id: string;
    date: Date;
    fullName: string;
    email: string;
    tel: string;
    createdAt: Date;
    approvedAt: Date;
    serviceId: string;
    personnelId: string;
  }[];
  onClick: (id: string) => void;
}

const Appointments: FC<AppointmentsProps> = ({
  todaysAppointments,
  onClick,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <h2>Bugünün Randevuları</h2>
      </div>
      {todaysAppointments.length > 0 ? (
        <ul className={classes.list}>
          {todaysAppointments.map((appointment) => {
            return (
              <AppointmentItem
                id={appointment.id}
                key={appointment.id}
                date={appointment.date.toLocaleTimeString()}
                fullName={appointment.fullName}
                onClick={onClick.bind(null, appointment.id)}
              />
            );
          })}
        </ul>
      ) : (
        <div className="flex mt-16 justify-center">
          <h3 className="text-3xl text-gray-400 font-bold">
            Bugün randevu bulunmuyor.
          </h3>
        </div>
      )}
    </div>
  );
};

export default Appointments;
