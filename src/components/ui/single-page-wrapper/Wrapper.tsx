import classes from "./Wrapper.module.css";
import Image, { StaticImageData } from "next/image";

type Props = {
  background?: StaticImageData;
  children: React.ReactNode;
  inpage?: boolean;
};

export default function Wrapper({ children, inpage, background }: Props) {
  if (inpage) {
    return (
      <div className={classes.wrapper}>
        <div style={{ marginTop: "0" }} className={classes.children}>
          {children}
        </div>
        {background && (
          <Image
            src={background}
            alt="bg"
            style={{
              width: "100vh",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: "10",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.children}>{children}</div>
      {background && (
        <Image
          src={background}
          alt="bg"
          quality={100}
          style={{
            width: "105%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "10",
          }}
        />
      )}
    </div>
  );
}
