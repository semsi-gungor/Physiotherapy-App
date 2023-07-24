"use client";

import { FC, useMemo } from "react";
import Users from "../../../../dummy-api/users.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef, Row } from "@tanstack/react-table";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import classes from "./column.module.css";
import { LuArrowUpDown } from "react-icons/lu";
import Button from "@/components/ui/button/Button";

export type User = {
  userId: string;
  email: string;
  dateOfBirth: string;
  tel: string;
  fullName: string;
  role: string;
};

const page: FC = () => {
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "userId", header: "ID" },
      { accessorKey: "dateOfBirth", header: "DOB" },
      {
        accessorKey: "email",
        header: "EMAIL",
      },
      {
        accessorKey: "fullName",
        header: ({ column }) => {
          return (
            <div
              className={classes.sortButton}
              onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
              }}
            >
              <span>NAME</span>
              <LuArrowUpDown />
            </div>
          );
        },
      },
      { accessorKey: "role", header: "ROLE" },
      { accessorKey: "tel", header: "TELNO" },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction title="Üye Düzenleme">
              <Form original={row.original} />
            </RowAction>
          );
        },
      },
    ],
    []
  );

  return (
    <DashboardWrapper>
      <DataTable columns={columns} data={Users} caption="Üyeler" />
    </DashboardWrapper>
  );
};

function Form({ original }: { original: User }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data, "id:", original.userId);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        initialValue={original.email}
        name={`email${original.userId}`}
        register={register}
        type="email"
        label="Email"
        errorMessage={errors[`email${original.userId}`]?.message?.toString()}
        pattern={{
          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          message: "Hatalı e-mail girişi.",
        }}
      />
      <Input
        initialValue={original.fullName}
        name={`fullname${original.userId}`}
        register={register}
        type="text"
        label="İsim"
        errorMessage={errors[`fullname${original.userId}`]?.message?.toString()}
      />
      <Input
        initialValue={original.tel}
        name={`phoneNum${original.userId}`}
        register={register}
        type="text"
        label="Telefon numarası"
        errorMessage={errors[`phoneNum${original.userId}`]?.message?.toString()}
      />
      <Button size="md">Gönder</Button>
    </form>
  );
}

export default page;
