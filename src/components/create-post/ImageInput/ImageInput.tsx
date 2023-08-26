"use client";

import { FC, useContext } from "react";
import { blogContext } from "@/context/blogContext";
import classes from "./ImageInput.module.css";
import Input from "@/components/ui/input/Input";
import ToolBar from "../ToolBar/ToolBar";
import { useForm, FieldValues } from "react-hook-form";
import Button from "@/components/ui/button/Button";
import { BlogPart } from "@/types/blog-posts";
import ToolBarSection from "../ToolBar/ToolBarSection";
import RadioInput from "@/components/ui/input/RadioInput";

interface ImageInputProps {}

const ImageInput: FC<ImageInputProps> = ({}) => {
  const blogCtx = useContext(blogContext);
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    let HeaderPost: BlogPart = {
      postId: Date.now().toString(),
      postType: "image",
      postContent: data.url,
      options: { size: data.size },
    };

    blogCtx.addPost(HeaderPost);
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <ToolBar>
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
      </ToolBar>
      <Input
        name="url"
        register={register}
        type="url"
        label="Resim URL'si"
        errorMessage={errors.url?.message?.toString()}
      />
      <Button size="md" type="submit">
        Gönder
      </Button>
    </form>
  );
};

export default ImageInput;
