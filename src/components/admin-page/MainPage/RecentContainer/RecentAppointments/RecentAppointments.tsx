"use client";

import { FC } from "react";
import classes from "./Recentappointments.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

type Appointment = {
  email: string;
  fullName: string;
  serviceId: string;
  personnel: { user: { fullName: string } };
  date: string;
};

const Recentappointments: FC = ({}) => {
  const recentAppointmentsQuery = useQuery({
    queryKey: ["recentAppointments"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/recent-appointments");

      return data as Appointment[];
    },
  });

  return (
    <div className={classes.container}>
      <div className="h-1/5 flex items-center px-8">
        <h3 className="font-semibold text-xl">Yeni Randevular</h3>
      </div>
      <ul className="h-4/5 px-8 flex flex-col">
        {recentAppointmentsQuery.isLoading ? (
          <div className="flex flex-col h-full justify-between pb-8">
            <div className=" flex flex-col gap-2">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </div>
            <div className=" flex flex-col gap-2">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </div>
            <div className=" flex flex-col gap-2">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </div>
            <div className=" flex flex-col gap-2">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </div>
            <div className=" flex flex-col gap-2">
              <Skeleton className="w-64 h-4" />
              <Skeleton className="w-64 h-4" />
            </div>
          </div>
        ) : (
          recentAppointmentsQuery.data?.map((appointment, index) => {
            let appDate = new Date(appointment.date);

            return (
              <li key={index} className="flex-1 relative ">
                <div className="flex gap-2">
                  <p className="text-sm">{appointment.serviceId}</p>
                  <p>-</p>
                  <p className="text-sm">
                    {appointment.personnel.user.fullName}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-sm">
                    {appointment.fullName}
                  </p>
                  <p>-</p>
                  <p className="text-sm">{appDate.toLocaleDateString()}</p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Recentappointments;
