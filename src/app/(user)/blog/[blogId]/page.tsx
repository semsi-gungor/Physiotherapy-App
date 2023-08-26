export const revalidate = 60;

import { FC } from "react";
import BlogPost from "@/components/blog/BlogPost/BlogPost";
import client from "@/lib/prisma";

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.blogId;

  // fetch data
  const post = await client.blogPost.findUnique({
    where: {
      id: id,
    },

    select: {
      summary: true,
      tags: true,
      title: true,
    },
  });

  return {
    title: post?.title,
    description: post?.summary,
    keywords: post?.tags,
  };
}

type Props = {
  params: { blogId: string };
};

export async function generateStaticParams() {
  const ids = await client.blogPost.findMany({
    select: {
      id: true,
    },
  });

  const blogIds = ids.map((id) => {
    return {
      blogId: id.id,
    };
  });

  return blogIds;
}

const Page: FC<Props> = async ({ params }) => {
  const post = await client.blogPost.findUnique({
    where: {
      id: params.blogId,
    },
    include: {
      postModules: {
        orderBy: {
          order: "asc",
        },
      },
      personnel: {
        select: {
          title: true,
          user: {
            select: {
              fullName: true,
            },
          },
        },
      },
    },
  });

  return <BlogPost post={post} />;
};

export default Page;
