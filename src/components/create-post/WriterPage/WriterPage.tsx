"use client";

import { FC, useState, useContext } from "react";
import { blogContext } from "@/context/blogContext";
import BlogContextProvider from "@/context/blogContext";
import classes from "./WriterPage.module.css";
import InputMenu from "./InputMenu";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import HeaderInput from "../HeaderInput/HeaderInput";
import QuoteInput from "../QuoteInput/QuoteInput";
import ListInput from "../ListInput/OrderedListInput";
import ImageInput from "../ImageInput/ImageInput";
import Button from "@/components/ui/button/Button";
import Preview from "./Preview";
import { BlogPart } from "@/types/blog-posts";

type InputType = "text" | "list" | "quote" | "header" | "image";

const WriterPage: FC = ({}) => {
  const blogCtx = useContext(blogContext);

  const [type, setType] = useState<InputType>("header");

  function changeType(payload: InputType) {
    setType(payload);
  }

  return (
    <BlogContextProvider>
      <div className={classes.container}>
        <Preview setType={changeType} />
        <div className={classes.button}>
          <Button size="md">Gönder</Button>
        </div>

        <InputMenu onChange={changeType} />
        <Modal>
          {type === "header" && <HeaderInput />}
          {type === "text" && <TextInput />}
          {type === "list" && <ListInput />}
          {type === "quote" && <QuoteInput />}
          {type === "image" && <ImageInput />}
        </Modal>
      </div>
    </BlogContextProvider>
  );
};

export default WriterPage;
