"use client";
import { FC, createContext, useState } from "react";
import { BlogPart, BlogPost } from "@/types/blog-posts";

type PostingType = "add" | "edit";

type BlogContext = {
  postArray: BlogPart[];
  postingType: PostingType;
  placeholder: BlogPart;
  setPlaceholder: (placeholder: BlogPart) => void;
  addPost: (post: BlogPart) => void;
  removePost: (id: string) => void;
  editPost: (post: BlogPart) => void;
  setPostingType: (type: "add" | "edit") => void;
  swapCommand: (command: { id: string; direction: boolean }) => void;
  reset: () => void;
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
  swapCommand: () => {},
  reset: () => {},
});

interface Props {
  children: React.ReactNode;
}

const BlogContextProvider: FC<Props> = ({ children }) => {
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

  function editBlogPartHandler(editPost: BlogPart) {
    const updatedArray = postArray.map((post) => {
      if (post.postId === editPost.postId) {
        return editPost;
      } else {
        return post;
      }
    });

    setPostArray(updatedArray);
  }

  function setPostingTypeHandler(type: PostingType) {
    setPostingType(type);
  }

  function setPlaceholderHandler(placeholder: BlogPart) {
    setPostPlaceHolder(placeholder);
  }

  function swapCommand(command: { id: string; direction: boolean }) {
    let x = postArray.findIndex((post) => {
      return command.id === post.postId;
    });

    if (command.direction) {
      let copyArray = [...postArray];

      if (x === 0) {
        return;
      }

      let y = x - 1;

      const [a, b] = [copyArray[y], copyArray[x]];

      copyArray[x] = a;
      copyArray[y] = b;

      setPostArray(copyArray);
    } else {
      let copyArray = [...postArray];
      if (x === postArray.length - 1) {
        return;
      }
      let y = x + 1;

      const [a, b] = [copyArray[y], copyArray[x]];

      copyArray[x] = a;
      copyArray[y] = b;
      setPostArray(copyArray);
    }
  }

  function reset() {
    setPostArray([]);
  }

  const value = {
    postArray,
    postingType: postingType,
    placeholder: postPlaceHolder,
    setPostingType: setPostingTypeHandler,
    addPost: addBlogPartHandler,
    removePost: removeBlogPartHandler,
    editPost: editBlogPartHandler,
    setPlaceholder: setPlaceholderHandler,
    swapCommand,
    reset,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
};

export default BlogContextProvider;
