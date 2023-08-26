import { FC } from "react";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";
import SignUpPage from "@/components/sing-up/SignUpPage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayıt Ol",
  description:
    "Signup to account and start enjoying all the benefits of our website.",
};

const Signup: FC = () => {
  return (
    <Wrapper>
      <QueryProvider>
        <SignUpPage />
      </QueryProvider>
    </Wrapper>
  );
};

export default Signup;
