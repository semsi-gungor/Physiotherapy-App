"use client";

import { FC } from "react";
import classes from "./Input.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

type Props = {
  type: string;
  name: string;
  label: string;
  initialValue?: string | string[];
  register: UseFormRegister<any>;
  required?: string;
  errorMessage?: string;
  pattern?: { value: RegExp; message: string };
  validate?: (password: string) => boolean | string;
  max?: { value: number; message: string };
  min?: { value: number; message: string };
};

const Input: FC<Props> = ({
  type,
  name,
  label,
  errorMessage,
  pattern,
  max,
  min,
  register,
  validate,
  initialValue,
}) => {
  const inputRegister = register(name, {
    required: { value: true, message: `${label} boş bırakılamaz.` },
    pattern: pattern,
    validate: validate,
    max: max,
    min: min,
    value: initialValue,
  });

  return (
    <div className={classes.inputContainer}>
      <input
        id={name}
        placeholder=" "
        className={classes.input}
        type={type}
        {...inputRegister}
        min={min?.value}
        max={max?.value}
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
};

export default Input;
