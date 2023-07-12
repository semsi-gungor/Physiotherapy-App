import { FC } from "react";
import classes from "./RadioInput.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface RadioInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  value: string;
  label: string;
}

const RadioInput: FC<RadioInputProps> = ({ name, register, value, label }) => {
  const inputRegister = register(name, {
    required: { value: true, message: "" },
  });
  return (
    <div className={classes.container}>
      <input
        value={value}
        className={classes.input}
        id={label}
        type="radio"
        {...inputRegister}
      ></input>
      <label htmlFor={label} className={classes.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
