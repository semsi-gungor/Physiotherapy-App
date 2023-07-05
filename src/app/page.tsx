"use client";

import classes from "./page.module.css";
import Button from "@/components/ui/button/Button";
import Header from "@/components/main/header/Header";

export default function Home() {
  return (
    <main className={classes.main}>
      <Header />
    </main>
  );
}
