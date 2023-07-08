import classes from "./Wrapper.module.css";

export default function Wrapper({
  children,
  inpage,
}: {
  children: React.ReactNode;
  inpage?: boolean;
}) {
  if (inpage) {
    return (
      <div className={classes.wrapper} style={{ marginTop: "0" }}>
        {children}
      </div>
    );
  }

  return <div className={classes.wrapper}>{children}</div>;
}
