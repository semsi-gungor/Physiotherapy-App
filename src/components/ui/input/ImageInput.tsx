"use client";

import { FC, useState } from "react";
import classes from "./ImageInput.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import Modal from "../modal/Modal";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageInputProps {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
  variant?: "1:1" | "16:9" | "9:16";
  value: string;
}

const ImageInput: FC<ImageInputProps> = ({
  name,
  label,
  errorMessage,
  variant,
  value,
  register,
}) => {
  const [isPreviewShow, setIsPreviewShow] = useState(false);

  const inputRegister = register(name, {
    required: { value: true, message: `${label} boş bırakılamaz.` },
  });

  let variantClass = classes.square;
  if (variant === "16:9") {
    variantClass = classes.horizontal;
  } else if (variant === "9:16") {
    variantClass = classes.vertical;
  }

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <input
          id={name}
          placeholder=" "
          className={classes.input}
          type="url"
          {...inputRegister}
        />
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        {errorMessage && (
          <div className={classes.errorMessage}>
            <BiErrorCircle />
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
      <Modal isModalOpen={isPreviewShow} setIsModalOpen={setIsPreviewShow}>
        <Modal.Button asChild>
          <div className={classes.preview}>Preview</div>
        </Modal.Button>
        <AnimatePresence>
          {isPreviewShow && (
            <Modal.Content>
              <div className={`${classes.imageContainer} ${variantClass}`}>
                <Image className={classes.img} src={value} fill alt="resim" />
              </div>
            </Modal.Content>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
};
export default ImageInput;
