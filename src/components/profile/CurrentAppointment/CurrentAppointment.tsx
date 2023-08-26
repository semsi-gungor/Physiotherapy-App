import { FC } from "react";
import AppointmentCard from "./AppointmentCard";

interface CurrentAppointmentProps {
  appointments: {
    id: string;
    message: string;
    fullName: string;
    email: string;
    tel: string;
    creationDate: string;
    serviceId: string;
    createdAt: Date;
    status: "PENDING" | "APPROVED" | "OUTDATED" | "FULFILLED";
    userId: string | null;
  }[];
}

const CurrentAppointment: FC<CurrentAppointmentProps> = async ({
  appointments,
}) => {
  return (
    <div className="w-full h-1/2 p-8 overflow-auto flex flex-col">
      {appointments.map((appointment) => {
        return (
          <AppointmentCard key={appointment.id} appointmentReq={appointment} />
        );
      })}
    </div>
  );
};

export default CurrentAppointment;
