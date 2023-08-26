import { FC } from "react";
import { Button } from "@/components/ui/button";
import { BsPerson, BsCalendar4Week, BsArrowRight } from "react-icons/bs";
import client from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

const BlogPosts: FC = async ({}) => {
  const featuredPosts = await client.blogPost.findMany({
    orderBy: {
      creationDay: "asc",
    },
    take: 3,
    select: {
      id: true,
      image: true,
      creationDay: true,
      summary: true,
      title: true,
      personnel: {
        select: {
          user: {
            select: {
              fullName: true,
            },
          },
        },
      },
    },
  });

  const posts = featuredPosts.map((post) => {
    return {
      id: post.id,
      image: post.image,
      title: post.title,
      summary: post.summary,
      creationDate: post.creationDay.toLocaleDateString(),
      author: post.personnel?.user.fullName ?? "",
    };
  });

  return (
    <div className="w-full min-h-screen flex flex-col gap-12 pt-24 items-center justify-center md:gap-16">
      <h2 className="text-3xl font-bold text-[var(--color-6)] md:text-5xl">
        Blog Yazılarımız
      </h2>
      <div className="grid grid-cols-1 px-24 gap-8 md:grid-cols-3 md:px-8">
        {posts.map((post, index) => {
          return (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="group bg-slate-100 flex flex-col max-w-xs h-[70vh] cursor-pointer transition shadow-md hover:shadow-lg relative">
                <div className="h-[45%] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>

                <div className="flex h-[10%]">
                  <div className="flex gap-1 items-center justify-center flex-1">
                    <span className="text-[var(--info)] text-base md:text-lg">
                      <BsPerson />
                    </span>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {post.author}
                    </p>
                  </div>
                  <div className="flex gap-1 items-center justify-center flex-1">
                    <span className="text-[var(--info)] text-base md:text-lg">
                      <BsCalendar4Week />
                    </span>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {post.creationDate}
                    </p>
                  </div>
                </div>

                <div className="h-[45%] flex flex-col justify-around px-4">
                  <h3 className="font-bold text-base  group-hover:text-blue-700 md:text-lg">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 md:text-sm line-clamp-6">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold group-hover:text-blue-700 md:text-sm">
                    Devamını Gör
                    <span className="text-lg group-hover:text-blue-700">
                      <BsArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link href="/blog">
        <Button>Hepsini Gör</Button>
      </Link>
    </div>
  );
};

export default BlogPosts;
