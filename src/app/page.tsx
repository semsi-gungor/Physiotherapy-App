"use client";

import classes from "./page.module.css";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";
import ServiceCardContainer from "@/components/main/services-section/ServiceCardContainer";
import MainBlog from "@/components/main/blog-sextion/MainBlog";
import Title from "@/components/main/title/Title";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <Title title="hizmetler" />
      <MainWrapper>
        <ServiceCardContainer />
      </MainWrapper>
      <Title title="blog" />
      <MainBlog />
    </main>
  );
}
