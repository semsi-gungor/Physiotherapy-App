import { FC } from "react";
import classes from "./ServicesPage.module.css";
import Wrapper from "@/components/ui/admin-page-wrapper/Wrapper";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import ServicesSlider from "./ServicesSlider/ServicesSlider";

interface ServicesPageProps {}

const ServicesPage: FC<ServicesPageProps> = ({}) => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <ServicesSlider />
      </div>
    </Wrapper>
  );
};

export default ServicesPage;
