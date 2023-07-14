import { FC, ReactNode } from "react";
import classes from "./Wrapper.module.css";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
