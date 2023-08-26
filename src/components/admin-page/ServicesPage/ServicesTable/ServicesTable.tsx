"use client";

import { FC, useMemo, useState } from "react";
import classes from "./ServicesTable.module.css";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import Button from "@/components/ui/button/Button";
import { z } from "zod";
import { ServiceSchema } from "@/models/Service";
import { useQueryClient } from "@tanstack/react-query";

import {
  UseMutateFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import axios, { AxiosError, AxiosResponse } from "axios";
import Image from "next/image";
import Spinner from "@/components/ui/spinner/Spinner";

type Service = z.infer<typeof ServiceSchema>;

const ServicesTable: FC = () => {
  const [openToast, setOpenToast] = useState(false);

  const servicesQuery = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axios.get("/api/services");

      return response.data;
    },
    staleTime: Infinity,
  });

  const deleteService = useMutation({
    mutationFn: async (id: string) => {
      const config = {
        data: id,
        headers: {
          Authorization: "Bearer your-token",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.delete("/api/services", config);

      return response;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: string) => {
      servicesQuery.refetch();
    },
    onError: (error: AxiosError<Error>) => {},
  });

  const columns = useMemo<ColumnDef<Service>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "title", header: "Başlık" },
      {
        accessorKey: "body",
        header: "Açıklama",
      },
      { accessorKey: "definition", header: "Tanım" },
      { accessorKey: "treatments", header: "Tedaviler" },
      {
        header: "RESİM",
        cell: ({ row }) => {
          return (
            <div className={classes.bodyImage}>
              <Image
                fill
                className={classes.image}
                src={row.original.bodyImage}
                alt=" "
              />
            </div>
          );
        },
      },
      {
        header: "BAŞLIK RESMİ",
        cell: ({ row }) => {
          return (
            <div className={classes.headerImage}>
              <Image
                alt={row.original.title}
                className={classes.image}
                src={row.original.headerImage}
                fill
                quality={50}
              />
            </div>
          );
        },
      },

      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction>
              <DeleteForm
                original={row.original}
                title="Hizmet Sil"
                setToast={setOpenToast}
                deletePersonnel={deleteService.mutate}
              />
              <EditForm original={row.original} title="Hizmet Düzenle" />
            </RowAction>
          );
        },
      },
    ],
    [deleteService.mutate]
  );

  return (
    <>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deleteService.isError}
        isLoading={deleteService.isLoading}
        isSuccsess={deleteService.isSuccess}
        duration={2000}
        pendingMessage="Hizmet siliniyor. "
        errorMessage={"Error"}
        succsessMessage="Hizmet başarıyla silindi."
      />
      {!servicesQuery.isLoading ? (
        <DataTable
          columns={columns}
          data={servicesQuery.data ?? []}
          caption="Hizmetler"
        />
      ) : (
        <div className="w-full h-screen grid place-items-center">
          <Spinner size={50} />
        </div>
      )}
    </>
  );
};

function EditForm({ original, title }: { original: Service; title: string }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {}

  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formHeader}>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Input
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
          name={`fullname${original.id}`}
          register={register}
          type="text"
          label="İsim"
          errorMessage={errors[`fullname${original.id}`]?.message?.toString()}
        />
        <Input
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
  original: Service;
  title: string;
  setToast: (state: boolean) => void;
  deletePersonnel: UseMutateFunction<
    AxiosResponse<any, any>,
    AxiosError<Error, any>,
    any,
    unknown
  >;
}) {
  return (
    <div className={classes.delete}>
      <h2 className={classes.formHeader}>{title}</h2>
      <ul className={classes.user}>
        <li className={classes.userField}>
          <span className={classes.field}>Personel Adı: </span>
          <span>{original.serviceId}</span>
        </li>
        <li className={classes.userField}>
          <span className={classes.field}>Personel Email: </span>
          <span>{original.title}</span>
        </li>
      </ul>
      <Button
        size="md"
        onClick={() => {
          let config = {
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

export default ServicesTable;
