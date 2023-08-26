"use client";

import classes from "./SignUpPage.module.css";
import Input from "../ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { UserSchema } from "@/models/User";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Toast from "../../components/ui/toast/Toast";
import FormError from "../ui/form-error/FormError";
import { useRouter } from "next/navigation";
import LoadingDisababler from "../ui/spinner-and-disabler/LoadingDisababler";
import Button from "../ui/button/Button";
import Alert from "../ui/alert/Alert";
import { FC } from "react";

type User = z.infer<typeof UserSchema>;

type Error = {
  errorMessage:
    | {
        name?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
      }
    | string;
};

const SignUpPage: FC = ({}) => {
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const router = useRouter();

  const createUser = useMutation({
    mutationFn: async (user: User) => {
      const response = await axios.post("/api/user", JSON.stringify(user));

      return response.data;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: User) => {
      reset();
      setTimeout(() => {
        router.push("/uye-girisi");
      }, 1000);
    },
    onError: (error: AxiosError<Error>) => {
      const errors = error.response?.data;
      setFieldErrors([]);
      Object.entries(errors!.errorMessage).map((error) => {
        setFieldErrors((prev) => {
          return prev.concat(error[1]);
        });
      });
    },
  });

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, watch, reset, setValue } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    const fullName = data.signUpName + " " + data.surname;
    const day = data.day.length < 2 ? "0" + data.day : data.day;
    const month = data.month.length < 2 ? "0" + data.month : data.month;
    const dob = data.year + "-" + month + "-" + day;

    let newUser: User = {
      fullName,
      dob,
      password: data.password,
      email: data.email,
      role: "USER",
      tel: data.tel,
    };

    setOpenToast(true);
    createUser.mutate(newUser);
  }

  const passwordFirst = watch("password");

  const checkBoxRegister = register("kvkk", {
    required: { value: true, message: "Hizmet koşullarını kabul etmelisiniz." },
  });

  return (
    <>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createUser.isError}
        isLoading={createUser.isLoading}
        isSuccsess={createUser.isSuccess}
        duration={2000}
        pendingMessage="Kaydınız alınıyor."
        errorMessage="Kullanıcı kaydı yapılamadı."
        succsessMessage="Kaydınız başarılı."
      />
      <Alert
        alertOpen={openTerms}
        setAlertOpen={setOpenTerms}
        title="KVKK Bildirgesi"
        onSubmit={() => {
          setValue("kvkk", true);
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            repellat, molestiae culpa voluptate dolore similique alias, tempora
            sequi numquam distinctio blanditiis itaque officiis. Omnis, placeat
            expedita asperiores vero ipsam molestias! Ratione enim minus, sed
            veritatis ex, expedita quasi eos, id inventore cumque perspiciatis
            iusto rerum libero dicta suscipit quaerat cupiditate! Atque debitis
            quidem dolorum earum vero vitae omnis odit non. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero harum repudiandae
            tempore. Eaque est ducimus quo velit cum nemo quibusdam! Repellat
            iste quis blanditiis harum aspernatur pariatur beatae magni
            assumenda. Velit odit ipsa dolor, commodi asperiores aliquam quaerat
            quibusdam repellat ullam corporis labore nisi ab ipsam dolorum
            expedita tempore esse voluptas rem, voluptatum explicabo dicta. Esse
            itaque tenetur praesentium voluptatem?
          </p>
        </div>
      </Alert>
      {fieldErrors.length > 0 && <FormError errors={fieldErrors} />}
      <div className={classes.formPage}>
        <LoadingDisababler isLoading={createUser.isLoading} />
        <header>ÜYE OL</header>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.fields}>
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
                name="tel"
                register={register}
                type="text"
                label="Telefon Numaranız"
                errorMessage={errors.tel?.message?.toString()}
                pattern={{
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Hatalı telefon numarası girişi.",
                }}
              />
              <Input
                name="password"
                register={register}
                type="password"
                label="Şifre"
                errorMessage={errors.password?.message?.toString()}
                validate={(password) => {
                  return (
                    password.length > 7 || "Şifre en az 8 haneli olmalıdır."
                  );
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
                <label>
                  KVKK uyarınca ilgili{" "}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() => {
                      setOpenTerms(true);
                    }}
                  >
                    Bilgilendirme
                  </span>
                  &apos;yi okudum.Kişisel verilerimin belirtilen kapsamda
                  işlenmesini kabul ediyorum.
                </label>
                <span style={{ marginLeft: "0.5rem", color: "var(--error)" }}>
                  {errors.kvkk?.message?.toString()}
                </span>
              </div>
            </div>
          </div>
          <Button size="md" type="submit">
            Kayıt Ol
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
