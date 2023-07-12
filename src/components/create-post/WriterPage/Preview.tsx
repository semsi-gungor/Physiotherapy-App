import { FC } from "react";
import classes from "./Preview.module.css";

interface PreviewProps {}

const Preview: FC<PreviewProps> = ({}) => {
  return <div className={classes.container}></div>;
};

export default Preview;
