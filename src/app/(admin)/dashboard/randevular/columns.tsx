"use client";

import { ColumnDef } from "@tanstack/react-table";
import RowAction from "@/components/data-tables/RowAction/RowAction";

export type Appointment = {
  appointmentId: string;
  serviceId: string;
  date: string;
  tel: string;
  fullName: string;
  email: string;
};

export const columns: ColumnDef<Appointment>[] = [
  { accessorKey: "appointmentId", header: "ID" },
  { accessorKey: "serviceId", header: "SERVİS ID" },
  {
    accessorKey: "date",
    header: "TARİH",
  },
  {
    accessorKey: "fullName",
    header: "İSİM",
  },
  { accessorKey: "email", header: "EMAIL" },
  { accessorKey: "tel", header: "TELNO" },
  {
    id: "actions",
    cell: ({ row }) => {
      return <RowAction rowData={row.original} />;
    },
  },
];
