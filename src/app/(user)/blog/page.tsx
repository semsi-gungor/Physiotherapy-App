export const revalidate = 60;

import { FC } from "react";
import { Metadata } from "next";
import BlogHeader from "@/components/blog/BlogHeader/BlogHeader";
import BlogCards from "@/components/blog/BlogCards/BlogCards";
import client from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Blog - Pyhsical Therapy",
  description: "Blog yazılarımız.",
};

// revalidate at most every hour

const Page: FC = async () => {
  const modules = await client.blogPost.findMany({
    include: {
      personnel: {
        select: { title: true, user: { select: { fullName: true } } },
      },
      postModules: {
        select: {
          id: true,
          alignment: true,
          color: true,
          listType: true,
          size: true,
          type: true,
          content: true,
        },
      },
    },
  });

  return (
    <div className="w-full min-h-screen relative">
      <BlogHeader />
      <BlogCards blogPosts={modules} />
    </div>
  );
};

export default Page;
