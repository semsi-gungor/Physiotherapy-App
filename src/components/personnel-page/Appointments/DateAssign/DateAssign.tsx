"use client";

import { FC, useState, useEffect, SetStateAction, Dispatch } from "react";
import classes from "./DateAssign.module.css";
import { BsArrowLeft } from "react-icons/bs";
import DatePicker from "./DatePicker/DatePicker";
import TimePicker from "./TimePicker/TimePicker";
import Approve from "../ApproveAppointment/Approve";
import { AnimatePresence, motion } from "framer-motion";

interface DateAssignProps {
  appointmentData: {
    fullName: string;
    email: string;
    tel: string;
    createdAt: string;
    serviceId: string;
    requestId: string;
  };
  pickAppointment: () => void;
  setPickingDate: Dispatch<SetStateAction<boolean>>;
}

export type DateType = {
  date: Date | null;
  dateTime: Date | null;
  filledHours: {
    id: string;
    date: string;
    fullName: string;
    email: string;
    tel: string;
    createdAt: string;
    approvedAt: string;
    serviceId: string;
    personnelId: string;
  }[];
};

const DateAssign: FC<DateAssignProps> = ({
  pickAppointment,
  appointmentData,
  setPickingDate,
}) => {
  const [date, setDate] = useState<DateType>({
    date: null,
    dateTime: null,
    filledHours: [],
  });
  const [pickState, setPickState] = useState(false);

  return (
    <div className={classes.container}>
      <div className="flex-1 relative">
        <AnimatePresence initial={false}>
          {pickState && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center absolute"
            >
              <TimePicker
                date={date}
                setDate={setDate}
                setPickState={setPickState}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!pickState && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center absolute"
            >
              <DatePicker setDate={setDate} setPickState={setPickState} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-1">
        <Approve
          appointmentData={appointmentData}
          date={date}
          setPickingDate={setPickingDate}
        />
      </div>

      <div className={classes.back} onClick={pickAppointment}>
        <BsArrowLeft />
      </div>
    </div>
  );
};

export default DateAssign;
