"use client";
import { createContext, useState } from "react";
import { BlogPart, BlogPost } from "@/types/blog-posts";

type BlogContext = {
  postArray: BlogPart[];
  addPost: (post: BlogPart) => void;
};

export const blogContext = createContext<BlogContext>({
  postArray: [],
  addPost: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function BlogContextProvider({ children }: Props) {
  const [postArray, setPostArray] = useState<BlogPart[]>([]);

  function addBlogPartHandler(post: BlogPart) {
    setPostArray((prev) => {
      return [...prev, post];
    });
  }

  const value = {
    postArray,
    addPost: addBlogPartHandler,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
}
