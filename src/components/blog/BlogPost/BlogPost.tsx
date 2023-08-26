import client from "@/lib/prisma";
import { FC } from "react";
import ModuleRender from "./ModuleRender";
import { BsFillClockFill } from "react-icons/bs";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface BlogPostProps {
  post: any;
}

const BlogPost: FC<BlogPostProps> = async ({ post }) => {
  let array = post!.personnel!.user.fullName.split(" ");
  let lastName = array.splice(array.length - 1);
  let names = array.splice(0, array.length);

  let date = post!.creationDay.toLocaleDateString().split(".");

  return (
    <div
      className={`w-full min-h-screen pt-20 flex flex-col items-center bg-white ${poppins.className}`}
    >
      <div className="w-full max-w-4xl bg-white">
        {post?.postModules.map((module: any) => {
          return <ModuleRender key={module.id} module={module} />;
        })}
      </div>

      <div className="w-full max-w-4xl px-2 py-8">
        <div className=" w-full h-40 flex relative gap-4">
          <div className="h-40 square rounded-full relative">
            <Image
              fill
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
              className="rounded-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p className="font-semibold">
              {names} <strong>{lastName}</strong>
            </p>
            <p className="text-sm text-gray-600">{post?.personnel?.title}</p>
          </div>
          <div className="flex items-center absolute right-0 top-0 gap-2">
            <span className="text-xl">
              <BsFillClockFill />
            </span>
            <p>{`${date[0]}/${date[1]}/${date[2]}`}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full max-w-4xl bg-white p-8">
        {post!.tags.map((tag: any, index: number) => {
          return (
            <div
              key={index}
              className="px-4 py-2 bg-gray-100 text-sm rounded-3xl cursor-pointer transition hover:bg-gray-200"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
