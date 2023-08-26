"use client";

import { FC } from "react";
import { DayPicker as Calender } from "react-day-picker";
import "react-day-picker/dist/style.css";
import classes from "./Calendar.module.css";
import "./DefaultCalendar.css";
import tr from "date-fns/locale/tr";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = ({}) => {
  return (
    <div className={classes.calendarContainer}>
      <Calender mode="single" showOutsideDays fixedWeeks locale={tr} />
    </div>
  );
};

export default Calendar;
