import { FC } from "react";
import classes from "./AppointmentPage.module.css";
import DatePicker from "./DatePicker/DatePicker";
import TimePicker from "./TimePicker/TimePicker";

interface AppointmentPageProps {}

const AppointmentPage: FC<AppointmentPageProps> = ({}) => {
  return (
    <div className={classes.container}>
      <DatePicker />
      <TimePicker />
    </div>
  );
};

export default AppointmentPage;
