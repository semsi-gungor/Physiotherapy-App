import { FC } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Modal;
