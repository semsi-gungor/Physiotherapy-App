"use client";

import { FC, useContext, useState, useEffect } from "react";
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
import TextArea from "../TextInput/TextArea";

interface ListInputProps {
  initialValue?: string[];
  isBlog: boolean;
}

const ListInput: FC<ListInputProps> = ({ initialValue, isBlog }) => {
  const blogCtx = useContext(blogContext);

  const [inputArray, setInputArray] = useState(initialValue ?? []);

  const form = useForm({
    mode: "all",
    defaultValues: {
      list: "",
    },
  });
  const { register, handleSubmit, formState, watch, setValue } = form;

  function onSubmit(data: any) {
    let { listStyle, list } = data;

    let textString: string = list;

    let HeaderPost: BlogPart = {
      postId: Date.now().toString(),
      postType: "list",
      postContent: textString,
      options: { listType: listStyle },
    };

    blogCtx.addPost(HeaderPost);
  }

  let listValue = watch("list");

  let length = listValue.split("\n").length;

  useEffect(() => {
    setValue("list", listValue + `${listValue.split("\n").length}. `);
  }, [length, listValue, setValue]);

  if (!isBlog) {
    return (
      <div className={classes.listContainer}>
        {inputArray.map((input, index) => {
          let now = Date.now();
          return (
            <Input
              key={index}
              label={now.toString()}
              register={register}
              name={now.toString()}
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
        {/* {inputArray.map((input, index) => {
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
        })} */}
        <TextArea label="List" name="list" register={register} />
      </div>
      {/* <div
        className={classes.addButton}
        onClick={() => {
          setInputArray((prev) => {
            return [...prev, ""];
          });
        }}
      >
        <AiOutlinePlusSquare />
      </div> */}
      <Button size="md" type="submit">
        Gönder
      </Button>
    </form>
  );
};

export default ListInput;
