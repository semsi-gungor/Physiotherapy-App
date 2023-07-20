"use client";

import { FC, useState } from "react";
import classes from "./ChartContainer.module.css";
import Chart from "../Chart/Chart";

const ChartContainer: FC = () => {
  const [activeChart, setActiveChart] = useState(true);

  const data = [
    {
      name: "Page A",
      value: 4000,
    },
    {
      name: "Page B",
      value: 3000,
    },
    {
      name: "Page C",
      value: 2000,
    },
    {
      name: "Page D",
      value: 2780,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.charts}>
        <div
          className={classes.chartSlider}
          style={{ transform: `translateX(${activeChart ? 0 : -100}%)` }}
        >
          <Chart data={data} color="#aac7d8" />
          <Chart data={data} color="#d97a14" />
        </div>
      </div>
      <div className={classes.control}>
        <span
          onClick={() => {
            setActiveChart(true);
          }}
          className={`${classes.controlButton} ${
            activeChart ? classes.activeButton : ""
          }`}
        ></span>
        <span
          onClick={() => {
            setActiveChart(false);
          }}
          className={`${classes.controlButton} ${
            activeChart ? "" : classes.activeButton
          }`}
        ></span>
      </div>
    </div>
  );
};

export default ChartContainer;
