"use client";

import { FC, useState } from "react";
import classes from "./AppointmentPage.module.css";
import DateAssign from "./DateAssign/DateAssign";
import AppointmentRequests from "./AppointmentRequests/AppointmentRequests";
import { motion, AnimatePresence } from "framer-motion";

interface AppointmentPageProps {}

const AppointmentPage: FC<AppointmentPageProps> = ({}) => {
  const [pickingDate, setPickingDate] = useState(false);

  const [appointmentData, setAppointmentData] = useState({
    fullName: "",
    email: "",
    tel: "",
    createdAt: "",
    serviceId: "",
    requestId: "",
  });

  return (
    <div className={classes.container}>
      <AnimatePresence initial={false}>
        {!pickingDate && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className={classes.taskContainer}
          >
            <AppointmentRequests
              pickDate={() => {
                setPickingDate(true);
              }}
              setData={setAppointmentData}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {pickingDate && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className={classes.taskContainer}
          >
            <DateAssign
              pickAppointment={() => {
                setPickingDate(false);
              }}
              appointmentData={appointmentData}
              setPickingDate={setPickingDate}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentPage;
