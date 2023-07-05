"use client";

import { useState } from "react";
import classes from "./Captions.module.css";

const captions = [
  { id: 0, title: "For human rights have resulted." },
  { id: 1, title: "I never dreamed about success. I worked for it." },
  { id: 2, title: "Don’t let yesterday take up too much of today." },
];

export default function Captions() {
  const [id, setId] = useState(0);

  return (
    <div className={classes.container}>
      <p>Whereas disregard and contempt</p>
      <p>For human rights have resulted</p>
    </div>
  );
}
