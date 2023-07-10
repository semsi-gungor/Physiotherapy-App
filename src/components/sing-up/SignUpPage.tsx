"use client";

import classes from "./SignUpPage.module.css";
import Link from "next/link";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";

export default function SignUpPage() {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, watch } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  const passwordFirst = watch("password");

  const checkBoxRegister = register("kvkk", {
    required: { value: true, message: "Hizmet koşullarını kabul etmelisiniz." },
  });

  return (
    <div className={classes.formPage}>
      <header>ÜYE OL</header>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.leftForm}>
          <Input
            name="signUpName"
            register={register}
            type="text"
            label="İsim"
            errorMessage={errors.signUpName?.message?.toString()}
          />
          <Input
            name="surname"
            register={register}
            type="text"
            label="Soyad"
            errorMessage={errors.surname?.message?.toString()}
          />

          <div className={classes.dateOfBirth}>
            <Input
              name="day"
              register={register}
              type="number"
              label="Gün"
              min={{ value: 1, message: "Gün en az 1 olabilir." }}
              max={{ value: 31, message: "Gün en fazla 31 olabilir." }}
              errorMessage={errors.day?.message?.toString()}
            />
            <Input
              name="month"
              register={register}
              type="number"
              label="Ay"
              min={{ value: 1, message: "Ay en az 1 olabilir." }}
              max={{ value: 12, message: "Ay en fazla 12 olabilir." }}
              errorMessage={errors.month?.message?.toString()}
            />
            <Input
              name="year"
              register={register}
              type="number"
              label="Yıl"
              min={{ value: 1923, message: "Yanlış yıl girişi." }}
              max={{ value: 2023, message: "Yıl en fazla 2023 olabilir." }}
              errorMessage={errors.year?.message?.toString()}
            />
          </div>

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
        </div>
        <div className={classes.rightForm}>
          <Input
            name="password"
            register={register}
            type="password"
            label="Şifre"
            errorMessage={errors.password?.message?.toString()}
            validate={(password) => {
              return password.length > 7 || "Şifre en az 8 haneli olmalıdır.";
            }}
          />
          <Input
            name="passwordReply"
            register={register}
            type="password"
            label="Şifre Tekrar"
            errorMessage={errors.passwordReply?.message?.toString()}
            validate={(password) => {
              return password === passwordFirst || "Şifreler uyuşmuyor.";
            }}
          />
          <div className={classes.notify}>
            <input type="checkbox" id="kvkk" {...checkBoxRegister} />
            <label htmlFor="kvkk">
              KVKK uyarınca ilgili <Link href={"/"}>Bilgilendirme</Link>&apos;yi
              okudum.Kişisel verilerimin belirtilen kapsamda işlenmesini kabul
              ediyorum.
            </label>
            <span style={{ marginLeft: "0.5rem", color: "var(--error)" }}>
              {errors.kvkk?.message?.toString()}
            </span>
          </div>
          <button type="submit" className={classes.submitButton}>
            ÜYE OL
          </button>
        </div>
      </form>
    </div>
  );
}
