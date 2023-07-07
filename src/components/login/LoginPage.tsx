"use client";

import classes from "./LoginPage.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }

  return (
    <div className={classes.formPage}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <header>ÜYE GİRİŞİ</header>
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
          name="password"
          register={register}
          type="password"
          label="Şifre"
          errorMessage={errors.password?.message?.toString()}
          validate={(password) => {
            return password.length > 7 || "Şifre en az 8 haneli olmalıdır.";
          }}
        />
        <button>Giriş Yap</button>
        <button>
          <span>
            <FcGoogle />
          </span>
          Google ile giriş yap
        </button>
        <Link href={"/"}>Şifremi Unuttum</Link>
      </form>
      <div className={classes.redirect}>
        <h1>HESAP AÇMAK MI İSTİYORSUNUZ?</h1>
        <Link href={"/uye-kaydi"}>
          <button>KAYDOLUN</button>
        </Link>
      </div>
    </div>
  );
}

// const emailRegister = {
//   ...register("email", {
//     pattern: {
//       value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       message: "Email is invalid.",
//     },
//     validate: {
//       notAdmin: (fieldValue) => {
//         return (
//           fieldValue !== "admin@example.com" ||
//           "Enter a diffrent email address"
//         );
//       },
//       notBlackListed: (fieldValue) => {
//         return (
//           !fieldValue.endsWith("baddomain.com") ||
//           "This domain is not supported"
//         );
//       },
//     },
//   }),
// };

// const passwordRegister = {
//   ...register("name", {
//     required: { value: true, message: "Şifre girilmesi zorunlu." },
//   }),
// };
