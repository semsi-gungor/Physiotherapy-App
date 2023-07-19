"use client";

import { FC } from "react";
import { Table } from "@tanstack/react-table";
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
  firstPage: () => void;
  lastPage: () => void;
  setPageIndex: (updater: number) => void;
  setPageSize: (updater: number) => void;
}

const TableLayout: FC<TableLayoutProps> = ({
  children,
  caption,
  pageCount,
  currentPage,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
  setPageIndex,
  setPageSize,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.tableHeader}>
        <h2>{caption}</h2>
      </div>
      <div className={classes.table}>{children}</div>
      <div className={classes.controls}>
        <div className={classes.buttons}>
          <span onClick={firstPage}>
            <BsChevronDoubleLeft />
          </span>
          <span onClick={prevPage}>
            <BsChevronLeft />
          </span>
          <span onClick={nextPage}>
            <BsChevronRight />
          </span>
          <span onClick={lastPage}>
            <BsChevronDoubleRight />
          </span>
        </div>
        <div className={classes.pageInfo}>
          <p>{`${pageCount} içinden ${currentPage} sayfa.`}</p>
        </div>
        <div className={classes.goToPage}>
          <p>Sayfaya git:</p>
          <input
            type="number"
            defaultValue={1}
            max={pageCount}
            min={1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
          />
        </div>
        <div className={classes.pageSize}>
          <p>Sayfa büyüklüğü:</p>
          <select
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
