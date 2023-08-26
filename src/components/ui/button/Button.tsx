import { FC } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "full" | "half" | "thquarters" | "square";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "reset" | "submit";
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  disabled,
  type = "button",
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
  } else if (size === "half") {
    classNames += ` ${classes.half}`;
  } else if (size === "square") {
    classNames += ` ${classes.square}`;
  }

  if (disabled) {
    classNames += ` ${classes.disabled}`;
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
