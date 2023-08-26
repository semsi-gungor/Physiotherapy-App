"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { DateType } from "../DateAssign/DateAssign";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import LoadingDisababler from "@/components/ui/spinner-and-disabler/LoadingDisababler";
import { useQueryClient } from "@tanstack/react-query";

type Approve = {
  appointmentData: {
    fullName: string;
    email: string;
    tel: string;
    createdAt: string;
    serviceId: string;
    requestId: string;
  };
  date: DateType;
  setPickingDate: Dispatch<SetStateAction<boolean>>;
};

const Approve: FC<Approve> = ({ appointmentData, date, setPickingDate }) => {
  const clientQuery = useQueryClient();

  const [openToast, setOpenToast] = useState(false);

  let creationDate = new Date(appointmentData.createdAt).toLocaleString();
  let appointmentDate = date.date ? date.date.toLocaleDateString() : "";
  let appointmentTime = date.dateTime ? format(date.dateTime, "kk:mm") : "";

  const createAppointment = useMutation({
    mutationFn: async (appointment: any) => {
      const response = await axios.post(
        "/api/date-pick",
        JSON.stringify(appointment)
      );

      return response;
    },
    onSuccess: () => {
      setPickingDate(false);
    },
    onError: () => {},
  });

  return (
    <>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createAppointment.isError}
        isLoading={createAppointment.isLoading}
        isSuccsess={createAppointment.isSuccess}
        duration={2000}
        pendingMessage="Randevu gönderiliyor."
        errorMessage="Randevu gönderilemedi."
        succsessMessage="Randevu gönderildi."
      />
      <div className=" w-full h-full flex-col">
        <LoadingDisababler isLoading={createAppointment.isLoading} />
        <div className="h-1/5 w-full grid place-items-center">
          <h2 className=" text-[2.5rem] font-bold text-[var(--color-6)]">
            RANDEVU ONAYLAMA
          </h2>
        </div>
        {/* name email tel creaitondate service date time */}
        <div className="h-4/5 max-w-lg bg-[var(--color-transparent)] rounded-3xl mx-auto pt-16 pb-8 px-16 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold text-lg">İsim</p>
            <p className="font-bold">:</p>
            <p>{appointmentData.fullName}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Email</p>
            <p className="font-bold">:</p>
            <p>{appointmentData.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Tel</p>
            <p className="font-bold">:</p>
            <p>{appointmentData.tel}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Hizmet</p>
            <p className="font-bold">:</p>
            <p>{appointmentData.serviceId}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Oluşturulma Tarihi</p>
            <p className="font-bold">:</p>
            <p>{creationDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Randevu Tarihi</p>
            <p className="font-bold">:</p>
            <p>{appointmentDate}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-40 font-bold  text-lg">Randevu Saati</p>
            <p className="font-bold">:</p>
            <p>{appointmentTime}</p>
          </div>
          <Button
            variant="default"
            disabled={!date.date || !date.dateTime}
            onClick={() => {
              if (!date.date || !date.dateTime) {
                return;
              }

              let { createdAt, ...rest } = appointmentData;
              let createdDate = new Date(createdAt);

              let appointment = {
                ...rest,
                date: date.dateTime,
                createdAt: createdDate,
              };

              setOpenToast(true);
              createAppointment.mutate(appointment);
              clientQuery.invalidateQueries({
                queryKey: ["appointmentRequests"],
              });
            }}
          >
            Onayla
          </Button>
        </div>
      </div>
    </>
  );
};

export default Approve;
