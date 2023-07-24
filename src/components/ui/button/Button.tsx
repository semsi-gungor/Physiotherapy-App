import { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "full" | "half" | "thquarters";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  disabled,
}) => {
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

  if (disabled) {
    classNames += ` ${classes.disabled}`;
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
