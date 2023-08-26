import { FC } from "react";
import { Poppins } from "next/font/google";
import BlogCard from "./BlogCard";

export const revalidate = 180;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Props = {
  blogPosts: any;
};

const BlogCards: FC<Props> = async ({ blogPosts }) => {
  return (
    <div className={`${poppins.className} relative flex flex-col pb-12`}>
      <div className=" hidden absolute w-[2px] h-full top-0 left-1/2 bg-black md:left-[40%] lg:left-1/2 md:block lg:block"></div>
      {blogPosts.map((post: any) => {
        return (
          <BlogCard
            key={post.id}
            author={post.personnel!.user.fullName}
            date={post.creationDay.toLocaleDateString()}
            id={post.id}
            summary={post.summary}
            title={post.title}
            image={post.image}
          />
        );
      })}
    </div>
  );
};

export default BlogCards;

/*const blogPosts = await client.blogPost.findMany({
    select: {
      creationDay: true,
      id: true,
      image: true,
      summary: true,
      title: true,
      postModules: true,
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
  });*/
