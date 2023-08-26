"use client";

import { FC } from "react";
import classes from "./RecentUsers.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BsPersonFill } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";

type User = {
  email: string;
  fullName: string;
};

const RecentUsers: FC = ({}) => {
  const recentUsersQuery = useQuery({
    queryKey: ["recentUsers"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/recent-users");

      return data as User[];
    },
  });

  return (
    <div className={classes.container}>
      <div className="h-1/5 flex items-center px-8">
        <h3 className="font-semibold text-xl">Gelen Yeni Kullanıcılar</h3>
      </div>
      <ul className="h-4/5 px-8 flex flex-col">
        {recentUsersQuery.isLoading ? (
          <div className="flex-1 flex flex-col">
            <div className="flex flex-1 items-center justify-center gap-4 w-full">
              <div className="w-16 square rounded-full ">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] gap-2 flex flex-col">
                <div className="w-full">
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className=" w-full">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4 w-full">
              <div className="w-16 square rounded-full ">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] gap-2 flex flex-col">
                <div className="w-full">
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className=" w-full">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4 w-full">
              <div className="w-16 square rounded-full ">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] gap-2 flex flex-col">
                <div className="w-full">
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className=" w-full">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4 w-full">
              <div className="w-16 square rounded-full ">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] gap-2 flex flex-col">
                <div className="w-full">
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className=" w-full">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4 w-full">
              <div className="w-16 square rounded-full ">
                <Skeleton className="h-full w-full rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] gap-2 flex flex-col">
                <div className="w-full">
                  <Skeleton className="h-4 w-full" />
                </div>
                <div className=" w-full">
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          recentUsersQuery.data?.map((user, index) => {
            return (
              <li key={index} className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-16 square rounded-full border border-gray-300 grid place-items-center text-3xl">
                    <BsPersonFill />
                  </div>
                  <div>
                    <p className="font-semibold">{user.fullName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default RecentUsers;
