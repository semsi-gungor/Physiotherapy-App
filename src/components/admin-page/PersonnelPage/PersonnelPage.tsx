import { FC } from "react";
import classes from "./PersonnelPage.module.css";
import Wrapper from "@/components/ui/admin-page-wrapper/Wrapper";
import PersonnelSlider from "./PersonnelSlider/PersonnelSlider";
import client from "@/lib/prisma";

const PersonnelPage: FC = async ({}) => {
  const services = await client.service.findMany();
  const personnels = await client.personnel.findMany({
    include: { user: true, services: { select: { title: true } } },
  });

  return (
    <Wrapper>
      <div className={classes.container}>
        <PersonnelSlider services={services} personnels={personnels} />
      </div>
    </Wrapper>
  );
};

export default PersonnelPage;

/*{
      id: string;
      title: string;
      appointmentCount: number;
      serviceIDs: string[];
      userId: string;
      user: {
        id: string;
        email: string;
        fullName: string;
        password: string;
        dob: string;
        tel: string;
        role: 'PERSONNEL'
      }[]*/
