"use client";

import { FC } from "react";
import BlogContextProvider from "../../../context/blogContext";

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return <BlogContextProvider>{children}</BlogContextProvider>;
};

export default QueryProvider;
