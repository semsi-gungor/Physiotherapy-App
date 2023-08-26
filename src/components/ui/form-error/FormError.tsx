import { FC } from "react";
import classes from "./FormError.module.css";

interface FormErrorProps {
  errors: string[];
}

const FormError: FC<FormErrorProps> = ({ errors }) => {
  return (
    <ul className={classes.errorsList}>
      {errors.map((error, index) => {
        return (
          <li className={classes.errorItem} key={index}>
            *{error}
          </li>
        );
      })}
    </ul>
  );
};

export default FormError;
