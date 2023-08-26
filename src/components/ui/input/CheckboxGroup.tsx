import { FC } from "react";
import classes from "./CheckboxGroup.module.css";
import { Before } from "v8";

type Object = {
  id: string;
  title: string;
  selected: Before;
};

interface CheckboxGroupProps {}

const CheckboxGroup: FC<CheckboxGroupProps> = ({}) => {
  return <div className={classes.container}></div>;
};

export default CheckboxGroup;
