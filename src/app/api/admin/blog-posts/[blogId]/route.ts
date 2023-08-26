import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const blogId = req.url.split("/").at(-1);

  try {
    const modules = await client.postModule.deleteMany({
      where: {
        blogPostId: blogId,
      },
    });

    const blog = await client.blogPost.delete({
      where: {
        id: blogId,
      },
      include: {
        postModules: true,
      },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error", { status: 400 });
  }
}
