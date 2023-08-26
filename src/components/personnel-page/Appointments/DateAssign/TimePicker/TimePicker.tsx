"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import classes from "./TimePicker.module.css";
import Time from "./Time";
import * as Accordion from "@radix-ui/react-accordion";
import { DateType } from "../DateAssign";
import { add, format } from "date-fns";
import { IoReturnUpBack } from "react-icons/io5";

interface TimePickerProps {
  date: DateType;
  setDate: Dispatch<SetStateAction<DateType>>;
  setPickState: Dispatch<SetStateAction<boolean>>;
}

const TimePicker: FC<TimePickerProps> = ({ date, setDate, setPickState }) => {
  let start = add(date.date!, { hours: 9 }); // randevu başlanguç saatini 09:00 olarak belirledik
  let end = add(date.date!, { hours: 17 });

  let filledTimes = [];

  if (date.filledHours.length > 0) {
    // bugün dolu saatler var mı yok mu
    for (let i = 0; i < date.filledHours.length; i++) {
      let d = new Date(date.filledHours[i].date);
      let filled = format(d, "kk:mm");
      let id = date.filledHours[i].id;
      let isBooked = true;
      let dateWithTime = d;

      filledTimes.push({
        appointmentId: id,
        time: filled,
        isBooked,
        dateWithTime,
      });
    }
  }

  const times: {
    time: string;
    isBooked: boolean;
    appointmentId: string;
    dateWithTime: Date;
  }[] = [];

  for (let i = start; i <= end; i = add(i, { hours: 1 })) {
    //1 saat arayla randevu saatlerini db'den aldığımız saatlerle karşılaştırıyoruz bu şekilde saatin dolu olup olmadığını belirliyoruz
    let time = format(i, "kk:mm");

    if (time === "13:00") {
    } else {
      let filled = filledTimes.find((fTime) => {
        return fTime.time === time;
      });

      if (filled) {
        times.push(filled);
      } else {
        times.push({
          appointmentId: "",
          isBooked: false,
          time: time,
          dateWithTime: i,
        });
      }
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.caption}>
        <h1>SAATLER</h1>
      </div>
      <div className={classes.times}>
        <div className="flex items-center w-full px-8 justify-between">
          <div className={classes.date}>{date.date?.toLocaleDateString()}</div>
          <span
            onClick={() => {
              setDate((prev) => {
                return { ...prev, dateTime: null };
              });
              setPickState(false);
            }}
            className="text-4xl rounded-full cursor-pointer px-6 py-2 transition hover:bg-[var(--color-transparent)] hover:-translate-x-2"
          >
            <IoReturnUpBack />
          </span>
        </div>

        <Accordion.Root
          className={classes.acordionRoot}
          type="single"
          collapsible
        >
          {times.length > 0 ? (
            times.map((time) => {
              return (
                <Time
                  date={date}
                  setDate={setDate}
                  key={time.time}
                  time={time.time}
                  timeWithDate={time.dateWithTime}
                  isBooked={time.isBooked}
                  appointmentId={time.appointmentId}
                />
              );
            })
          ) : (
            <div>Gün Dolu</div>
          )}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default TimePicker;
