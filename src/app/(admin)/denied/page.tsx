import { FC } from "react";
import ErrorPage from "@/components/error-page/ErrorPage";
import { AuthRequiredError } from "@/lib/exceptions";

const page: FC = () => {
  const error = new AuthRequiredError();

  return <ErrorPage error={error} />;
};

export default page;
