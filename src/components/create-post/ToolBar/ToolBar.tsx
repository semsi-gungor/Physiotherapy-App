import { FC } from "react";
import classes from "./ToolBar.module.css";

interface ToolBarProps {
  children: React.ReactNode;
}

const ToolBar: FC<ToolBarProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ToolBar;
