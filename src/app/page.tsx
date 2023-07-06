"use client";

import classes from "./page.module.css";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";
import ServiceCardContainer from "@/components/main/services-section/ServiceCardContainer";
import MainBlog from "@/components/main/blog-sextion/MainBlog";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <MainWrapper title="Hizmetlerimiz">
        <ServiceCardContainer />
      </MainWrapper>
      <MainWrapper title="Blog">
        <MainBlog />
      </MainWrapper>
    </main>
  );
}
