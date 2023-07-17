"use client";
import { createContext, useState } from "react";
import { BlogPart, BlogPost } from "@/types/blog-posts";

type PostingType = "add" | "edit";

type BlogContext = {
  postArray: BlogPart[];
  postingType: PostingType;
  placeholder: BlogPart;
  setPlaceholder: (placeholder: BlogPart) => void;
  addPost: (post: BlogPart) => void;
  removePost: (id: string) => void;
  editPost: (id: string, post: BlogPart) => void;
  setPostingType: (type: "add" | "edit") => void;
};

export const blogContext = createContext<BlogContext>({
  postArray: [],
  postingType: "add",
  placeholder: {
    postContent: "",
    postId: "",
    postType: "header",
    options: { color: "", listType: "ol", size: "lg", textAlignment: "left" },
  },
  addPost: () => {},
  removePost: () => {},
  editPost: () => {},
  setPostingType: () => {},
  setPlaceholder: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function BlogContextProvider({ children }: Props) {
  const [postArray, setPostArray] = useState<BlogPart[]>([]);
  const [postingType, setPostingType] = useState<PostingType>("add");
  const [postPlaceHolder, setPostPlaceHolder] = useState<BlogPart>({
    postContent: "",
    postId: "",
    postType: "header",
    options: { color: "", listType: "ol", size: "lg", textAlignment: "left" },
  });

  function addBlogPartHandler(post: BlogPart) {
    setPostArray((prev) => {
      return [...prev, post];
    });
  }

  function removeBlogPartHandler(id: string) {
    setPostArray((prev) => {
      return prev.filter((post) => {
        return post.postId !== id;
      });
    });
  }

  function editBlogPartHandler(id: string, post: BlogPart) {
    console.log(id, post);
  }

  function setPostingTypeHandler(type: PostingType) {
    setPostingType(type);
    console.log(type);
  }

  function setPlaceholderHandler(placeholder: BlogPart) {
    setPostPlaceHolder(placeholder);
  }

  const value = {
    postArray,
    postingType: postingType,
    placeholder: postPlaceHolder,
    setPostingType: setPostingTypeHandler,
    addPost: addBlogPartHandler,
    removePost: removeBlogPartHandler,
    editPost: editBlogPartHandler,
    setPlaceholder: setPostPlaceHolder,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
}
