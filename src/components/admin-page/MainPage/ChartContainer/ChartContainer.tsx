"use client";

import { FC, useState } from "react";
import classes from "./ChartContainer.module.css";
import Chart from "../Chart/Chart";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner/Spinner";
import { motion, AnimatePresence } from "framer-motion";

const ChartContainer: FC = () => {
  const [activeChart, setActiveChart] = useState(true);

  const monthlyDataQuery = useQuery({
    queryKey: ["monthlyData"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/appointments/monthly");

      return data;
    },
  });

  const appointmentsCountQuery = useQuery({
    queryKey: ["appointmentsData"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/appointments/individual");

      return data;
    },
  });

  return (
    <div className={classes.container}>
      <div className="w-full h-full relative overflow-hidden">
        <AnimatePresence initial={false}>
          {activeChart && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ bounce: 0.1 }}
              className="w-full h-full  absolute"
            >
              {!monthlyDataQuery.isLoading ? (
                <Chart
                  data={monthlyDataQuery.data}
                  color="#000000"
                  title="Yıllık"
                />
              ) : (
                <div className="w-96 h-full items-center justify-center">
                  <Spinner size={40} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!activeChart && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ bounce: 0.1 }}
              className="w-full h-full absolute"
            >
              {!appointmentsCountQuery.isLoading ? (
                <Chart
                  data={appointmentsCountQuery.data}
                  color="#000000"
                  title="Hizmetler"
                />
              ) : (
                <div className="w-96 h-full items-center justify-center">
                  <Spinner size={40} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
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

/*
{false ? (
            <Chart data={data} color="#aac7d8" title="Yıllık" />
          ) : (
            <div className="w-96 h-full items-center justify-center">
              <Spinner size={40} />
            </div>
          )}
          <Chart data={data} color="#d97a14" title="Hizmetler" /
          */
