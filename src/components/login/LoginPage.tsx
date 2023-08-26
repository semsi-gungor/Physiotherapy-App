"use client";

import classes from "./LoginPage.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/models/User";
import { z, ZodError } from "zod";
import { FC, useState } from "react";
import FormError from "../ui/form-error/FormError";
import LoadingDisababler from "../ui/spinner-and-disabler/LoadingDisababler";

type LoginCredentials = z.infer<typeof LoginSchema>;

const LoginPage: FC = ({}) => {
  const router = useRouter();

  const callbackUrl = "/";

  const [fieldErrors, setFieldErrors] = useState<string[]>([]);

  const loginUser = useMutation({
    mutationFn: async (user: LoginCredentials) => {
      const parsedCredentials = LoginSchema.safeParse(user);

      if (parsedCredentials.success) {
        const res = await signIn("credentials", {
          redirect: false,
          email: user.email,
          password: user.password,
          callbackUrl,
        });

        if (res?.error) {
          setFieldErrors((prev) => {
            return [...prev, res.error!];
          });
        } else {
          return res;
        }
      } else {
        throw new ZodError(parsedCredentials.error.issues);
      }
    },
    onSuccess: (data: SignInResponse | undefined) => {
      const url = data?.url;
      if (url) {
        router.push(url);
      }
    },
    onError: (error: ZodError) => {
      error.issues.map((issue) => {
        setFieldErrors((prev) => {
          if (prev.find((message) => message === issue.message)) {
            return prev;
          } else {
            return [...prev, issue.message];
          }
        });
      });
    },
  });

  const form = useForm<FieldValues>({ mode: "all" });
  const { register, handleSubmit, formState, reset } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    setFieldErrors([]);
    let credentials: LoginCredentials = {
      email: data.email,
      password: data.password,
    };

    loginUser.mutate(credentials);
  }

  return (
    <>
      {fieldErrors.length > 0 && <FormError errors={fieldErrors} />}
      <LoadingDisababler isLoading={loginUser.isLoading} />
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

          <Link href={"/"}>Şifremi Unuttum</Link>
        </form>
        <div className={classes.redirect}>
          <h1>HESAP AÇMAK MI İSTİYORSUNUZ?</h1>
          <Link href={"/uye-kaydi"}>
            <button>KAYDOLUN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

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
