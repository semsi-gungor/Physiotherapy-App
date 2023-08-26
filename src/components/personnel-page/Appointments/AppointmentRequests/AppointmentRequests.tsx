"use client";

import { Dispatch, FC, SetStateAction, useMemo } from "react";
import classes from "./AppointmentRequests.module.css";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef, Row } from "@tanstack/react-table";
import { BsGearFill } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Spinner from "@/components/ui/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { add } from "date-fns";

interface AppointmentRequestsProps {
  pickDate: () => void;
  setData: Dispatch<
    SetStateAction<{
      fullName: string;
      email: string;
      tel: string;
      createdAt: string;
      serviceId: string;
      requestId: string;
    }>
  >;
}

export type Request = {
  id: string;
  message: string;
  fullName: string;
  email: string;
  tel: string;
  creationDate: string;
  serviceId: string;
  createdAt: string;
  status: string;
  userId: string | null;
};

const AppointmentRequests: FC<AppointmentRequestsProps> = ({
  pickDate,
  setData,
}) => {
  const columns = useMemo<ColumnDef<Request>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "serviceId", header: "HİZMET" },
      {
        accessorKey: "fullName",
        header: "İSİM",
      },
      { accessorKey: "email", header: "MAİL" },
      { accessorKey: "tel", header: "TELNO" },
      {
        accessorKey: "status",
        header: "DURUM",
        cell: ({ row }) => {
          return row.original.status === "PENDING"
            ? "Randevu Bekliyor"
            : "Geçersiz";
        },
      },

      { accessorKey: "creationDate", header: "OLUŞTURMA TARİHİ" },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <div className={classes.actionButton}>
                  <BsGearFill />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content asChild side="left" sideOffset={10}>
                  <ul className={classes.actionList}>
                    <DropdownMenu.Item asChild>
                      <li className={classes.actionItem}>Sil</li>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <li
                        className={classes.actionItem}
                        onClick={() => {
                          setData({
                            createdAt: row.original.createdAt,
                            email: row.original.email,
                            fullName: row.original.fullName,
                            serviceId: row.original.serviceId,
                            tel: row.original.tel,
                            requestId: row.original.id,
                          });
                          pickDate();
                        }}
                      >
                        Tarih Ata
                      </li>
                    </DropdownMenu.Item>
                  </ul>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          );
        },
      },
    ],
    [pickDate, setData]
  );

  const appointmentRequestsQuery = useQuery({
    queryKey: ["appointmentRequests"],
    queryFn: async () => {
      const { data } = await axios.get("/api/appointment");

      return data;
    },
    staleTime: 60 * 1000 * 10, // sondaki 10 dakika cinsinden yani veri 10 dakika sonra stale olacak
  });

  const appointmentsQuery = useQuery({
    queryKey: ["personnelAppointments"],
    queryFn: async () => {
      const { data } = await axios.get("/api/appointment/personnel");

      let appointments: any = [[], [], [], [], []];

      let today = new Date();
      let tomorrow = add(today, { days: 1 });
      let target = add(tomorrow, { days: 4 });

      let index = 0;
      for (let i = tomorrow; i <= target; i = add(i, { days: 1 })) {
        for (let j = 0; j < data.appointsments.length; j++) {
          if (
            i.toLocaleDateString() ===
            new Date(data.appointsments[j].date).toLocaleDateString()
          ) {
            let appointment = data.appointsments[j].date;
            appointments[index].push(data.appointsments[j]);
          }
        }
        index++;
      }

      return appointments;
    },
  });

  return (
    <div className={classes.container}>
      {appointmentRequestsQuery.data && (
        <DataTable
          columns={columns}
          data={appointmentRequestsQuery.data}
          caption="Randevu İstekleri"
        />
      )}
      {appointmentRequestsQuery.isLoading && (
        <div className="w-full h-screen grid place-items-center">
          <Spinner size={50} />
        </div>
      )}
    </div>
  );
};

export default AppointmentRequests;

/*{
        accessorKey: "tel",
        header: "DURUM",
        cell: ({ row }) => {
          return (
            <td>
              {row.original.status === "pending"
                ? "Randevu Bekliyor"
                : "Geçersiz"}
            </td>
          );
        },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          return <div>sil, seç</div>;
        },
      }, */

/*export type AppointmentRequest = {
  appointmentId: string;
  fullName: string;
  email: string;
  tel: string;
  serviceId: string;
  status: "pending" | "approved" | "fulfilled" | "outdated";
  message: string;
}; */

/*const columns = useMemo<ColumnDef<AppointmentRequest>[]>(
    () => [
      { accessorKey: "appointmentId", header: "ID" },
      { accessorKey: "serviceId", header: "SID" },
      { accessorKey: "fullName", header: "İSİM" },
      { accessorKey: "email", header: "EMAİL" },
      { accessorKey: "tel", header: "TEL" },
      { accessorKey: "status", header: "DURUM" },
    ],
    []
  ); */
