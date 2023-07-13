import { FC } from "react";
import classes from "./TreatmentsList.module.css";
import { AiFillStar } from "react-icons/ai";

interface TreatmentsListProps {
  treatments: string[];
}

const TreatmentsList: FC<TreatmentsListProps> = ({ treatments }) => {
  return (
    <ul className={classes.list}>
      {treatments.map((item, index) => {
        return (
          <li key={index} className={classes.item}>
            <AiFillStar />
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TreatmentsList;
