import { FC } from "react";
import Wrapper from "@/components/ui/single-page-wrapper/Wrapper";
import LoginPage from "@/components/login/LoginPage";
import QueryProvider from "@/components/providers/QueryProvider/QueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giriş Sayfası",
  description:
    "Login to your account and start enjoying all the benefits of our website.",
};

const Login: FC = () => {
  return (
    <Wrapper>
      <QueryProvider>
        <LoginPage />
      </QueryProvider>
    </Wrapper>
  );
};

export default Login;
