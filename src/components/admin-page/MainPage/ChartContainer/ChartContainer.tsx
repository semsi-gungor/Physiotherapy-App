"use client";

import { FC, useState } from "react";
import classes from "./ChartContainer.module.css";
import Chart from "../Chart/Chart";

const ChartContainer: FC = () => {
  const [activeChart, setActiveChart] = useState(true);

  const data = [
    {
      name: "Oc.",
      value: 4000,
    },
    {
      name: "Şu.",
      value: 3000,
    },
    {
      name: "Ma.",
      value: 2000,
    },
    {
      name: "Ni.",
      value: 2780,
    },
    {
      name: "Ma.",
      value: 4000,
    },
    {
      name: "Haz.",
      value: 3000,
    },
    {
      name: "Tem.",
      value: 2000,
    },
    {
      name: "Ağ.",
      value: 2780,
    },
    {
      name: "Ey.",
      value: 4000,
    },
    {
      name: "Ek.",
      value: 3000,
    },
    {
      name: "Kas.",
      value: 2000,
    },
    {
      name: "Ara.",
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
          <Chart data={data} color="#aac7d8" title="Yıllık" />
          <Chart data={data} color="#d97a14" title="Hizmetler" />
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
