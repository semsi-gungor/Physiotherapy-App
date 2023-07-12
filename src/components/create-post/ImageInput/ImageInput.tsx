"use client";

import { FC } from "react";
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
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    let HeaderPost: BlogPart = {
      postType: "image",
      postContent: [data.url, data.title],
      options: { size: data.size },
    };
    console.log(HeaderPost);
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
      <Input
        name="title"
        register={register}
        type="text"
        label="Resim başlığı"
        errorMessage={errors.title?.message?.toString()}
      />
      <Button size="md">Gönder</Button>
    </form>
  );
};

export default ImageInput;
