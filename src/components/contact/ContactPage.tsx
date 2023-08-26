"use client";

import { FC } from "react";
import classes from "./ContactPage.module.css";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";
import Title from "@/components/main/title/Title";
import { AiOutlineComment } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";
import ContactMain from "./ContactMain";
import ContactForm from "./ContactForm";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ContactPageProps {}

const queryClient = new QueryClient();

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div className={classes.container}>
      <ContactMain />
      <div className="w-full h-[120vh] flex my-12">
        <div className="h-full hidden md:w-1/2 bg-zinc-900 md:flex lg:flex flex-col items-center justify-between py-32">
          <div className="flex w-full justify-end lg:px-16">
            <h2 className="lg:max-w-lg  text-2xl md:w-96 md:text-3xl lg:text-5xl text-zinc-200 font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
          <div className="relative w-full h-80 overflow-hidden flex items-center justify-center">
            <div className="h-full border-2 border-gray-400 square rounded-full absolute -left-12"></div>
            <div className="h-full border-2 border-dashed border-gray-400 square rounded-full absolute"></div>
            <div className="h-full border-2 border-gray-400 square rounded-full absolute -right-12"></div>
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-between py-32">
          <div className="w-[90%] justify-center flex items-center gap-8 md:justify-start lg:justify-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900">
              İletişim Formu
            </h2>
            <span className="text-3xl md:text-4xl">
              <BsPenFill />
            </span>
          </div>
          <QueryClientProvider client={queryClient}>
            <ContactForm />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
