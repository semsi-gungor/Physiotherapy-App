"use client";

import { FC } from "react";
import classes from "./DashboardCards.module.css";
import DashboardCard from "./DashboardCard";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner/Spinner";

interface DashboardCardsProps {}

const DashboardCards: FC<DashboardCardsProps> = ({}) => {
  const totalUserQuery = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/admin/total-users`);

      return data;
    },
  });

  const monthlyUserChangeQuery = useQuery({
    queryKey: ["monthlyUser"],
    queryFn: async () => {
      const month = new Date().getMonth();

      const { data } = await axios.get(`/api/admin/total-users/${month}`);

      let inc = 0;
      let newValue = data.thisMonth;
      let oldValue = data.lastMonth;

      if (oldValue === 0) {
        inc = ((newValue - oldValue) / 1) * 100;
      } else {
        inc = ((newValue - oldValue) / oldValue) * 100;
      }

      let monthly = {
        diffrence: data.thisMonth - data.lastMonth,
        change: inc,
      };

      return monthly;
    },
  });

  const totalAppointmentQuery = useQuery({
    queryKey: ["totalAppointments"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/admin/total-appointments`);

      return data;
    },
  });

  const monthlyAppointmentChangeQuery = useQuery({
    queryKey: ["monthlyAppointments"],
    queryFn: async () => {
      const month = new Date().getMonth();

      const { data } = await axios.get(
        `/api/admin/total-appointments/${month}`
      );

      let inc = 0;
      let newValue = data.thisMonth;
      let oldValue = data.lastMonth;

      if (oldValue === 0) {
        inc = ((newValue - oldValue) / 1) * 100;
      } else {
        inc = ((newValue - oldValue) / oldValue) * 100;
      }

      let monthly = {
        diffrence: data.thisMonth - data.lastMonth,
        change: inc,
      };

      return monthly;
    },
  });

  return (
    <div className={classes.container}>
      <DashboardCard title="Toplam Üye" icon={BsFillPersonFill}>
        {!totalUserQuery.isLoading ? (
          <div className="w-full h-full flex gap-2 items-center justify-center text-4xl">
            {totalUserQuery.data > 0 && totalUserQuery ? (
              <>
                <p>{"+" + totalUserQuery.data.toString()}</p>
                <p className="text-3xl">Üye</p>
              </>
            ) : (
              <>
                <p>{totalUserQuery.data.toString()}</p>
                <p className="text-3xl">Üye</p>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full grid items-center">
            <Spinner size={40} />
          </div>
        )}
      </DashboardCard>
      <DashboardCard title="Aylık Toplam Üye" icon={BsFillPersonFill}>
        {!monthlyUserChangeQuery.isLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <p className="text-3xl">
              {monthlyUserChangeQuery.data!.diffrence > 0
                ? "+" + monthlyUserChangeQuery.data?.diffrence.toString()
                : monthlyUserChangeQuery.data?.diffrence}
            </p>
            <div className="text-xl text-gray-500 flex items-center gap-2">
              <span className="text-base">Aylık üye değişimi: </span>
              <p>
                {monthlyUserChangeQuery.data!.change > 0
                  ? "+" + monthlyUserChangeQuery.data?.change.toString() + "%"
                  : monthlyUserChangeQuery.data?.change.toString() + "%"}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full grid items-center">
            <Spinner size={40} />
          </div>
        )}
      </DashboardCard>
      <DashboardCard title="Toplam Randevu" icon={BsFillPersonFill}>
        {!totalAppointmentQuery.isLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-4xl">
            <div className="flex gap-2 items-center justify-center text-4xl">
              {totalAppointmentQuery.data > 0 ? (
                <>
                  <p>{"+" + totalAppointmentQuery.data.toString()}</p>
                  <p className="text-3xl">Randevu</p>
                </>
              ) : (
                totalAppointmentQuery.data.toString()
              )}
            </div>
          </div>
        ) : (
          <div className="w-full h-full grid items-center">
            <Spinner size={40} />
          </div>
        )}
      </DashboardCard>
      <DashboardCard title="Aylık Toplam Randevu" icon={BsFillPersonFill}>
        {!monthlyAppointmentChangeQuery.isLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <p className="text-3xl">
              {monthlyAppointmentChangeQuery.data!.diffrence > 0
                ? "+" + monthlyAppointmentChangeQuery.data?.diffrence.toString()
                : monthlyAppointmentChangeQuery.data?.diffrence}
            </p>
            <div className="text-xl text-gray-500 flex items-center gap-2">
              <span className="text-base">Aylık randevu değişimi: </span>
              <p>
                {monthlyAppointmentChangeQuery.data!.change > 0
                  ? "+" +
                    monthlyAppointmentChangeQuery.data?.change.toString() +
                    "%"
                  : monthlyAppointmentChangeQuery.data?.change.toString() + "%"}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full grid items-center">
            <Spinner size={40} />
          </div>
        )}
      </DashboardCard>
    </div>
  );
};

export default DashboardCards;
