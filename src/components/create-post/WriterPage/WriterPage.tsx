"use client";

import { FC, useState } from "react";
import classes from "./WriterPage.module.css";
import InputMenu from "./InputMenu";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import HeaderInput from "../HeaderInput/HeaderInput";
import QuoteInput from "../QuoteInput/QuoteInput";
import ListInput from "../ListInput/OrderedListInput";

type InputType = "text" | "list" | "quote" | "header" | "image";

const WriterPage: FC = ({}) => {
  const [type, setType] = useState<InputType>("header");

  function changeType(payload: InputType) {
    setType(payload);
  }

  return (
    <div className={classes.container}>
      <InputMenu onChange={changeType} />
      <Modal>
        {type === "header" && <HeaderInput />}
        {type === "text" && <TextInput />}
        {type === "list" && <ListInput />}
        {type === "quote" && <QuoteInput />}
      </Modal>
    </div>
  );
};

export default WriterPage;
