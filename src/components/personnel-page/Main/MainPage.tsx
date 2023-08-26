"use client";

import { FC, useState } from "react";
import classes from "./MainPage.module.css";
import AppointmentList from "./Appointments/AppointmentList";
import AppointmentDetails from "./AppointmentDetails/AppointmentDetails";
import Profile from "./Profile/Profile";
import Clock from "./Clock/Clock";
import Calendar from "./Calendar/Calendar";

export type Appointment = {
  date: string;
  fullName: string;
  dob: string;
  email: string;
  phoneNum: string;
  message: string;
  id: string;
};

interface MainPageProps {
  profileDetails: {
    fullName: string;
    title: string;
    totalAppointmentCount: number;
    totalBlogPostCount: number;
  };
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
}

const MainPage: FC<MainPageProps> = ({
  profileDetails,
  todaysAppointments,
}) => {
  const [detailedAppointment, setDetailedAppointment] = useState(
    todaysAppointments[0]
  );

  function getAppointmentDetails(id: string) {
    let result = todaysAppointments.find((app) => {
      return app.id === id;
    });

    if (result) {
      setDetailedAppointment(result);
    }
  }

  return (
    <div className={classes.container}>
      <AppointmentList
        todaysAppointments={todaysAppointments}
        onClick={getAppointmentDetails}
      />
      <AppointmentDetails appointment={detailedAppointment} />
      <Profile
        profileDetails={profileDetails}
        todaysAppointmentsCount={todaysAppointments.length}
      />
      <Clock />
      <Calendar />
    </div>
  );
};

export default MainPage;
