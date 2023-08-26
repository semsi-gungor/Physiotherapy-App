"use client";

import { FC, useState } from "react";
import classes from "./ServicesForm.module.css";
import Input from "@/components/ui/input/Input";
import TextareaInput from "@/components/ui/input/TextareaInput";
import ImageInput from "@/components/ui/input/ImageInput";
import ArrayInput from "@/components/ui/input/ArrayInput";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { ServiceSchema } from "@/models/Service";
import Button from "@/components/ui/button/Button";

import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import FormError from "@/components/ui/form-error/FormError";
import LoadingDisababler from "@/components/ui/spinner-and-disabler/LoadingDisababler";

type Service = z.infer<typeof ServiceSchema>;

type Error = {
  errorMessage:
    | {
        title?: string[] | undefined;
        serviceId?: string[] | undefined;
        body?: string[] | undefined;
        definition?: string[] | undefined;
        bodyImage?: string[] | undefined;
        headerImage?: string[] | undefined;
        treatments?: string[] | undefined;
      }
    | string;
};

const ServicesForm: FC = () => {
  const [treatements, setTreatments] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);
  const [openToast, setOpenToast] = useState(false);

  const queryClient = useQueryClient();

  // create service
  const createService = useMutation({
    mutationFn: async (service: Service) => {
      const response = await axios.post(
        "/api/services",
        JSON.stringify(service)
      );

      return response.data;
    },
    onSuccess: (data: AxiosResponse<any, any>, variables: Service) => {
      setFieldErrors([]);
      reset();
      queryClient.invalidateQueries(["services"]);
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

  //form actions

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, watch, reset } = form;
  const { errors } = formState;

  let imgUrl = watch("bodyImage");
  let imgUrl2 = watch("headerImage");

  function onSubmit(data: FieldValues) {
    let service: Service = {
      body: data.body,
      definition: data.definition,
      bodyImage: data.bodyImage,
      headerImage: data.headerImage,
      serviceId: data.serviceId,
      title: data.title,
      treatments: treatements,
    };

    let parsedService = ServiceSchema.safeParse(service);

    if (parsedService.success) {
      setOpenToast(true);
      createService.mutate(service);
    } else {
      setFieldErrors([]);
      let errors = Object.entries(parsedService.error.errors).map((error) => {
        return error[1].message;
      });

      setFieldErrors(errors);
    }
  }

  return (
    <div className={classes.container}>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createService.isError}
        isLoading={createService.isLoading}
        isSuccsess={createService.isSuccess}
        duration={2000}
        pendingMessage="Kaydınız alınıyor."
        errorMessage="Kullanıcı kaydı yapılamadı."
        succsessMessage="Kaydınız başarılı."
      />

      {fieldErrors.length > 0 && <FormError errors={fieldErrors} />}
      <LoadingDisababler isLoading={createService.isLoading} />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.fieldsContainer}>
          <div className={classes.left}>
            <Input
              name="title"
              register={register}
              type="text"
              label="Başlık"
              errorMessage={errors.title?.message?.toString()}
            />
            <Input
              name="serviceId"
              register={register}
              type="text"
              label="Hizmet ID"
              errorMessage={errors.serviceId?.message?.toString()}
            />
            <TextareaInput
              label="Açıklama"
              name="body"
              register={register}
              errorMessage={errors.body?.message?.toString()}
            />
            <TextareaInput
              label="Tanım"
              name="definition"
              register={register}
              errorMessage={errors.definition?.message?.toString()}
            />
          </div>
          <div className={classes.right}>
            <ImageInput
              label="Hizmet Görseli"
              name="bodyImage"
              register={register}
              value={imgUrl}
              errorMessage={errors.bodyImage?.message?.toString()}
            />
            <ImageInput
              label="Hizmet Başlık Görseli"
              name="headerImage"
              variant="16:9"
              register={register}
              value={imgUrl2}
              errorMessage={errors.headerImage?.message?.toString()}
            />
            <ArrayInput
              label="Tedaviler"
              name="treatments"
              setValue={setTreatments}
            />
          </div>
        </div>
        <Button size="md" type="submit">
          Gönder
        </Button>
      </form>
    </div>
  );
};

export default ServicesForm;
