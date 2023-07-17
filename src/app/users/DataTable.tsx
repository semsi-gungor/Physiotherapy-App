"use client";

import classes from "./DataTable.module.css";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={classes.container}>
      <Table className={classes.table}>
        <TableHeader className={classes.tableHeader}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className={classes.tableBody}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={classes.row}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={classes.cell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className={classes.buttons}>
        <button onClick={() => table.setPageIndex(0)}>first page</button>
        <button onClick={() => table.previousPage()}>prev page</button>
        <button onClick={() => table.nextPage()}>next page</button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          last page
        </button>
      </div>
    </div>
  );
}
