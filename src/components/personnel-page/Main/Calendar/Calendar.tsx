"use client";

import { FC, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import classes from "./Calendar.module.css";
import "./DefaultCalendar.css";
import tr from "date-fns/locale/tr";

interface CalendarProps {}

const bookedDays = [new Date(2023, 6, 29), new Date(2023, 6, 28)];
const bookedStyle = { color: "var(--error)", fontWeight: "700" };

const Calendar: FC<CalendarProps> = ({}) => {
  const [selected, setSelected] = useState<Date>();

  const weekBefore = new Date();
  const monthLater = new Date();
  weekBefore.setDate(new Date().getDate() - 7);
  monthLater.setDate(new Date().getDate() + 30);

  return (
    <div className={classes.container}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        fromDate={weekBefore}
        toDate={monthLater}
        showOutsideDays
        fixedWeeks
        required
        modifiers={{ booked: bookedDays }}
        modifiersStyles={{ booked: bookedStyle }}
        locale={tr}
      />
    </div>
  );
};

export default Calendar;
