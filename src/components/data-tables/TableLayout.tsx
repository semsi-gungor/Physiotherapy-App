"use client";

import { FC } from "react";
import { usePagination } from "@mantine/hooks";
import classes from "./TableLayout.module.css";
import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
} from "react-icons/bs";

interface TableLayoutProps {
  children: React.ReactNode;
  caption: string;
  pageCount: number;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

const TableLayout: FC<TableLayoutProps> = ({
  children,
  caption,
  pageCount,
  currentPage,
  nextPage,
  prevPage,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.tableHeader}>
        <h2>{caption}</h2>
      </div>
      <div className={classes.table}>{children}</div>
      <div className={classes.controls}>
        <div className={classes.buttons}>
          <span>
            <BsChevronDoubleLeft />
          </span>
          <span onClick={prevPage}>
            <BsChevronLeft />
          </span>
          <span onClick={nextPage}>
            <BsChevronRight />
          </span>
          <span>
            <BsChevronDoubleRight />
          </span>
        </div>
        <div className={classes.pageInfo}>
          <p>{`${pageCount} içinden ${currentPage} sayfa.`}</p>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
