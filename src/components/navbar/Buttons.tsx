"use client";

import classes from "./Buttons.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { BsPersonFill } from "react-icons/bs";
import { FC } from "react";
import Spinner from "../ui/spinner/Spinner";

const Buttons: FC = ({}) => {
  const { data: session, status } = useSession();

  return (
    <div className={classes.btnContainer}>
      {status === "loading" && (
        <div>
          <Spinner size={20} />
        </div>
      )}
      {status === "authenticated" && (
        <Link href="/profil">
          <div className="group grid place-items-center w-10 h-10 rounded-xl transition hover:bg-[var(--color-5)]">
            <span className="text-[var(--color-5)] text-2xl transition group-hover:text-white">
              <BsPersonFill />
            </span>
          </div>
        </Link>
      )}
      {status === "unauthenticated" && (
        <Link href="/uye-girisi">Giriş Yap</Link>
      )}
      <Link href="randevu-alma">
        <div className="h-10 px-4 bg-[var(--color-5)] text-[var(--color-1)] transition flex items-center justify-center rounded-xl hover:bg-[var(--color-4)]">
          Randevu AL
        </div>
      </Link>
    </div>
  );
};

export default Buttons;
