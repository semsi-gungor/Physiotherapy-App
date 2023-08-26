"use client";

import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import classes from "./BlogsTable.module.css";
import { DataTable } from "@/components/data-tables/DataTable/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import DashboardWrapper from "@/components/admin-page/DashboardWrapper/DashboardWrapper";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner/Spinner";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Alert from "@/components/ui/alert/Alert";
import Toast from "@/components/ui/toast/Toast";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  summary: string;
  image: string;
  creationDay: string;
  tags: string[];
};

interface BlogsTableProps {
  setBlogPageState: Dispatch<SetStateAction<boolean>>;
}

let id = "";

const BlogsTable: FC<BlogsTableProps> = ({ setBlogPageState }) => {
  const [openToast, setOpenToast] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const queryClient = useQueryClient();

  const blogPostsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axios.get("/api/blog/personnel");

      return data;
    },
  });

  const columns = useMemo<ColumnDef<Blog>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "title", header: "Başlık" },
      {
        accessorKey: "summary",
        header: "Özet",
      },
      {
        accessorKey: "tags",
        header: "Etiketler",
      },
      {
        header: "Tarih",
        cell: ({ row }) => {
          let date = new Date(row.original.creationDay).toLocaleDateString();

          return <p>{date}</p>;
        },
      },
      {
        header: "Resim",
        cell: ({ row }) => {
          return (
            <div className={classes.bodyImage}>
              <Image
                className={classes.image}
                src={row.original.image}
                fill
                alt="resim"
              />
            </div>
          );
        },
      },

      {
        id: "actions",
        cell: ({ row }) => {
          return (
            <Button
              variant={"destructive"}
              onClick={() => {
                id = row.original.id;
                setOpenAlert(true);
              }}
            >
              Sil
            </Button>
          );
        },
      },
    ],
    []
  );

  const deletePost = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/api/blog/${id}`);

      return response;
    },
    onSuccess: () => {
      id = "";
      queryClient.invalidateQueries(["blogs"]);
    },
    onError: () => {},
  });

  return (
    <DashboardWrapper>
      <Toast
        open={openToast}
        setOpen={setOpenToast}
        isError={deletePost.isError}
        isLoading={deletePost.isLoading}
        isSuccsess={deletePost.isSuccess}
        duration={2000}
        pendingMessage="Blog yazısı siliniyor."
        errorMessage={"Error"}
        succsessMessage="Blog yazısı başarıyla silindi."
      />
      <Alert
        alertOpen={openAlert}
        setAlertOpen={setOpenAlert}
        title="Silmek istediğinize emin misiniz?"
        onSubmit={() => {
          setOpenToast(true);
          deletePost.mutate(id);
        }}
      >
        Eğer onaylarsanız blog yazısını silinecektir.
      </Alert>
      <div
        onClick={() => {
          setBlogPageState(false);
        }}
        className="absolute top-8 left-28 flex items-center gap-4 px-4 py-4 rounded-full cursor-pointer transition hover:bg-[var(--color-transparent)] hover:-translate-x-3"
      >
        <span className="text-2xl">
          <BsArrowLeft />
        </span>
        <p className="text-lg">Blog Yaz</p>
      </div>
      {blogPostsQuery.isLoading ? (
        <div className="w-full h-screen grid place-items-center">
          <Spinner size={50} />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={blogPostsQuery.data}
          caption="Blog Yazırlarım"
        />
      )}
    </DashboardWrapper>
  );
};

export default BlogsTable;
