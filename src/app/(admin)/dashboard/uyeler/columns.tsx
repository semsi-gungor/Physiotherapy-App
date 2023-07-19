"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown } from "react-icons/lu";
import classes from "./DataTable.module.css";
import RowAction from "@/components/data-tables/RowAction/RowAction";

export type User = {
  userId: string;
  email: string;
  dateOfBirth: string;
  tel: string;
  fullName: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  { accessorKey: "userId", header: "ID" },
  { accessorKey: "dateOfBirth", header: "DOB" },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <div
          className={classes.sortButton}
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          <span>NAME</span>
          <LuArrowUpDown />
        </div>
      );
    },
  },
  { accessorKey: "role", header: "ROLE" },
  { accessorKey: "tel", header: "TELNO" },
  {
    id: "actions",
    cell: ({ row }) => {
      return <RowAction rowData={row.original} />;
    },
  },
];
