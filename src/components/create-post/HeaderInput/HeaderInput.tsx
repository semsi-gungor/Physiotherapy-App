"use client";

import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import { blogContext } from "@/context/blogContext";
import classes from "./HeaderInput.module.css";
import Input from "@/components/ui/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import Button from "@/components/ui/button/Button";
import ColorInput from "@/components/ui/input/ColorInput";
import RadioInput from "@/components/ui/input/RadioInput";
import ToolBar from "../ToolBar/ToolBar";
import ToolBarSection from "../ToolBar/ToolBarSection";
import ToolBarDivider from "../ToolBar/ToolBarDivider";
import { BlogPart } from "@/types/blog-posts";
import { BsTextLeft, BsTextCenter, BsTextRight } from "react-icons/bs";

type HeaderInputProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderInput: FC = () => {
  const blogCtx = useContext(blogContext);

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, setValue, watch } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    if (blogCtx.postingType === "add") {
      let HeaderPost: BlogPart = {
        postId: Date.now().toString(),
        postType: "header",
        postContent: data.header,
        options: {
          color: data.color,
          size: data.size,
          textAlignment: data.textAlignment,
        },
      };

      blogCtx.addPost(HeaderPost);
    } else if (blogCtx.postingType === "edit") {
      let editHeaderPost: BlogPart = blogCtx.placeholder;
      let HeaderPost: BlogPart = {
        postId: editHeaderPost.postId,
        postType: editHeaderPost.postType,
        postContent: data.header,
        options: {
          color: data.color,
          size: data.size,
          textAlignment: data.textAlignment,
        },
      };
      blogCtx.editPost(HeaderPost);
    }
  }

  useEffect(() => {
    if (blogCtx.postingType === "edit") {
      setValue("header", blogCtx.placeholder.postContent);
      setValue("size", blogCtx.placeholder.options?.size);
      setValue("textAlignment", blogCtx.placeholder.options?.textAlignment);
    }
  }, [
    blogCtx.postingType,
    blogCtx.placeholder.postContent,
    blogCtx.placeholder.options?.size,
    blogCtx.placeholder.options?.textAlignment,
    setValue,
  ]);

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <ToolBar>
        <ToolBarSection>
          <ColorInput name="color" register={register} />
        </ToolBarSection>
        <ToolBarDivider />
        <ToolBarSection>
          <RadioInput
            id="LG"
            label="LG"
            register={register}
            name="size"
            value="lg"
          />
          <RadioInput
            id="MD"
            label="MD"
            register={register}
            name="size"
            value="md"
          />
          <RadioInput
            id="SM"
            label="SM"
            register={register}
            name="size"
            value="sm"
          />
        </ToolBarSection>
        <ToolBarDivider />
        <ToolBarSection>
          <RadioInput
            id="left"
            name="textAlignment"
            register={register}
            value="left"
            icon={BsTextLeft}
          />
          <RadioInput
            id="center"
            name="textAlignment"
            register={register}
            value="center"
            icon={BsTextCenter}
          />
          <RadioInput
            id="right"
            name="textAlignment"
            register={register}
            value="right"
            icon={BsTextRight}
          />
        </ToolBarSection>
      </ToolBar>
      {blogCtx.postingType === "add" && (
        <Input
          name="header"
          register={register}
          type="text"
          label="Başlık"
          errorMessage={errors.header?.message?.toString()}
        />
      )}
      {blogCtx.postingType === "edit" && (
        <Input
          name="header"
          register={register}
          type="text"
          label="Başlık"
          errorMessage={errors.header?.message?.toString()}
        />
      )}
      <Button size="md" type="submit">
        Ekle
      </Button>
    </form>
  );
};

export default HeaderInput;
