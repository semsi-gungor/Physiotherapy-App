"use client";

import Button from "@/components/ui/button/Button";
import { ColumnDef } from "@tanstack/react-table";

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
  { accessorKey: "email", header: "EMAIL" },
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <div
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
            console.log("sad");
          }}
        >
          NAME
        </div>
      );
    },
  },
  { accessorKey: "role", header: "ROLE" },
  { accessorKey: "tel", header: "TELNO" },
];
