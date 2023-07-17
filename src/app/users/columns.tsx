"use client";

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
  { accessorKey: "fullName", header: "FULLNAME" },
  { accessorKey: "role", header: "ROLE" },
  { accessorKey: "tel", header: "TELNO" },
];
