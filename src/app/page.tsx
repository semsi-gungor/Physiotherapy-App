"use client";

import classes from "./page.module.css";
import Header from "@/components/main/header/Header";
import MainWrapper from "@/components/ui/main-wrapper/MainWrapper";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
      <MainWrapper />
      <MainWrapper />
    </main>
  );
}
