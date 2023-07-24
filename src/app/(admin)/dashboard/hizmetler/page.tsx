"use client";

import { FC, useMemo } from "react";
import Services from "../../../../dummy-api/services.json";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import TextareaInput from "@/components/ui/input/TextareaInput";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import Button from "@/components/ui/button/Button";

export type Service = {
  title: string;
  serviceId: string;
  body: string;
  definition: string;
  image: string;
  treatments: string[];
};

const page: FC = () => {
  const columns = useMemo<ColumnDef<Service>[]>(
    () => [
      { accessorKey: "serviceId", header: "ID" },
      { accessorKey: "title", header: "Başlık" },
      {
        accessorKey: "body",
        header: "Açıklama",
      },
      { accessorKey: "definition", header: "Tanım" },
      { accessorKey: "treatments", header: "Tedaviler" },
      { accessorKey: "image", header: "Resim" },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction title="Hizmet Düzenleme">
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
      <DataTable columns={columns} data={Services} caption="Hizmetler" />
    </DashboardWrapper>
  );
};

function Form({ original }: { original: Service }) {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data, "id:", original.serviceId);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        initialValue={original.serviceId}
        name={`sid${original.serviceId}`}
        register={register}
        type="text"
        label="Hizmet ID"
        errorMessage={errors[`sid${original.serviceId}`]?.message?.toString()}
      />
      <Input
        initialValue={original.title}
        name={`title${original.serviceId}`}
        register={register}
        type="text"
        label="Hizmet Adı"
        errorMessage={errors[`title${original.serviceId}`]?.message?.toString()}
      />
      <TextareaInput
        initialValue={original.body}
        label="Açıklama"
        name={`body${original.serviceId}`}
        register={register}
      />

      <TextareaInput
        initialValue={original.definition}
        label="Tanım"
        name={`definition${original.serviceId}`}
        register={register}
      />

      <Button size="md">Gönder</Button>
    </form>
  );
}

export default page;
