"use client";

import { FC } from "react";
import classes from "./ContactForm.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../ui/button/Button";
import TextareaInput from "../ui/input/TextareaInput";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { MessageSchema } from "../../models/Message";
import { z } from "zod";

type Message = z.infer<typeof MessageSchema>;

const ContactForm: FC = ({}) => {
  const createMessage = useMutation({
    mutationFn: async (message: Message) => {
      const { data } = await axios.post(
        "/api/message",
        JSON.stringify(message)
      );
      return data;
    },
  });

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  async function onSubmit(data: FieldValues) {
    let date = new Date();
    let message = {
      fullName: data.isim,
      email: data.email,
      topic: data.topic,
      date: date,
      message: data.mesaj,
    };

    createMessage.mutate(message);

    reset();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      {createMessage.isError && <p>{createMessage.error!.toString()}</p>}
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
      <Button size="md" disabled={createMessage.isLoading}>
        Gönder
      </Button>
    </form>
  );
};

export default ContactForm;
