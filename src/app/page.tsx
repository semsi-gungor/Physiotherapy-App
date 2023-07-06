"use client";

import classes from "./page.module.css";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";
import ServiceCardContainer from "@/components/main/services-section/ServiceCardContainer";
import MainBlog from "@/components/main/blog-section/MainBlog";
import Title from "@/components/main/title/Title";
import CommentsContainer from "@/components/main/comments/CommentsContainer";
import { LuHelpingHand, LuPencil } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <Title title="hizmetler" icon={LuHelpingHand} />
      <MainWrapper>
        <ServiceCardContainer />
      </MainWrapper>
      <Title title="blog" icon={LuPencil} />
      <MainBlog />
      <Title title="yorumlar" icon={FaRegComment} />
      <MainWrapper>
        <CommentsContainer />
      </MainWrapper>
    </main>
  );
}
