import { FC } from "react";
import classes from "./ServicesMain.module.css";
import Wrapper from "../ui/single-page-wrapper/Wrapper";
import Title from "../main/title/Title";
import { LuHelpingHand } from "react-icons/lu";
import ServiceCardContainer from "../main/services-section/ServiceCardContainer";
import MainWrapper from "../ui/main-wrapper/MainWrapper";

const ServicesMain: FC = ({}) => {
  return (
    <Wrapper inpage>
      <Title title="HİZMETLERİMİZ" icon={LuHelpingHand} />
      <MainWrapper>
        <ServiceCardContainer />
      </MainWrapper>
    </Wrapper>
  );
};

export default ServicesMain;
