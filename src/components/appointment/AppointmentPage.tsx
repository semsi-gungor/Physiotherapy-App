import { FC } from "react";
import classes from "./AppointmentPage.module.css";
import Wrapper from "../ui/single-page-wrapper/Wrapper";
import AppointmentForm from "./AppointmentForm";
import bg from "../../../public/grad-2.png";

const AppointmentPage: FC = ({}) => {
  return (
    <Wrapper background={bg}>
      <div className={classes.container}>
        <h4 className={classes.header}>Randevu Al</h4>
        <AppointmentForm />
      </div>
    </Wrapper>
  );
};

export default AppointmentPage;
