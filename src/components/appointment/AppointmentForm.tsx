"use client";

import { FC } from "react";
import classes from "./AppointmentForm.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "../ui/button/Button";

const AppointmentForm: FC = ({}) => {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  const textRegister = register("message");

  const selectRegister = register("field");

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
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
          value: /^[0-9]*$/,
          message: "Hatalı telefon numarası girişi.",
        }}
      />

      <div className={classes.select}>
        <label>Tedevai Alanları</label>
        <select {...selectRegister}>
          <option>item1</option>
          <option>item1</option>
          <option>item1</option>
          <option>item1</option>
          <option>item1</option>
        </select>
      </div>

      <div className={classes.message}>
        <label htmlFor="message">Mesajınız</label>
        <textarea id="message" {...textRegister} />
      </div>

      <Button size="md">RANDEVU AL</Button>
    </form>
  );
};

export default AppointmentForm;
