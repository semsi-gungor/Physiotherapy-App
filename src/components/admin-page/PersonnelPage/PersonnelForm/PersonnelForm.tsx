"use client";

import { FC, useState } from "react";
import classes from "./PersonnelForm.module.css";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { PersonnelSchema } from "@/models/Personnel";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import FormError from "@/components/ui/form-error/FormError";
import LoadingDisababler from "@/components/ui/spinner-and-disabler/LoadingDisababler";
import Button from "@/components/ui/button/Button";

type Personnel = z.infer<typeof PersonnelSchema>;

type Error = {
  errorMessage:
    | {
        fullName?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
        dob?: string[] | undefined;
        title?: string[] | undefined;
        serviceId?: string[] | undefined;
        tel?: string[] | undefined;
      }
    | string;
};

type Option = {
  id: string;
  title: string;
  selected: boolean;
};

type PersonnelFormProps = {
  services: {
    id: string;
    serviceId: string;
    title: string;
    body: string;
    definition: string;
    treatments: string[];
    headerImage: string;
    bodyImage: string;
    personnelIDs: string[];
  }[];
};

const PersonnelForm: FC<PersonnelFormProps> = ({ services }) => {
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  let initialState = services.map((service) => {
    return { id: service.id, title: service.title, selected: false };
  });

  const [options, setOptions] = useState<Option[]>(initialState);

  //mutation function

  const createUser = useMutation({
    mutationFn: async (personnel: Personnel) => {
      const response = await axios.post(
        "/api/personnel",
        JSON.stringify(personnel)
      );

      return response.data;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: Personnel) => {
      reset();
      setOptions((prev) => {
        return prev.map((item) => {
          return { id: item.id, title: item.title, selected: false };
        });
      });
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

  // react hook form
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, watch, reset } = form;
  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    const fullName = data.signUpName + " " + data.surname;
    const day = data.day.length < 2 ? "0" + data.day : data.day;
    const month = data.month.length < 2 ? "0" + data.month : data.month;
    const dob = data.year + "-" + month + "-" + day;

    let filteredObjects = options.filter((option) => {
      return option.selected;
    });

    let ids = filteredObjects.map((object) => {
      return object.id;
    });

    let newPersonnel: Personnel = {
      fullName,
      dob,
      password: data.password,
      email: data.email,
      serviceId: ids,
      title: data.title,
      role: "PERSONNEL",
      tel: data.tel,
    };

    setOpenToast(true);
    createUser.mutate(newPersonnel);
  }

  const passwordFirst = watch("password");

  function select(id: string) {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, selected: !option.selected };
      }
      return option;
    });

    setOptions(newOptions);
  }

  return (
    <div className={classes.container}>
      <LoadingDisababler isLoading={createUser.isLoading} />
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
      <h1 className={classes.header}>Personel Kayıt</h1>
      {fieldErrors.length > 0 && <FormError errors={fieldErrors} />}

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.fields}>
          <div className={classes.leftFields}>
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
          </div>
          <div className={classes.rightFields}>
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
              name="title"
              register={register}
              type="text"
              label="Ünvan"
              errorMessage={errors.title?.message?.toString()}
            />
            <div className={classes.select}>
              <label>Tedavi Alanları</label>
              <div className={classes.options}>
                {options.map((option) => {
                  return (
                    <div
                      className={`${classes.option} ${
                        option.selected ? classes.selected : classes.notSelected
                      }`}
                      key={option.title}
                      onClick={select.bind(null, option.id)}
                    >
                      {option.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Button size="md" type="submit" variant="primary">
          Kaydet
        </Button>
      </form>
    </div>
  );
};

export default PersonnelForm;
