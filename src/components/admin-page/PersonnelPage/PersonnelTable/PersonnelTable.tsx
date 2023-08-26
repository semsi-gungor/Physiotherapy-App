"use client";

import { FC, useMemo, useState } from "react";
import classes from "./PersonnelTable.module.css";

import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import { LuArrowUpDown } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { z } from "zod";
import { PersonnelDeleteConfigSchema } from "@/models/Personnel";
import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import axios, { AxiosError, AxiosResponse } from "axios";
import DashboardWrapper from "../../DashboardWrapper/DashboardWrapper";

// her bir personelin tipi
type Personnel = {
  id: string;
  title: string;
  appointmentCount: number;
  serviceIDs: string[];
  userId: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    password: string;
    dob: string;
    tel: string;
    role: "PERSONNEL" | "ADMIN" | "USER";
  };
  services: {
    title: string;
  }[];
};

type DeleteConfig = z.infer<typeof PersonnelDeleteConfigSchema>;

interface PersonnelTableProps {
  personnels: Personnel[];
}

const PersonnelTable: FC<PersonnelTableProps> = ({ personnels }) => {
  const [openToast, setOpenToast] = useState(false);

  // personel silme
  const deletePersonnel = useMutation({
    mutationFn: async (userDelete: DeleteConfig) => {
      const config = {
        data: userDelete,
        headers: {
          Authorization: "Bearer your-token",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.delete("/api/personnel", config);

      return response;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: DeleteConfig) => {},
    onError: (error: AxiosError<Error>) => {},
  });

  // personel tablosu için sutünların oluşturulması
  const columns = useMemo<ColumnDef<Personnel>[]>(
    () => [
      { accessorKey: "user.dob", header: "DOB" },
      {
        accessorKey: "HİZMETLER",
        cell: ({ row }) => {
          return (
            <ul className={classes.services}>
              {row.original.services.map((service, index) => {
                return <li key={index}>{service.title}</li>;
              })}
            </ul>
          );
        },
      },
      {
        accessorKey: "user.email",
        header: "EMAIL",
      },
      {
        accessorKey: "user.fullName",
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
      { accessorKey: "title", header: "ÜNVAN" },
      { accessorKey: "user.tel", header: "TELNO" },

      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction>
              <DeleteForm
                original={row.original}
                title="Personel Sil"
                setToast={setOpenToast}
                deletePersonnel={deletePersonnel.mutate}
              />
              <EditForm original={row.original} title="Personel Düzenle" />
            </RowAction>
          );
        },
      },
    ],
    [deletePersonnel.mutate]
  );

  return (
    <>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deletePersonnel.isError}
        isLoading={deletePersonnel.isLoading}
        isSuccsess={deletePersonnel.isSuccess}
        duration={2000}
        pendingMessage="Kullanıcı siliniyor. "
        errorMessage={"Error"}
        succsessMessage="Kullanıcı başarıyla silindi."
      />
      <DashboardWrapper>
        <DataTable columns={columns} data={personnels} caption="Personeller" />
      </DashboardWrapper>
    </>
  );
};

function EditForm({ original, title }: { original: Personnel; title: string }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {}

  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formHeader}>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Input
          initialValue={original.user.email}
          name={`email${original.id}`}
          register={register}
          type="email"
          label="Email"
          errorMessage={errors[`email${original.id}`]?.message?.toString()}
          pattern={{
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Hatalı e-mail girişi.",
          }}
        />
        <Input
          initialValue={original.user.fullName}
          name={`fullname${original.id}`}
          register={register}
          type="text"
          label="İsim"
          errorMessage={errors[`fullname${original.id}`]?.message?.toString()}
        />
        <Input
          initialValue={original.user.tel}
          name={`phoneNum${original.id}`}
          register={register}
          type="text"
          label="Telefon numarası"
          errorMessage={errors[`phoneNum${original.id}`]?.message?.toString()}
        />
        <Button size="md">Gönder</Button>
      </form>
    </div>
  );
}

function DeleteForm({
  original,
  title,
  setToast,
  deletePersonnel,
}: {
  original: Personnel;
  title: string;
  setToast: (state: boolean) => void;
  deletePersonnel: UseMutateFunction<
    AxiosResponse<any, any>,
    AxiosError<Error, any>,
    DeleteConfig,
    unknown
  >;
}) {
  return (
    <div className={classes.delete}>
      <h2 className={classes.formHeader}>{title}</h2>
      <ul className={classes.user}>
        <li className={classes.userField}>
          <span className={classes.field}>Personel Adı: </span>
          <span>{original.user.fullName}</span>
        </li>
        <li className={classes.userField}>
          <span className={classes.field}>Personel Email: </span>
          <span>{original.user.email}</span>
        </li>
        <li className={classes.userField}>
          <span className={classes.field}>Personel Telefon: </span>
          <span>{original.user.tel}</span>
        </li>
      </ul>
      <Button
        size="md"
        onClick={() => {
          let config: DeleteConfig = {
            id: original.id!,
          };
          setToast(true);
          deletePersonnel(config);
        }}
      >
        Onayla
      </Button>
    </div>
  );
}

export default PersonnelTable;
