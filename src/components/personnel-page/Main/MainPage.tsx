"use client";

import { FC, useState } from "react";
import classes from "./MainPage.module.css";
import AppointmentList from "./Appointments/AppointmentList";
import AppointmentDetails from "./AppointmentDetails/AppointmentDetails";
import Profile from "./Profile/Profile";
import Clock from "./Clock/Clock";
import Calendar from "./Calendar/Calendar";

const appointments = [
  {
    id: "a1",
    date: "2023-07-08 09:00:00",
    fullName: "Semsi Gungor",
    dob: "1998-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
  {
    id: "a2",
    date: "2023-07-08 10:00:00",
    fullName: "Semsi Gungor",
    dob: "2000-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
  {
    id: "a3",
    date: "1978-07-08 11:00:00",
    fullName: "Semsi Gungor",
    dob: "1999-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
  {
    id: "a4",
    date: "1991-07-08 12:00:00",
    fullName: "Semsi Gungor",
    dob: "1999-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
  {
    id: "a5",
    date: "2023-07-08 14:00:00",
    fullName: "Semsi Gungor",
    dob: "1985-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
  {
    id: "a6",
    date: "2023-07-08 16:00:00",
    fullName: "Semsi Gungor",
    dob: "1963-09-04",
    email: "semsi_gungor@hotmail.com",
    phoneNum: "056565656554",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed posuere ante. Vivamus at leo laoreet purus porta aliquet ac ut augue. Suspendisse at congue quam. Integer enim eros, volutpat ac purus imperdiet, condimentum imperdiet lorem. Etiam faucibus mauris nec purus molestie dapibus. Ut sem augue, elementum nec iaculis at, molestie quis dui. Phasellus tellus mi, feugiat et turpis at, lobortis viverra augue.",
  },
];

export type Appointment = {
  date: string;
  fullName: string;
  dob: string;
  email: string;
  phoneNum: string;
  message: string;
  id: string;
};

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  const [detailedAppointment, setDetailedAppointment] = useState(
    appointments[0]
  );

  function getAppointmentDetails(id: string) {
    let result = appointments.find((app) => {
      return app.id === id;
    });

    if (result) {
      setDetailedAppointment(result);
    }
  }

  return (
    <div className={classes.container}>
      <AppointmentList
        appointments={appointments}
        onClick={getAppointmentDetails}
      />
      <AppointmentDetails appointment={detailedAppointment} />
      <Profile />
      <Clock />
      <Calendar />
    </div>
  );
};

export default MainPage;
