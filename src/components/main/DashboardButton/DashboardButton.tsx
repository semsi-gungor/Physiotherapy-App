"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const DashboardButton: FC = ({}) => {
  const { data: session } = useSession();

  if (session?.user.role === "PERSONNEL") {
    return (
      <Link href="/personnel">
        <Button className="fixed right-16 bottom-16 z-50">
          Peronel Sayfası
        </Button>
      </Link>
    );
  } else if (session?.user.role === "ADMIN") {
    return (
      <Link href="/dashboard">
        <Button className="fixed right-16 bottom-16 z-50">Dashboard</Button>
      </Link>
    );
  } else {
    return null;
  }
};

export default DashboardButton;
