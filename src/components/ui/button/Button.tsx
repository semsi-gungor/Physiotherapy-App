"use client";

import classes from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "md" | "lg";
  fill?: boolean;
  round?: "sm" | "md" | "lg";
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onHover?: string;
  onClick: () => void;
} & (OutlinedProps | PrimaryProps | TextProps);

type OutlinedProps = {
  variant: "outlined";
  borderColor?: string;
};

type PrimaryProps = {
  variant: "primary";
  backgroundColor?: string;
};

type TextProps = {
  variant: "text";
};

export default function Button(props: Props) {
  let buttonVariant;

  if (props.variant === "outlined") {
    buttonVariant = classes.outlined;
  } else if (props.variant === "primary") {
    buttonVariant = classes.primary;
  } else {
    buttonVariant = classes.text;
  }

  return (
    <button
      className={`${classes.button} ${
        props.disabled ? classes.disabled : ""
      } ${buttonVariant} ${props.round ? classes.round : ""}`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
