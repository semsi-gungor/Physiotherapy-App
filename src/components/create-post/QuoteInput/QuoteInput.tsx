"use client";

import { FC } from "react";
import classes from "./QuoteInput.module.css";
import TextareaInput from "@/components/ui/input/TextareaInput";
import { useForm, FieldValues } from "react-hook-form";
import ToolBar from "../ToolBar/ToolBar";
import ToolBarDivider from "../ToolBar/ToolBarDivider";
import ToolBarSection from "../ToolBar/ToolBarSection";
import ColorInput from "@/components/ui/input/ColorInput";
import RadioInput from "@/components/ui/input/RadioInput";
import { BsTextLeft, BsTextCenter, BsTextRight } from "react-icons/bs";
import Button from "@/components/ui/button/Button";

const QuoteInput: FC = ({}) => {
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    console.log("submitted", data);
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
      <TextareaInput
        register={register}
        label="Eklenecek metni giriniz"
        name="text"
        errorMessage={errors.text?.message?.toString()}
      />

      <Button size="md">Gönder</Button>
    </form>
  );
};

export default QuoteInput;
