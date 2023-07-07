"use client";

import classes from "./Input.module.css";
import { UseFormRegisterReturn } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

type Props = {
  type: string;
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: string;
  errorMessage?: string;
};

export default function Input({
  type,
  name,
  label,
  register,
  errorMessage,
}: Props) {
  return (
    <div className={classes.inputContainer}>
      <input
        id={name}
        placeholder=" "
        className={classes.input}
        type={type}
        {...register}
      />
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      {errorMessage && (
        <div className={classes.errorMessage}>
          <BiErrorCircle />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
