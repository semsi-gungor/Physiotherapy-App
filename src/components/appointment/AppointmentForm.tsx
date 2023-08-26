"use client";

import { FC, useState } from "react";
import classes from "./AppointmentForm.module.css";
import Input from "../ui/input/Input";
import TextareaInput from "../ui/input/TextareaInput";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../ui/button/Button";
import { services } from "@/dummy-api/services";
import FormError from "../ui/form-error/FormError";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Toast from "../../components/ui/toast/Toast";
import { z } from "zod";
import { AppointmentRequestSchema } from "../../models/AppointmentRequest";
import LoadingDisababler from "../ui/spinner-and-disabler/LoadingDisababler";
import { dateToString } from "@/helpers/date-helpers";
import { useSession } from "next-auth/react";
import Alert from "../ui/alert/Alert";

type AppointmentRequest = z.infer<typeof AppointmentRequestSchema>;

type Error = {
  errorMessage: {
    message?: string[] | undefined;
    fullName?: string[] | undefined;
    email?: string[] | undefined;
    creationDate?: string[] | undefined;
    tel?: string[] | undefined;
  };
};

const AppointmentForm: FC = ({}) => {
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const { data: session } = useSession();

  const createAppointment = useMutation({
    mutationFn: async (appointment: AppointmentRequest) => {
      const response = await axios.post(
        "/api/appointment",
        JSON.stringify(appointment)
      );

      return response;
    },
    onSuccess: (
      data: AxiosResponse<any, any>,
      variables: AppointmentRequest
    ) => {
      reset();
    },
    onError: (error: AxiosError<Error>) => {
      const errors = error.response?.data;
      Object.entries(errors!.errorMessage).map((error) => {
        setFieldErrors([]);
        setFieldErrors((prev) => {
          if (prev === error[1]) {
            return prev;
          }
          return prev.concat(error[1]);
        });
      });
    },
  });

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, reset, watch } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    let date = new Date();
    let dateString = dateToString(date);
    let name = data.name;
    let email = data.email;
    let tel = data.telno;
    let serviceId = data.serviceId;
    let message = data.message;

    let appointment: AppointmentRequest = {
      creationDate: dateString,
      fullName: name,
      email: email,
      tel: tel,
      serviceId: serviceId,
      message: message,
      userId: session?.user.id,
    };

    setOpenToast(true);
    createAppointment.mutate(appointment);
  }

  const selectRegister = register("serviceId");

  return (
    <>
      <Alert
        alertOpen={openAlert}
        setAlertOpen={setOpenAlert}
        title="Randevu isteğinizden emin misiniz?"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className=" flex flex-col gap-4 list-none">
          <li>
            <span className="text-slate-900 text-lg font-semibold">
              Ad Soyad:{" "}
            </span>
            <span>{watch("name")}</span>
          </li>
          <li>
            <span className="text-slate-900 text-lg font-semibold">
              Email:{" "}
            </span>
            <span>{watch("email")}</span>
          </li>
          <li>
            <span className="text-slate-900 text-lg font-semibold">
              Telefon:{" "}
            </span>
            <span>{watch("telno")}</span>
          </li>
          <li>
            <span className="text-slate-900 text-lg font-semibold">
              Tedavi:{" "}
            </span>
            <span>{watch("serviceId")}</span>
          </li>
        </ul>
      </Alert>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createAppointment.isError}
        isLoading={createAppointment.isLoading}
        isSuccsess={createAppointment.isSuccess}
        duration={2000}
        pendingMessage="Randevu isteğiniz gönderiliyor."
        errorMessage="Randevu isteğiniz gönderilemedi."
        succsessMessage="Randevu isteğiniz gönderildi."
      />
      <LoadingDisababler isLoading={createAppointment.isLoading} />
      {createAppointment.isError && <FormError errors={fieldErrors} />}
      <form className={classes.container}>
        <Input
          name="name"
          register={register}
          type="text"
          label="İsiminiz ve Soyisminiz"
          errorMessage={errors.name?.message?.toString()}
        />
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
          name="telno"
          register={register}
          type="text"
          label="Telefon Numaranız"
          errorMessage={errors.telno?.message?.toString()}
          pattern={{
            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            message: "Hatalı telefon numarası girişi.",
          }}
        />

        <div className={classes.select}>
          <label>Tedavi Alanları</label>
          <select {...selectRegister}>
            {services.map((service) => {
              return (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              );
            })}
          </select>
        </div>
        <TextareaInput
          label="Mesajınız"
          name="message"
          register={register}
          errorMessage={errors.message?.message?.toString()}
        />

        <Button
          onClick={() => {
            setOpenAlert(true);
          }}
          size="md"
        >
          RANDEVU AL
        </Button>
      </form>
    </>
  );
};

export default AppointmentForm;
