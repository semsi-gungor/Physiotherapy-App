"use client";

import classes from "./page.module.css";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";
import ServiceCardContainer from "@/components/main/services-section/ServiceCardContainer";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <MainWrapper>
        <ServiceCardContainer />
      </MainWrapper>
      <MainWrapper />
    </main>
  );
}
