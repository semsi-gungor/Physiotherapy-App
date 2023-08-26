"use client";

import { FC, useMemo, useState } from "react";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import classes from "./UserPage.module.css";
import { LuArrowUpDown } from "react-icons/lu";
import Button from "@/components/ui/button/Button";
import { z } from "zod";
import { UserDeleteSchema, UserSchema, UserUpdateSchema } from "@/models/User";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import axios, { AxiosError, AxiosResponse } from "axios";
import Spinner from "@/components/ui/spinner/Spinner";

type User = z.infer<typeof UserSchema>;

type DeleteConfig = z.infer<typeof UserDeleteSchema>;

type UpdateConfig = z.infer<typeof UserUpdateSchema>;

const UserPage: FC = () => {
  const [openToast, setOpenToast] = useState(false);
  const [openEditToast, setOpenEditToast] = useState(false);
  const [error, setError] = useState("");

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/users");

      return data;
    },
  });

  const deleteUser = useMutation({
    mutationFn: async (userDelete: DeleteConfig) => {
      const config = {
        data: userDelete,
        headers: {
          Authorization: "Bearer your-token",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.delete("/api/user", config);

      return response;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: DeleteConfig) => {
      usersQuery.refetch();
    },
    onError: (error: AxiosError<Error>) => {
      setError(error.response!.data.toString());
    },
  });

  const updateUser = useMutation({
    mutationFn: async (updateConfig: any) => {
      const response = await axios.patch("/api/user", updateConfig);

      return response;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: any) => {
      usersQuery.refetch();
    },
    onError: (error: AxiosError<Error>) => {
      setError(error.response!.data.toString());
    },
  });

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "dob", header: "DOB" },
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
      {
        accessorKey: "role",
        header: ({ column }) => {
          return (
            <div
              className={classes.sortButton}
              onClick={() => {
                column.toggleSorting(column.getIsSorted() === "asc");
              }}
            >
              <span>ROLE</span>
              <LuArrowUpDown />
            </div>
          );
        },
      },
      { accessorKey: "tel", header: "TELNO" },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction>
              <DeleteForm
                original={row.original}
                title="Üye Sil"
                setToast={setOpenToast}
                deleteUser={deleteUser.mutate}
              />
              <EditForm
                original={row.original}
                title="Üye Düzenle"
                setToast={setOpenToast}
                updateUser={updateUser.mutate}
              />
            </RowAction>
          );
        },
      },
    ],
    [deleteUser.mutate, updateUser.mutate]
  );

  return (
    <DashboardWrapper>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deleteUser.isError}
        isLoading={deleteUser.isLoading}
        isSuccsess={deleteUser.isSuccess}
        duration={2000}
        pendingMessage="Kullanıcı siliniyor."
        errorMessage={error}
        succsessMessage="Kullanıcı başarıyla silindi."
      />
      <Toast
        open={openEditToast}
        setOpen={setOpenEditToast}
        isError={updateUser.isError}
        isLoading={updateUser.isLoading}
        isSuccsess={updateUser.isSuccess}
        duration={2000}
        pendingMessage="Kullanıcı güncelleniyor."
        errorMessage={error}
        succsessMessage="Kullanıcı başarıyla güncelledi."
      />
      {!usersQuery.isLoading ? (
        <DataTable columns={columns} data={usersQuery.data} caption="Üyeler" />
      ) : (
        <div className="w-full h-screen grid place-items-center">
          <Spinner size={50} />
        </div>
      )}
    </DashboardWrapper>
  );
};

function EditForm({
  original,
  title,
  setToast,
  updateUser,
}: {
  original: User;
  title: string;
  setToast: (state: boolean) => void;
  updateUser: UseMutateFunction<
    AxiosResponse<any, any>,
    AxiosError<Error, any>,
    any,
    unknown
  >;
}) {
  const form = useForm({
    mode: "all",
    defaultValues: {
      email: `${original.email}`,
      fullName: `${original.fullName}`,
      tel: `${original.tel}`,
      dob: `${original.dob}`,
    },
  });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(submitData: UpdateConfig) {
    let data = {
      ...(submitData.fullName !== original.fullName
        ? { fullName: submitData.fullName }
        : {}),
      ...(submitData.email !== original.email
        ? { email: submitData.email }
        : {}),
      ...(submitData.tel !== original.tel ? { tel: submitData.tel } : {}),
      ...(submitData.dob !== original.dob ? { dob: submitData.dob } : {}),
    };

    if (!(Object.keys(data).length === 0)) {
      let updatedData = { id: original.id, ...data };
      setToast(true);
      updateUser(updatedData);
    } else {
      return;
    }
  }

  return (
    <div className={classes.formWrapper}>
      <h2 className={classes.formHeader}>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Input
          name="email"
          register={register}
          type="email"
          label="Email"
          errorMessage={errors.email?.message?.toString()}
          pattern={{
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Hatalı e-mail girişi.",
          }}
        />
        <Input
          name="fullName"
          register={register}
          type="text"
          label="İsim"
          errorMessage={errors.fullName?.message?.toString()}
        />
        <Input
          name="tel"
          register={register}
          type="text"
          label="Telefon numarası"
          errorMessage={errors.tel?.message?.toString()}
        />
        <Input
          name="dob"
          register={register}
          type="text"
          label="Doğum Tarihi"
          errorMessage={errors.dob?.message?.toString()}
        />
        <Button size="md" type="submit">
          Gönder
        </Button>
      </form>
    </div>
  );
}

function DeleteForm({
  original,
  title,
  setToast,
  deleteUser,
}: {
  original: User;
  title: string;
  setToast: (state: boolean) => void;
  deleteUser: UseMutateFunction<
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
          <span className={classes.field}>Kullanıcı ismi: </span>
          <span>{original.fullName}</span>
        </li>
        <li className={classes.userField}>
          <span className={classes.field}>Kullanıcı email: </span>
          <span>{original.email}</span>
        </li>
        <li className={classes.userField}>
          <span className={classes.field}>Kullanıcı telefon: </span>
          <span>{original.tel}</span>
        </li>
      </ul>
      <Button
        size="md"
        onClick={() => {
          let config: DeleteConfig = {
            email: original.email,
            role: original.role,
          };
          setToast(true);
          deleteUser(config);
        }}
      >
        Onayla
      </Button>
    </div>
  );
}

export default UserPage;
