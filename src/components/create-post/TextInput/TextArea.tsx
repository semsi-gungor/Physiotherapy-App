"use client";

import { FC } from "react";
import classes from "./TextArea.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

interface TextareaInputProps {
  name: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
  initialValue?: string;
}

const TextArea: FC<TextareaInputProps> = ({
  name,
  label,
  errorMessage,
  initialValue,
  register,
}) => {
  const inputRegister = register(name, {
    required: {
      value: true,
      message: `${label} eklenmeden önce içeriği doldurulmalı.`,
    },
    value: initialValue,
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

export default TextArea;
