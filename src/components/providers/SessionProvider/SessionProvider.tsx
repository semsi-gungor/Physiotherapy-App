"use client";

import { FC } from "react";
import { SessionProvider as Provider } from "next-auth/react";

type SesssionProviderProps = {
  children: React.ReactNode;
};

const SessionProvider: FC<SesssionProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
