import { FC } from "react";
import classes from "./AppointmentPage.module.css";
import AppointmentForm from "./AppointmentForm";
import bg from "../../../public/grad-2.png";
import Image from "next/image";
import SessionProvider from "../providers/SessionProvider/SessionProvider";

const AppointmentPage: FC = ({}) => {
  return (
    <div className="w-full h-screen grid place-items-center relative">
      <div className="absolute inset-0">
        <div className="w-[20rem] h-[20rem] rounded-full bg-orange-100 blur-3xl absolute left-10 top-10"></div>
        <div className="w-[40rem] h-[40rem] rounded-full bg-slate-300  blur-3xl absolute right-16 top-40"></div>
        <div className="w-[30rem] h-[30rem] rounded-full bg-sky-100  blur-3xl absolute left-[20rem] -bottom-[10rem]"></div>
      </div>
      <div className={classes.container}>
        <h4 className={classes.header}>Randevu Al</h4>
        <SessionProvider>
          <AppointmentForm />
        </SessionProvider>
      </div>
    </div>
  );
};

export default AppointmentPage;
