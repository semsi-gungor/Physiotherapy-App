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
import Alert from "@/components/ui/alert/Alert";

type Blog = {
  id: string;
  title: string;
  summary: string;
  image: string;
  creationDay: string;
  tags: string[];
  author: string;
};

let id = "";

const BlogPage: FC = () => {
  const queryClient = useQueryClient();
  const [openToast, setOpenToast] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const blogsQuery = useQuery({
    queryKey: ["allBlogPosts"],
    queryFn: async () => {
      const { data } = await axios.get("/api/admin/blog-posts");

      return data;
    },
  });

  const blogDeleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data } = await axios.delete(`/api/admin/blog-posts/${id}`);

      return data;
    },
    onMutate: () => {
      queryClient.invalidateQueries(["allBlogPosts"]);
    },
  });

  const columns = useMemo<ColumnDef<Blog>[]>(
    () => [
      { accessorKey: "title", header: "Başlık" },
      { accessorKey: "author", header: "Yazar" },
      { accessorKey: "summary", header: "Özet" },
      {
        accessorKey: "creationDay",
        header: "Tarih",
        cell: ({ row }) => {
          return (
            <div>{new Date(row.original.creationDay).toLocaleString()}</div>
          );
        },
      },
      {
        id: "action",
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

  return (
    <div className="w-[calc(100%-4.5rem)] ml-[4.5rem] h-screen flex items-center justify-center relative">
      <div className="absolute shadow-lg inset-4 bg-white flex items-center justify-center rounded-xl overflow-hidden">
        <Toast
          open={openToast}
          setOpen={setOpenToast}
          isError={blogDeleteMutation.isError}
          isLoading={blogDeleteMutation.isLoading}
          isSuccsess={blogDeleteMutation.isSuccess}
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
            blogDeleteMutation.mutate(id);
          }}
        >
          Eğer onaylarsanız blog yazısını silinecektir.
        </Alert>
        {blogsQuery.isLoading ? (
          <div className="w-full h-screen grid place-items-center">
            {" "}
            <Spinner size={50} />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={blogsQuery.data}
            caption="Blog Yazıları"
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
