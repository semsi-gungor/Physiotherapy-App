import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import client from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (!token || token.role === "USER") {
    return NextResponse.json("Authorization Required.", { status: 401 });
  }

  const body = await req.json();

  const postArray = body.postArray;
  const image = body.image;
  const summary = body.summary;
  const tags = body.tags;
  const title = body.title;

  try {
    const personnel = await client.personnel.findUnique({
      where: {
        userId: token.id,
      },
    });

    const blog = await client.blogPost.create({
      data: {
        image,
        summary,
        title,
        tags,
        personnel: { connect: { id: personnel?.id } },
        postModules: {
          createMany: { data: postArray },
        },
      },
    });

    return NextResponse.json(blog, { status: 200 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
    }
    throw e;
  }
}

export async function GET(req: NextRequest) {
  try {
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

    return NextResponse.json(modules, { status: 200 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
    }
    throw e;
  }
}
