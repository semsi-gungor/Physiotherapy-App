"use client";

import { FC } from "react";
import classes from "./ContactPage.module.css";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";
import Title from "@/components/main/title/Title";
import { AiOutlineComment } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";
import ContactMain from "./ContactMain";
import ContactForm from "./ContactForm";
import {
  useMutation,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

interface ContactPageProps {}

const queryClient = new QueryClient();

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div className={classes.container}>
      <Wrapper>
        <Title title="İletişim" icon={AiOutlineComment} />
        <ContactMain />
      </Wrapper>
      <Wrapper inpage>
        <Title title="İletişim Formu" icon={BsPenFill} />
        <QueryClientProvider client={queryClient}>
          <ContactForm />
        </QueryClientProvider>
      </Wrapper>
    </div>
  );
};

export default ContactPage;
