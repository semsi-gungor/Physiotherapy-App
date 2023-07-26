import { FC } from "react";
import classes from "./TimePicker.module.css";

interface TimePickerProps {}

const times = [
  { time: "09:00", isBooked: false, date: "2023-08-04" },
  { time: "10:00", isBooked: false, date: "2023-08-04" },
  { time: "11:00", isBooked: false, date: "2023-08-04" },
  { time: "12:00", isBooked: false, date: "2023-08-04" },
  { time: "13:00", isBooked: false, date: "2023-08-04" },
  { time: "14:00", isBooked: false, date: "2023-08-04" },
  { time: "15:00", isBooked: false, date: "2023-08-04" },
  { time: "16:00", isBooked: false, date: "2023-08-04" },
  { time: "17:00", isBooked: false, date: "2023-08-04" },
];

const TimePicker: FC<TimePickerProps> = ({}) => {
  return (
    <div className={classes.container}>
      <div className={classes.caption}></div>
    </div>
  );
};

export default TimePicker;
