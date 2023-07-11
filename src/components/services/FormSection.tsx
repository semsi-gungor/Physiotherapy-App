import { FC } from "react";
import classes from "./FormSection.module.css";
import AppointmentForm from "../appointment/AppointmentForm";
import Title from "../main/title/Title";
import { AiOutlineForm } from "react-icons/ai";
import Wrapper from "../ui/single-page-wrapper/Wrapper";

const FormSection: FC = () => {
  return (
    <Wrapper inpage>
      <Title title="HEMEN RANDEVU AL" icon={AiOutlineForm} />
      <AppointmentForm />
    </Wrapper>
  );
};

export default FormSection;
