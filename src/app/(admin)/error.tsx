"use client";

import { FC } from "react";
import ErrorPage from "@/components/error-page/ErrorPage";

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return <ErrorPage error={error} reset={reset} />;
};

export default error;
