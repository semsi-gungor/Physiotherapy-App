import { FC } from "react";
import classes from "./ErrorPage.module.css";
import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset?: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className={classes.container}>
      <p className={classes.header}>Bir hata meydana geldi.</p>
      <h1 className={classes.message}>{error.message}</h1>
      <p className={classes.info}>
        Daha sonra tekrar deneyiniz. Eğer bir sorun olduğunu düşünüyorsanız
        destek ile iletişime geçiniz.
      </p>
      <div className={classes.buttons}>
        <Link href="/" className={`${classes.button} ${classes.primary}`}>
          Ana Sayfaya Dön
        </Link>
        {reset && (
          <button className={`${classes.button} ${classes.outline}`}>
            Tekrar Dene
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
