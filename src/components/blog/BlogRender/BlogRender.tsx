"use client";

import { FC, useContext } from "react";
import classes from "./BlogRender.module.css";
import { BlogPart } from "@/types/blog-posts";
import TextPost from "../TextPost/TextPost";
import ImagePost from "../ImagePost/ImagePost";
import HeaderPost from "../HeaderPost/HeaderPost";
import ListPost from "../ListPost/ListPost";
import QuotePost from "../QuotePost/QuotePost";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { blogContext } from "@/context/blogContext";
import { uiContext } from "@/context/uiControl";

type InputType = "text" | "list" | "quote" | "header" | "image";

interface BlogRenderProps {
  post: BlogPart;
  setType: (type: InputType) => void;
}

const BlogRender: FC<BlogRenderProps> = ({ post, setType }) => {
  const blogCtx = useContext(blogContext);
  const uiCtx = useContext(uiContext);

  const postType = post.postType;
  const postId = post.postId;

  return (
    <div className={classes.container}>
      {postType === "header" && <HeaderPost post={post} />}
      {postType === "text" && <TextPost post={post} />}
      {postType === "image" && <ImagePost post={post} />}
      {postType === "list" && <ListPost post={post} />}
      {postType === "quote" && <QuotePost post={post} />}
      <div className={classes.move}>
        <span
          onClick={() => {
            let command = {
              id: post.postId,
              direction: true,
            };
            blogCtx.swapCommand(command);
          }}
        >
          <BsChevronUp />
        </span>
        <span
          onClick={() => {
            let command = {
              id: post.postId,
              direction: false,
            };
            blogCtx.swapCommand(command);
          }}
        >
          <BsChevronDown />
        </span>
      </div>
      <div className={classes.tools}>
        <span
          onClick={() => {
            setType(postType);
            blogCtx.setPostingType("edit");
            blogCtx.setPlaceholder(post);
            uiCtx.displayInputModal();
          }}
        >
          <AiOutlineEdit />
        </span>
        <span
          style={{ color: "var(--error)" }}
          onClick={() => {
            blogCtx.removePost(postId);
          }}
        >
          <BiTrashAlt />
        </span>
      </div>
    </div>
  );
};

export default BlogRender;
