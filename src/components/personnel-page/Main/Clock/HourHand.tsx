import { FC } from "react";
import classes from "./HourHand.module.css";

interface HourHandProps {
  degree: number;
  hand: "hour" | "minute" | "second";
}

const HourHand: FC<HourHandProps> = ({ degree, hand }) => {
  let handType = classes.hour;

  if (hand === "minute") {
    handType = classes.minute;
  } else if (hand === "second") {
    handType = classes.second;
  }

  return (
    <div
      className={classes.hand}
      style={{
        transform: `rotate(${degree}deg)`,
        width: `${handType === classes.hour ? "60%" : "90%"}`,
      }}
    >
      <div className={classes.back}></div>
      <div className={handType}></div>
    </div>
  );
};

export default HourHand;
