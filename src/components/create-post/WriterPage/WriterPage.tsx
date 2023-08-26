"use client";

import { FC, useState, useContext, Dispatch, SetStateAction } from "react";
import { blogContext } from "@/context/blogContext";
import classes from "./WriterPage.module.css";
import InputMenu from "./InputMenu";
import Modal from "../Modal/Modal";
import TextInput from "../TextInput/TextInput";
import HeaderInput from "../HeaderInput/HeaderInput";
import QuoteInput from "../QuoteInput/QuoteInput";
import ListInput from "../ListInput/OrderedListInput";
import ImageInput from "../ImageInput/ImageInput";
import Button from "@/components/ui/button/Button";
import Preview from "./Preview";
import FormModal from "@/components/ui/modal/Modal";
import { AnimatePresence } from "framer-motion";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import Toast from "@/components/ui/toast/Toast";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/input/Input";
import TextareaInput from "@/components/ui/input/TextareaInput";
import { BsCheckLg, BsArrowRight } from "react-icons/bs";
import { z } from "zod";
import { BlogConfirmSchema } from "@/models/Blog";
import { motion } from "framer-motion";

type InputType = "text" | "list" | "quote" | "header" | "image";

type BlogConfirm = z.infer<typeof BlogConfirmSchema>;

type WriterPageProps = {
  setBlogPageState: Dispatch<SetStateAction<boolean>>;
};

const WriterPage: FC<WriterPageProps> = ({ setBlogPageState }) => {
  const [type, setType] = useState<InputType>("header");
  const [modalOpen, setModalOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const blogCtx = useContext(blogContext);

  function changeType(payload: InputType) {
    setType(payload);
  }

  const createBlogPost = useMutation({
    mutationFn: async (personnel: any) => {
      const response = await axios.post("/api/blog", JSON.stringify(personnel));

      return response.data;
    },
    onSuccess: () => {
      setModalOpen(false);
      blogCtx.reset();
    },
    onError: (error: AxiosError<Error>) => {},
  });

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  function onSubmit(data: any) {
    let newData = {
      title: data.title,
      summary: data.summary,
      image: data.image,
      tags: data.tags.split(","),
    };

    const parsedBlogConfirm = BlogConfirmSchema.safeParse(newData);

    if (blogCtx.postArray.length === 0) {
      return;
    }

    if (parsedBlogConfirm.success) {
      const mappedArray = blogCtx.postArray.map((post, index) => {
        return {
          type: post.postType,
          content: post.postContent,
          ...(post.options?.color ? { color: post.options?.color } : {}),
          ...(post.options?.size ? { size: post.options?.size } : {}),
          ...(post.options?.textAlignment
            ? { alignment: post.options?.textAlignment }
            : {}),
          ...(post.options?.listType
            ? { listType: post.options?.listType }
            : {}),
          order: index,
        };
      });

      let post = {
        postArray: mappedArray,
        ...parsedBlogConfirm.data,
      };

      setOpenToast(true);
      createBlogPost.mutate(post);
    } else {
    }
  }

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ bounce: 0 }}
    >
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={createBlogPost.isError}
        isLoading={createBlogPost.isLoading}
        isSuccsess={createBlogPost.isSuccess}
        duration={2000}
        pendingMessage="Blog yazısı gönderiliyor."
        errorMessage="Blog yazısı gönderilemedi."
        succsessMessage="Blog yazısı gönderildi."
      />
      <div className={classes.container}>
        <div
          onClick={() => {
            setBlogPageState(true);
          }}
          className="absolute top-8 left-28 flex items-center gap-4 px-4 py-4 rounded-full cursor-pointer transition hover:bg-[var(--color-transparent)] hover:translate-x-3"
        >
          <p className="text-lg">Blog Yazılarım</p>
          <span className="text-2xl">
            <BsArrowRight />
          </span>
        </div>
        <Preview setType={changeType} />

        <InputMenu onChange={changeType} />
        <Modal>
          {type === "header" && <HeaderInput />}
          {type === "text" && <TextInput />}
          {type === "list" && <ListInput isBlog />}
          {type === "quote" && <QuoteInput />}
          {type === "image" && <ImageInput />}
        </Modal>
      </div>
      <FormModal isModalOpen={modalOpen} setIsModalOpen={setModalOpen}>
        <FormModal.Button asChild>
          <div
            className={classes.button}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <Button
              size="square"
              onClick={() => {
                reset();
              }}
            >
              <BsCheckLg size={25} />
            </Button>
          </div>
        </FormModal.Button>
        <AnimatePresence>
          {modalOpen && (
            <FormModal.Content>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                  label="Başlık"
                  name="title"
                  register={register}
                  type="text"
                  errorMessage={errors.title?.message?.toString()}
                />
                <Input
                  label="Görsel URL"
                  name="image"
                  register={register}
                  type="url"
                  errorMessage={errors.image?.message?.toString()}
                />
                <TextareaInput
                  label="Özet"
                  name="summary"
                  register={register}
                  errorMessage={errors.summary?.message?.toString()}
                />
                <TextareaInput
                  label="Etiketler"
                  name="tags"
                  register={register}
                  errorMessage={errors.tags?.message?.toString()}
                />
                <Button size="md" type="submit">
                  Gönder
                </Button>
              </form>
            </FormModal.Content>
          )}
        </AnimatePresence>
      </FormModal>
    </motion.div>
  );
};

export default WriterPage;
