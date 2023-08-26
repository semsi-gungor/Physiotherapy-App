"use client";

import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import Spinner from "@/components/ui/spinner/Spinner";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { ColumnDef, Row } from "@tanstack/react-table";
import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import RowAction from "@/components/data-tables/RowAction/RowAction";
import { Button } from "@/components/ui/button";
import Toast from "@/components/ui/toast/Toast";
import { z } from "zod";
import { AppointmentRequestSchema } from "@/models/AppointmentRequest";

type AppointmentRequest = z.infer<typeof AppointmentRequestSchema>;

type Appointment = {
  id: string;
  date: string;
  fullName: string;
  email: string;
  tel: string;
  createdAt: string;
  approvedAt: string;
  serviceId: string;
  personnelId: string;
};

interface UpcomingAppointmentsProps {}

const UpcomingAppointments: FC<UpcomingAppointmentsProps> = ({}) => {
  const queryClient = useQueryClient();

  const [openToast, setOpenToast] = useState(false);

  const appointmentsQuery = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const { data } = await axios.get("/api/appointment/personnel");

      return data.appointsments;
    },
  });

  const deleteAppointment = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await axios.delete(`/api/appointments/${id}`);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["appointments"]);
    },
    onError: () => {},
  });

  const rescheduleMutation = useMutation({
    mutationFn: async (request: AppointmentRequest) => {
      const { data } = await axios.post("/api/appointment", request);

      return request;
    },
    onSuccess: () => {
      appointmentsQuery.refetch();
    },
  });

  const columns = useMemo<ColumnDef<Appointment>[]>(
    () => [
      { accessorKey: "fullName", header: "İsim" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "tel", header: "Tel" },
      { accessorKey: "serviceId", header: "Hizmet" },
      {
        header: "Tarih",
        cell: ({ row }) => {
          let date = new Date(row.original.date).toLocaleDateString();

          return <p>{date}</p>;
        },
      },
      {
        header: "Saat",
        cell: ({ row }) => {
          let date = new Date(row.original.date)
            .toLocaleTimeString()
            .slice(0, 5);

          return <p>{date}</p>;
        },
      },
      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <RowAction>
              <DeleteForm
                original={row.original}
                deleteMutation={deleteAppointment.mutate}
                setOpenToast={setOpenToast}
              />
              <EditForm
                originals={row.original}
                mutate={rescheduleMutation.mutate}
                deleteMutation={deleteAppointment.mutate}
              />
            </RowAction>
          );
        },
      },
    ],
    [deleteAppointment.mutate, rescheduleMutation.mutate]
  );
  return (
    <div className="w-[calc(100%-4.5rem)] ml-[4.5rem] h-screen flex items-center justify-center relative">
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deleteAppointment.isError}
        isLoading={deleteAppointment.isLoading}
        isSuccsess={deleteAppointment.isSuccess}
        duration={2000}
        pendingMessage="Hizmet siliniyor. "
        errorMessage={"Error"}
        succsessMessage="Hizmet başarıyla silindi."
      />
      <div className="absolute shadow-lg inset-4 bg-white flex items-center justify-center rounded-xl overflow-hidden">
        {!appointmentsQuery.isLoading && (
          <DataTable
            columns={columns}
            data={appointmentsQuery.data}
            caption="Gelecek Randevular"
          />
        )}
        {appointmentsQuery.isLoading && <Spinner size={50} />}
      </div>
    </div>
  );
};

function EditForm({
  originals,
  mutate,
  deleteMutation,
}: {
  originals: any;
  mutate: any;
  deleteMutation: any;
}) {
  /*{
    id: '64e75514a259920181e46db6',
    date: '2023-08-25T06:00:00.000Z',
    fullName: 'Ela Akın',
    email: 'ela_akin@gmail.com',
    tel: '05421532653',
    createdAt: '2023-08-24T12:47:04.156Z',
    approvedAt: '2023-08-24T13:03:16.859Z',
    serviceId: 'reformer-pilates',
    personnelId: '64e3db1e4a19453c67c73444'
  } */

  return (
    <div className="w-full space-y-4">
      <h2 className="text-lg font-semibold">
        Yeniden tarih atamak istiyor musunuz?
      </h2>
      <Button
        onClick={() => {
          let request: AppointmentRequest = {
            creationDate: new Date().toLocaleString(),
            email: originals.email,
            fullName: originals.fullName,
            message: "Yeniden tarih atama.",
            serviceId: originals.serviceId,
            tel: originals.tel,
          };

          mutate(request);
          deleteMutation(originals.id);
        }}
      >
        Onayla
      </Button>
    </div>
  );
}

//date: string;fullName: string;email: string;serviceId: string;
function DeleteForm({
  original,
  deleteMutation,
  setOpenToast,
}: {
  original: Appointment;
  deleteMutation: UseMutateFunction<void, unknown, string, unknown>;
  setOpenToast: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold">Randevu Sil</h2>
      <ul className="py-8 space-y-2">
        <li className="flex">
          <p className="w-32 font-semibold">Hizmet: </p>
          <p>{original.serviceId}</p>
        </li>
        <li className="flex">
          <p className="w-32 font-semibold">İsim: </p>
          <p>{original.fullName}</p>
        </li>
        <li className="flex">
          <p className="w-32 font-semibold">Email: </p>
          <p>{original.email}</p>
        </li>
        <li className="flex">
          <p className="w-32 font-semibold">Tarih: </p>
          <p>{original.date}</p>
        </li>
      </ul>
      <Button
        onClick={() => {
          setOpenToast(true);
          deleteMutation(original.id);
        }}
      >
        Onayla
      </Button>
    </div>
  );
}

export default UpcomingAppointments;
