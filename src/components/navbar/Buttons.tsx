import classes from "./Buttons.module.css";
import Link from "next/link";
import Button from "../ui/button/Button";
import ArrowButton from "../ui/button/ArrowButton";

export default function Buttons() {
  return (
    <div className={classes.btnContainer}>
      <Link href="/uye-girisi">
        <Button size="md" variant="outlined">
          GİRİŞ YAP
        </Button>
      </Link>
      <Link href="randevu-alma">
        <Button size="md" variant="outlined">
          RANDEVU AL
        </Button>
      </Link>
    </div>
  );
}
