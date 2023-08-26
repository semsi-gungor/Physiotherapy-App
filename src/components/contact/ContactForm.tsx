"use client";

import { FC, useState } from "react";
import classes from "./ContactForm.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../ui/button/Button";
import TextareaInput from "../ui/input/TextareaInput";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { MessageSchema } from "../../models/Message";
import { z } from "zod";
import Toast from "../../components/ui/toast/Toast";
import LoadingDisababler from "../ui/spinner-and-disabler/LoadingDisababler";
import { dateToString } from "@/helpers/date-helpers";

type Message = z.infer<typeof MessageSchema>;

type Error = {
  errorMessage: {
    message?: string[] | undefined;
    fullName?: string[] | undefined;
    email?: string[] | undefined;
    topic?: string[] | undefined;
    date?: string[] | undefined;
  };
};

const ContactForm: FC = ({}) => {
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  const createMessage = useMutation({
    mutationFn: async (message: Message) => {
      const response = await axios.post("/api/message", message);

      return response;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: Message) => {
      reset();
    },
    onError: (error: AxiosError<Error>) => {
      const errors = error.response?.data;
      Object.entries(errors!.errorMessage).map((error) => {
        setFieldErrors((prev) => {
          return prev.concat(error[1]);
        });
      });
    },
  });

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  async function onSubmit(data: FieldValues) {
    let date = new Date();
    let dateString = dateToString(date);
    let message = {
      fullName: data.isim,
      email: data.email,
      topic: data.topic,
      creationDate: dateString,
      message: data.mesaj,
    };
    setOpenToast(true);
    createMessage.mutate(message);
  }

  return (
    <>
      <LoadingDisababler isLoading={createMessage.isLoading} />
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createMessage.isError}
        isLoading={createMessage.isLoading}
        isSuccsess={createMessage.isSuccess}
        duration={2000}
        pendingMessage="Mesaj gönderiliyor."
        errorMessage="Mesaj gönderilemedi."
        succsessMessage="Mesajınız gönderildi."
      />
      {createMessage.isError && (
        <div>
          {fieldErrors.map((error) => {
            return (
              <p key={error} style={{ color: "var(--error)" }}>
                {error}
              </p>
            );
          })}
        </div>
      )}
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="isim"
          register={register}
          type="text"
          label="Adınız"
          errorMessage={errors.isim?.message?.toString()}
        />
        <Input
          name="email"
          register={register}
          type="email"
          label="Email Adresiniz"
          errorMessage={errors.email?.message?.toString()}
          pattern={{
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Hatalı e-mail girişi.",
          }}
        />
        <Input
          name="topic"
          register={register}
          type="text"
          label="Konu"
          errorMessage={errors.topic?.message?.toString()}
        />
        <TextareaInput
          label="Mesaj"
          name="mesaj"
          register={register}
          errorMessage={errors.mesaj?.message?.toString()}
        />
        <Button size="md" disabled={createMessage.isLoading} type="submit">
          Gönder
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
