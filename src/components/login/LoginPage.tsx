"use client";

import classes from "./LoginPage.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";

// type FormValues = {
//   name: string; // form için gerekli olan bütün fieldları kendimiz tanımlayabiliriz submition da dönen data bu tipte olur ayrıca useForm<FormValues> şeklinde oluşturulmalıdır. Bu'da registerın tipinin FormValues'e dönüşmesini sağlar
// };

export default function LoginPage() {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const nameRegister = {
    ...register("name", {
      required: { value: true, message: "Name is required." },
    }),
  };

  const emailRegister = {
    ...register("email", {
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email is invalid.",
      },
      validate: {
        notAdmin: (fieldValue) => {
          return (
            fieldValue !== "admin@example.com" ||
            "Enter a diffrent email address"
          );
        },
        notBlackListed: (fieldValue) => {
          return (
            !fieldValue.endsWith("baddomain.com") ||
            "This domain is not supported"
          );
        },
      },
    }),
  };

  console.log(errors ? errors : "");

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="name"
          register={nameRegister}
          type="text"
          label="name"
          errorMessage="Error"
        />
        {/* <span>{errors.name?.message?.toString()}</span> */}
        <Input
          name="email"
          register={emailRegister}
          type="email"
          label="email"
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}
