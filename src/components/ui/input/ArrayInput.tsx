"use client";

import { Dispatch, FC, SetStateAction } from "react";
import classes from "./ArrayInput.module.css";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

interface ArrayInputProps {
  name: string;
  label: string;
  setValue: Dispatch<SetStateAction<string[]>>;
}

const ArrayInput: FC<ArrayInputProps> = ({ name, label, setValue }) => {
  function onChangeHandler(e: any) {
    let array: string[] = [];
    let text = e.target.value;
    array = text.split("*");
    setValue(array);
  }

  return (
    <div className={classes.container}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <textarea
        id={name}
        className={classes.input}
        onChange={onChangeHandler}
        placeholder="Liste elemanlarını örnekteki gibi giriniz. Örnek: Eleman-1*Eleman-2"
      />
    </div>
  );
};

export default ArrayInput;
