"use client";

import { FC, useContext, useState } from "react";
import { blogContext } from "@/context/blogContext";
import classes from "./OrderedListInput.module.css";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "@/components/ui/button/Button";
import {
  AiOutlinePlusSquare,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BlogPart } from "@/types/blog-posts";
import ToolBar from "../ToolBar/ToolBar";
import ToolBarSection from "../ToolBar/ToolBarSection";
import RadioInput from "@/components/ui/input/RadioInput";

interface ListInputProps {
  initialValue: string[];
  isBlog: boolean;
}

const ListInput: FC<ListInputProps> = ({ initialValue, isBlog }) => {
  const blogCtx = useContext(blogContext);

  const [inputArray, setInputArray] = useState(initialValue ?? []);

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  function onSubmit(data: FieldValues) {
    let { listStyle, ...rest } = data;

    let array = Object.values(rest);

    let HeaderPost: BlogPart = {
      postId: Date.now().toString(),
      postType: "list",
      postContent: array,
      options: { listType: data.listStyle },
    };

    blogCtx.addPost(HeaderPost);
    console.log(blogCtx.postArray);
  }

  if (!isBlog) {
    return (
      <div className={classes.listContainer}>
        {inputArray.map((input, index) => {
          return (
            <Input
              initialValue={input}
              key={index}
              label={(index + 1).toString()}
              register={register}
              name={(index + 1).toString()}
              type="text"
            />
          );
        })}
        <div
          className={classes.addButton}
          onClick={() => {
            setInputArray((prev) => {
              return [...prev, ""];
            });
          }}
        >
          <AiOutlinePlusSquare />
        </div>
      </div>
    );
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
        {inputArray.map((input, index) => {
          return (
            <Input
              initialValue={input}
              key={index}
              label={(index + 1).toString()}
              register={register}
              name={(index + 1).toString()}
              type="text"
            />
          );
        })}
      </div>
      <div
        className={classes.addButton}
        onClick={() => {
          setInputArray((prev) => {
            return [...prev, ""];
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
