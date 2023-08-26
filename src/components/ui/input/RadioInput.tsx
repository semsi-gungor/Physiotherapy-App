import { FC } from "react";
import classes from "./RadioInput.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface RadioInputProps {
  name: string;
  register: UseFormRegister<any>;
  value: string;
  label?: string;
  icon?: IconType;
  id: string;
}

const RadioInput: FC<RadioInputProps> = ({
  name,
  register,
  value,
  label,
  icon: Icon,
  id,
}) => {
  const inputRegister = register(name, {
    required: { value: true, message: "" },
  });
  return (
    <div className={classes.container}>
      <input
        value={value}
        className={classes.input}
        id={id}
        type="radio"
        {...inputRegister}
      ></input>
      <label htmlFor={id} className={classes.label}>
        {label && label}
        {Icon && <Icon />}
      </label>
    </div>
  );
};

export default RadioInput;
