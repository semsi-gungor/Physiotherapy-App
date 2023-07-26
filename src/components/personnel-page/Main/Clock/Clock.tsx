"use client";

import { FC, useEffect, useState } from "react";
import classes from "./Clock.module.css";
import HourHand from "./HourHand";

interface ClockProps {}

const Clock: FC<ClockProps> = ({}) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let hour = value.getHours().toString();

  if (hour.length === 1) {
    hour = "0" + hour;
  }

  let minute = value.getMinutes().toString();

  if (minute.length === 1) {
    minute = "0" + minute;
  }

  return (
    <div className={classes.clockContainer}>
      <div className={classes.clock}>
        <HourHand degree={value.getSeconds() * 6} hand="second" />
        <HourHand degree={value.getMinutes() * 6} hand="minute" />
        <HourHand
          degree={(value.getHours() % 12) * 30 + value.getMinutes() / 2}
          hand="hour"
        />
        <div className={classes.circle}></div>
      </div>
      <div className={classes.oclock}>
        <span>{hour}</span>
        <span>{":"}</span>
        <span>{minute}</span>
      </div>
    </div>
  );
};

export default Clock;
