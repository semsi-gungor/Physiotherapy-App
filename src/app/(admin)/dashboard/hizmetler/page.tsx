"use client";

import { FC, useMemo } from "react";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import Services from "../../../../dummy-api/services.json";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { Column, ColumnDef } from "@tanstack/react-table";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import TextareaInput from "@/components/ui/input/TextareaInput";
import ListInput from "@/components/create-post/ListInput/OrderedListInput";
import NewRowAction from "@/components/data-tables/RowAction/NewRowAction";
import Button from "@/components/ui/button/Button";

export type Service = {
  serviceId: string;
  title: string;
  body: string;
  definition: string;
  treatments: string[];
  image: string;
};

const page: FC = () => {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  const columns = useMemo<ColumnDef<Service>[]>(
    () => [
      { accessorKey: "serviceId", header: "ID" },
      { accessorKey: "title", header: "HİZMET" },
      {
        accessorKey: "body",
        header: "AÇIKLAMA",
      },
      {
        accessorKey: "definition",
        header: "TANIM",
      },
      { accessorKey: "treatments", header: "TEDAVİLER" },
      {
        cell: ({ row }) => {
          return "";
        },
        header: "RESİM",
      },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <NewRowAction>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  initialValue={row.original.serviceId}
                  name="id"
                  register={register}
                  type="text"
                  label="SID"
                  errorMessage={errors.id?.message?.toString()}
                />
                <Input
                  initialValue={row.original.title}
                  name="title"
                  register={register}
                  type="text"
                  label="Hizmet Adı"
                  errorMessage={errors.title?.message?.toString()}
                />
                <TextareaInput
                  initialValue={row.original.body}
                  name="body"
                  label="Açıklaması"
                  register={register}
                  errorMessage={errors.body?.message?.toString()}
                />
                <TextareaInput
                  initialValue={row.original.body}
                  name="definition"
                  label="Tanımı"
                  register={register}
                  errorMessage={errors.definition?.message?.toString()}
                />
                <p>Tedaviler</p>
                <ListInput
                  initialValue={row.original.treatments}
                  isBlog={false}
                />
                <Button size="md" variant="primary">
                  Gönder
                </Button>
              </form>
            </NewRowAction>
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <DashboardWrapper>
        <DataTable columns={columns} data={Services} caption="Hizmetlerimiz" />
      </DashboardWrapper>
    </div>
  );
};

export default page;
