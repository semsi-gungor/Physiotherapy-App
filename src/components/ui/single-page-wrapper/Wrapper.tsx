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
          <div className={classes.imageContainer}>
            <Image
              src={background}
              quality={50}
              alt="bg"
              style={{
                objectFit: "cover",
                position: "absolute",
                zIndex: "10",
              }}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.children}>{children}</div>
      {background && (
        <div className={classes.imageContainer}>
          <Image
            src={background}
            quality={100}
            alt="bg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: "10",
            }}
          />
        </div>
      )}
    </div>
  );
}
