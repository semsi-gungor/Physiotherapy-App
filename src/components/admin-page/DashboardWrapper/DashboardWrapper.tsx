import { FC } from "react";
import classes from "./DashboardWrapper.module.css";
import { ToastContainer } from "react-toastify";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </div>
  );
};

export default DashboardWrapper;
