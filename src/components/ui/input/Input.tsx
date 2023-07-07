"use client";

import classes from "./Input.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

type Props = {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: string;
  errorMessage?: string;
};

export default function Input({
  type,
  name,
  label,
  errorMessage,
  register,
}: Props) {
  const inputRegister = register(name, {
    required: { value: true, message: `${label} boş bırakılamaz.` },
  });

  return (
    <div className={classes.inputContainer}>
      <input
        id={name}
        placeholder=" "
        className={classes.input}
        type={type}
        {...inputRegister}
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
