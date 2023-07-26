"use client";

import { FC, useState } from "react";
import classes from "./DatePicker.module.css";
import { DayClickEventHandler, DayOfWeek, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./day-picker.css";
import tr from "date-fns/locale/tr";
import { add, format } from "date-fns";
import { dateToString } from "@/helpers/date-helpers";
import { findDate } from "@/dummy-api/calendar";

interface DatePickerProps {}

const bookedDays = [new Date(2023, 7, 10), new Date(2023, 7, 9)];
const bookedStyle = { color: "var(--error)", fontWeight: "700" };

const dayOfWeekMatcher: DayOfWeek = {
  //pazar gününü veren matcher, bu matcher ile takvim üzerinde pazar günlerini disable edeceğiz
  dayOfWeek: [0],
};

const DatePicker: FC<DatePickerProps> = ({}) => {
  const [selected, setSelected] = useState<Date>(); // seçilen gün için state

  const handleDayClick: DayClickEventHandler = (day: Date) => {
    if (day.getDay() === 0) {
      console.log("Seçilen gün pazar.");
      return;
    } else {
      let appDate = dateToString(day); // seçilen günü yıl-ay-gün formatına çeviriyoruz

      let result = findDate(appDate); // seçilen günü db içinde arıyoruz

      let date = new Date(dateToString(day) + "T00:00:00"); //elimizdeki seçilen günü 00:00:00 saatine ayarlıyoruz

      let start = add(date, { hours: 9 }); // randevu başlanguç saatini 09:00 olarak belirledik
      let end = add(date, { hours: 17 }); // randevu bitiş saatini 17:00 olarak belirledik

      const times = [];

      for (let i = start; i <= end; i = add(i, { hours: 1 })) {
        //1 saat arayla randevu saatlerini db'den aldığımız saatlerle karşılaştırıyoruz bu şekilde saatin dolu olup olmadığını belirliyoruz
        let time = format(i, "kk:mm");
        let isBooked = false;

        if (
          result?.appointmentTimes.find((aTime) => {
            return aTime.time === time;
          })
        ) {
          isBooked = true;
        }

        times.push({ time: time, isBooked: isBooked, date: appDate });
      }
      console.log(times); // times dizisi saat, saatin dolu olup olmadığı ve günün tarihini tutuyor.
    }
  };

  const weekBefore = new Date();
  const monthLater = new Date();
  weekBefore.setDate(new Date().getDate() + 1);
  monthLater.setDate(new Date().getDate() + 15);

  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <h1>RANDEVU TAKVİMİ</h1>
      </div>
      <div className={classes.calendar}>
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
          onDayClick={handleDayClick}
          disabled={dayOfWeekMatcher}
        />
      </div>
    </div>
  );
};

export default DatePicker;
