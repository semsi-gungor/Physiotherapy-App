import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import client from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || token.role !== "ADMIN") {
    return NextResponse.json("Forbidden.", { status: 403 });
  }

  try {
    const blogPosts = await client.blogPost.findMany({
      include: {
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

    const mappedPosts = blogPosts.map((post) => {
      return {
        id: post.id,
        title: post.title,
        summary: post.summary,
        image: post.image,
        creationDay: post.creationDay,
        tags: post.tags,
        author: post.personnel?.user.fullName,
      };
    });

    return NextResponse.json(mappedPosts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Error.", { status: 400 });
  }
}
