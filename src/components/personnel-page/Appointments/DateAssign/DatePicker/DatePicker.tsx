"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import classes from "./DatePicker.module.css";
import { DayClickEventHandler, DayOfWeek, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./day-picker.css";
import tr from "date-fns/locale/tr";
import { add, format } from "date-fns";
import { DateType } from "../DateAssign";
import { useQueryClient } from "@tanstack/react-query";

interface DatePickerProps {
  setDate: Dispatch<SetStateAction<DateType>>;
  setPickState: Dispatch<SetStateAction<boolean>>;
}

const bookedDays = [new Date(2023, 7, 10), new Date(2023, 7, 9)];
const bookedStyle = { color: "var(--error)", fontWeight: "700" };

// const dayOfWeekMatcher: DayOfWeek = {
//   //pazar gününü veren matcher, bu matcher ile takvim üzerinde pazar günlerini disable edeceğiz
//   dayOfWeek: [0],
// };

const DatePicker: FC<DatePickerProps> = ({ setDate, setPickState }) => {
  const [selected, setSelected] = useState<Date>(); // seçilen gün için state
  const queryClient = useQueryClient();

  let data: any = queryClient.getQueriesData(["personnelAppointments"])[0][1];

  const handleDayClick: DayClickEventHandler = (day: Date) => {
    // let today = new Date();
    // let tomorrow = add(today, { days: 1 });
    // let fiveDaysLater = add(tomorrow, { days: 5 });

    let today = new Date();
    let tomorrow = add(today, { days: 1 });

    let target = tomorrow;
    for (let i = 0; i < 4; i++) {
      if (add(target, { days: 1 }).getDay() === 0) {
        target = add(target, { days: 2 });
      } else {
        target = add(target, { days: 1 });
      }
    }

    let index = 0;
    for (let i = tomorrow; i < target; i = add(i, { days: 1 })) {
      if (i.toLocaleDateString() === day.toLocaleDateString()) {
        break;
      }
      index++;
    }

    setDate((prev) => {
      return { date: day, dateTime: null, filledHours: data[index] };
    });
    setPickState(true);
    // let appDate = dateToString(day); // seçilen günü yıl-ay-gün formatına çeviriyoruz
    // let result = findDate(appDate); // seçilen günü db içinde arıyoruz
    // let date = new Date(dateToString(day) + "T00:00:00"); //elimizdeki seçilen günü 00:00:00 saatine ayarlıyoruz
    // let start = add(date, { hours: 9 }); // randevu başlanguç saatini 09:00 olarak belirledik
    // let end = add(date, { hours: 17 }); // randevu bitiş saatini 17:00 olarak belirledik
    // const times = [];
    // for (let i = start; i <= end; i = add(i, { hours: 1 })) {
    //   //1 saat arayla randevu saatlerini db'den aldığımız saatlerle karşılaştırıyoruz bu şekilde saatin dolu olup olmadığını belirliyoruz
    //   let time = format(i, "kk:mm");
    //   if (time === "13:00") {
    //     //tatil saati
    //     continue;
    //   }
    //   let isBooked = false;
    //   let appointmentId = "";
    //   let index = result?.appointmentTimes.findIndex((aTime) => {
    //     return aTime.time === time; // saat daha önceden mevcut mu?
    //   });
    //   if (index !== -1) {
    //     isBooked = true; //eğer mevcut ise idsini al
    //     appointmentId = result?.appointmentTimes[index!].appointmentId!;
    //   }
    //   times.push({
    //     time: time,
    //     isBooked: isBooked,
    //     date: appDate,
    //     appointmentId: appointmentId,
    //   });
    // }
    // console.log(times); // times dizisi saat, saatin dolu olup olmadığı ve günün tarihini tutuyor.
  };

  let today = new Date();
  let tomorrow = add(today, { days: 1 });
  let target = add(tomorrow, { days: 4 });

  return (
    <>
      <div className={classes.caption}>
        <h1>RANDEVU TAKVİMİ</h1>
      </div>
      <div className={classes.calendar}>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          fromDate={tomorrow}
          toDate={target}
          showOutsideDays
          fixedWeeks
          required
          modifiers={{ booked: bookedDays }}
          modifiersStyles={{ booked: bookedStyle }}
          locale={tr}
          onDayClick={handleDayClick}
        />
      </div>
    </>
  );
};

export default DatePicker;
