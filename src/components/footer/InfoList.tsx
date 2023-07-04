import classes from "./InfoList.module.css";

interface Props {
  children: React.ReactNode;
  header: string;
}

export default function InfoList({ children, header }: Props) {
  return (
    <div className={classes.container}>
      <p className={classes.listHeader}>{header}</p>
      <ul className={classes.list}>{children}</ul>
    </div>
  );
}
