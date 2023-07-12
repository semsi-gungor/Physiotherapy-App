"use client";

import { FC, useState } from "react";
import classes from "./OrderedListInput.module.css";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "@/components/ui/button/Button";
import {
  AiOutlinePlusSquare,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import ToolBar from "../ToolBar/ToolBar";
import ToolBarSection from "../ToolBar/ToolBarSection";
import RadioInput from "@/components/ui/input/RadioInput";

type InputField = {
  index: number;
  content: string;
};

let initialState: InputField[] = [];

initialState.push({ index: 1, content: "" });

interface ListInputProps {}

const ListInput: FC<ListInputProps> = ({}) => {
  const [inputArray, setInputArray] = useState(initialState);

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    let { listStyle, ...rest } = data;
    console.log({ listStyle: listStyle, list: { ...rest } });
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <ToolBar>
        <ToolBarSection>
          <RadioInput
            id="ol"
            icon={AiOutlineOrderedList}
            register={register}
            name="listStyle"
            value="ol"
          />
          <RadioInput
            id="ul"
            icon={AiOutlineUnorderedList}
            register={register}
            name="listStyle"
            value="ul"
          />
        </ToolBarSection>
      </ToolBar>
      <div className={classes.listContainer}>
        {inputArray.map((input) => {
          return (
            <Input
              key={input.index}
              label={input.index.toString()}
              register={register}
              name={input.index.toString()}
              type="text"
            />
          );
        })}
      </div>
      <div
        className={classes.addButton}
        onClick={() => {
          setInputArray((prev) => {
            return [...prev, { index: prev.length + 1, content: "" }];
          });
        }}
      >
        <AiOutlinePlusSquare />
      </div>
      <Button size="md">Gönder</Button>
    </form>
  );
};

export default ListInput;
