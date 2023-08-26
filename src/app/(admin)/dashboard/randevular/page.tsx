"use client";

import { FC, useMemo } from "react";
import Appointments from "../../../../dummy-api/appointments.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import classes from "./column.module.css";
import { LuArrowUpDown } from "react-icons/lu";
import Button from "@/components/ui/button/Button";

export type Appointment = {
  appointmentId: string;
  serviceId: string;
  date: string;
  tel: string;
  fullName: string;
  email: string;
};

const Page: FC = () => {
  const columns = useMemo<ColumnDef<Appointment>[]>(
    () => [
      { accessorKey: "appointmentId", header: "ID" },
      { accessorKey: "serviceId", header: "SID" },
      {
        accessorKey: "fullName",
        header: "İSİM",
      },
      {
        accessorKey: "date",
        header: ({ column }) => {
          return (
            <div
              className={classes.sortButton}
              onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
              }}
            >
              <span>TARİH</span>
              <LuArrowUpDown />
            </div>
          );
        },
      },
      { accessorKey: "email", header: "MAİL" },
      { accessorKey: "tel", header: "TELNO" },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            // <RowAction title="Randevu Düzenleme">
            //   <Form original={row.original} />
            // </RowAction>
            <div></div>
          );
        },
      },
    ],
    []
  );

  return (
    <DashboardWrapper>
      <DataTable columns={columns} data={Appointments} caption="Randevular" />
    </DashboardWrapper>
  );
};

function Form({ original }: { original: Appointment }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        initialValue={original.serviceId}
        name={`sid${original.appointmentId}`}
        register={register}
        type="text"
        label="Hizmet ID"
        errorMessage={errors[
          `sid${original.appointmentId}`
        ]?.message?.toString()}
      />
      <Input
        initialValue={original.fullName}
        name={`fullname${original.appointmentId}`}
        register={register}
        type="text"
        label="İsim"
        errorMessage={errors[
          `fullname${original.appointmentId}`
        ]?.message?.toString()}
      />
      <Input
        initialValue={original.date}
        name={`date${original.appointmentId}`}
        register={register}
        type="text"
        label="Tarih"
        errorMessage={errors[
          `date${original.appointmentId}`
        ]?.message?.toString()}
      />
      <Input
        initialValue={original.email}
        name={`email${original.appointmentId}`}
        register={register}
        type="email"
        label="Email"
        errorMessage={errors[
          `email${original.appointmentId}`
        ]?.message?.toString()}
      />
      <Input
        initialValue={original.tel}
        name={`phoneNum${original.appointmentId}`}
        register={register}
        type="text"
        label="Telefon Numarası"
        errorMessage={errors[
          `phoneNum${original.appointmentId}`
        ]?.message?.toString()}
      />
      <Button size="md">Gönder</Button>
    </form>
  );
}

export default Page;
