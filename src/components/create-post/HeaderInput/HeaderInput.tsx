"use client";

import { FC, useContext } from "react";
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

type HeaderInputProps = {
  editInfo: BlogPart;
};

const HeaderInput: FC = () => {
  const blogCtx = useContext(blogContext);

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    if (blogCtx.postingType === "add") {
      let HeaderPost: BlogPart = {
        postId: Date.now().toString(),
        postType: "header",
        postContent: data.header,
        options: { color: data.color, size: data.size },
      };

      blogCtx.addPost(HeaderPost);
    } else if (blogCtx.postingType === "edit") {
      let HeaderPost: BlogPart = blogCtx.placeholder;
      blogCtx.editPost("1", HeaderPost);
    }
  }

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
      </ToolBar>
      {blogCtx.postingType === "add" && (
        <Input
          name="header"
          register={register}
          type="text"
          label="Başlık"
          errorMessage={errors.header?.message?.toString()}
          initialValue=""
        />
      )}
      {blogCtx.postingType === "edit" && (
        <Input
          name="header"
          register={register}
          type="text"
          label="Başlık"
          errorMessage={errors.header?.message?.toString()}
          initialValue={blogCtx.placeholder.postContent}
        />
      )}
      <Button size="md">Ekle</Button>
    </form>
  );
};

export default HeaderInput;
