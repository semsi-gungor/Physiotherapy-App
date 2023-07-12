import { FC } from "react";
import classes from "./ColorInput.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface ColorInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const ColorInput: FC<ColorInputProps> = ({ name, register }) => {
  const inputRegister = register(name, {
    required: { value: true, message: "Lütfen renk seçiniz." },
  });

  return (
    <input
      id={name}
      type="color"
      {...inputRegister}
      className={classes.input}
    />
  );
};

export default ColorInput;
