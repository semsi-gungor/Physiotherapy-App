import classes from "./Captions.module.css";

export default function Captions() {
  return (
    <div className={classes.container}>
      <p className={classes.doubleUp} style={{ top: "2.5rem" }}>
        Kendinize bir iyilik yapın.
      </p>
      <p className={classes.up} style={{ top: "2.5rem" }}>
        Bedeninizi harekete geçirin.
      </p>
      <span className={`${classes.bracket} ${classes.grow}`}></span>
      <p className={classes.down} style={{ top: "4.7rem" }}>
        Zihninizi temizleyin, iyi hissedin.
      </p>
    </div>
  );
}
