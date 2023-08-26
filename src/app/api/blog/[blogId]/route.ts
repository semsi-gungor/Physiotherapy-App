import client from "@/lib/prisma";
import { Prisma } from "@prisma/client";
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json("Blog yazısı bulunamadı.", { status: 400 });
      }
    }
    throw error;
  }
}

export async function GET(req: NextRequest) {
  const id = req.url.split("/").at(-1);

  try {
    const post = await client.blogPost.findUnique({
      where: {
        id: id,
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

    console.log(post);

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json("error", { status: 400 });
  }
}
