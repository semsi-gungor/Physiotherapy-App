import { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "full" | "half" | "thquarters";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, variant, size }) => {
  let classNames = `${classes.button}`;

  if (variant === "outlined") {
    classNames += ` ${classes.outlined}`;
  } else if (variant === "ghost") {
    classNames += ` ${classes.ghost}`;
  } else {
    classNames += ` ${classes.primary}`;
  }

  if (size === "md") {
    classNames += ` ${classes.md}`;
  } else if (size === "lg") {
    classNames += ` ${classes.lg}`;
  } else if (size === "thquarters") {
    classNames += ` ${classes.thqurters}`;
  } else if (size === "full") {
    classNames += ` ${classes.full}`;
  } else {
    classNames += ` ${classes.half}`;
  }

  return <button className={classNames}>{children}</button>;

  //   return (
  //     <button className={`${classes.button} ${classes.primary} ${classes.md}`}>
  //       {children}
  //     </button>
  //   );
};

export default Button;
