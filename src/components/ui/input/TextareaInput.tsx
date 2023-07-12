"use client";

import { FC } from "react";
import classes from "./TextareaInput.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

interface TextareaInputProps {
  name: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
}

const TextareaInput: FC<TextareaInputProps> = ({
  name,
  label,
  errorMessage,
  register,
}) => {
  const inputRegister = register(name, {
    required: {
      value: true,
      message: `${label} eklenmeden önce içeriği doldurulmalı.`,
    },
  });

  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <textarea id={name} className={classes.input} {...inputRegister} />
      {errorMessage && (
        <div className={classes.errorMessage}>
          <BiErrorCircle />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextareaInput;
