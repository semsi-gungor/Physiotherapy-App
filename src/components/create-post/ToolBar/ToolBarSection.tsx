import { FC } from "react";
import classes from "./ToolBarSection.module.css";

interface ToolBarSectionProps {
  children: React.ReactNode;
}

const ToolBarSection: FC<ToolBarSectionProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ToolBarSection;
