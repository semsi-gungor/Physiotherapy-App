"use client";

import { FC } from "react";
import classes from "./TextInput.module.css";
import TextareaInput from "@/components/ui/input/TextareaInput";
import { useForm, FieldValues } from "react-hook-form";

interface TextInputProps {}

const TextInput: FC<TextInputProps> = ({}) => {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
  }
  return (
    <div className={classes.container}>
      <TextareaInput
        register={register}
        label="Eklenecek metni giriniz"
        name="text"
        errorMessage={errors.text?.message?.toString()}
      />
    </div>
  );
};

export default TextInput;
