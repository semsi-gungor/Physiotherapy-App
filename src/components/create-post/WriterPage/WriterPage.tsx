"use client";

import { FC, useState } from "react";
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

type InputType = "text" | "list" | "quote" | "header" | "image";

const WriterPage: FC = ({}) => {
  const [type, setType] = useState<InputType>("header");

  function changeType(payload: InputType) {
    setType(payload);
  }

  return (
    <div className={classes.container}>
      <Preview />
      <Button size="md">Gönder</Button>
      <InputMenu onChange={changeType} />
      <Modal>
        {type === "header" && <HeaderInput />}
        {type === "text" && <TextInput />}
        {type === "list" && <ListInput />}
        {type === "quote" && <QuoteInput />}
        {type === "image" && <ImageInput />}
      </Modal>
    </div>
  );
};

export default WriterPage;
