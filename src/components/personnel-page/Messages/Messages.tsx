"use client";

import { FC, useState } from "react";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { MessageSchema } from "@/models/Message";
import Spinner from "@/components/ui/spinner/Spinner";
import { FaTrash } from "react-icons/fa";
import Toast from "@/components/ui/toast/Toast";

type Message = z.infer<typeof MessageSchema>;

const Messages: FC = ({}) => {
  const [openToast, setOpenToast] = useState(false);

  const messagesQuery = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data } = await axios.get("/api/message");

      return data as Message[];
    },
  });

  const deleteMessageMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await axios.delete(`/api/message/${id}`);

      return data;
    },
    onSuccess: () => {
      messagesQuery.refetch();
    },
  });

  return (
    <div className="w-[calc(100%-4.5rem)] ml-[4.5rem] h-screen flex flex-col relative items-center gap-4">
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deleteMessageMutation.isError}
        isLoading={deleteMessageMutation.isLoading}
        isSuccsess={deleteMessageMutation.isSuccess}
        duration={2000}
        pendingMessage="Mesaj siliniyor."
        errorMessage="Mesaj sinilenemedi."
        succsessMessage="Mesaj silindi."
      />

      <div className="w-2/3 mt-24 max-h-[30rem] px-8 overflow-auto flex flex-col gap-4">
        {messagesQuery.isLoading ? (
          <div className="w-full h-screen grid place-items-center -mt-24">
            <Spinner size={50} />
          </div>
        ) : messagesQuery.data?.length === 0 ? (
          <div className="w-full h-screen grid place-items-center -mt-24">
            <h1 className="text-5xl font-semibold">Mesaj kutusu boş.</h1>
          </div>
        ) : (
          messagesQuery.data?.map((message) => {
            return (
              <div key={message.id} className="flex items-center gap-12">
                <div
                  key={message.id}
                  className="w-full bg-white rounded-xl relative"
                >
                  <div className="flex items-center justify-between bg-gray-300 rounded-t-xl px-8 py-4">
                    <span className="flex gap-4 items-center">
                      <p className="text-lg font-semibold">
                        {message.fullName}
                      </p>
                      <p className="text-gray-500">{message.email}</p>
                    </span>
                    <p className="text-lg">
                      {new Date(message.creationDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="px-8 py-4 flex flex-col gap-4">
                    <h4 className="text-lg font-bold">{message.topic}</h4>
                    <p>{message.message}</p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setOpenToast(true);
                    deleteMessageMutation.mutate(message.id!);
                  }}
                  className=" w-12 h-12 grid place-items-center text-red-500 border-2 cursor-pointer border-red-500 rounded-xl bg-white transition hover:bg-red-500 hover:text-white"
                >
                  <FaTrash />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Messages;
