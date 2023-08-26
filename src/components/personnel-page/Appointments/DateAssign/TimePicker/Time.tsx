import { Dispatch, FC, SetStateAction } from "react";
import classes from "./Time.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";
import { DateType } from "../DateAssign";
import client from "@/lib/prisma";
import axios from "axios";

interface TimeProps {
  time: string;
  isBooked: boolean;
  appointmentId: string;
  timeWithDate: Date;
  date: DateType;
  setDate: Dispatch<SetStateAction<DateType>>;
}

const Time: FC<TimeProps> = ({
  time,
  isBooked,
  appointmentId,
  timeWithDate,
  setDate,
  date,
}) => {
  return (
    <Accordion.Item className={classes.acordionItem} value={time}>
      <Accordion.Header>
        <Accordion.Trigger asChild>
          <div
            className={`${classes.acordionButton} ${
              isBooked ? classes.booked : ""
            }`}
          >
            <p className={classes.time}>{time}</p>
            <span className={classes.acordionIcon}>
              <BsChevronDown />
            </span>
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content asChild>
        <div className={classes.acordionContent}>
          {!isBooked && (
            <button
              className={classes.timeButton}
              onClick={() => {
                setDate((prev) => {
                  return { ...prev, dateTime: timeWithDate };
                });
                // const response = await axios.post("/api/date-pick", {
                //   timeWithDate,
                //   fullName: "Şemsi",
                // });
                // console.log(response.data);
              }}
            >
              Saati Seç
            </button>
          )}
          {isBooked && (
            <>
              <button className={classes.timeButton}>Randevuyu Gör</button>
              <button className={classes.timeButton}>Randevuyu Sil</button>
            </>
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Time;
