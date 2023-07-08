"use client";

import { FC } from "react";
import classes from "./ContactForm.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../ui/button/Button";

const ContactForm: FC = ({}) => {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  const textRegister = register("text");

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        register={register}
        type="text"
        label="Adınız ve Soyadınız"
        errorMessage={errors.name?.message?.toString()}
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
      <label htmlFor="text">Mesaj</label>
      <textarea id="text" className={classes.text} {...textRegister} />
      <Button size="md">GÖNDER</Button>
    </form>
  );
};

export default ContactForm;
