import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const cat = searchParams.get("cat");

  const query = {
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy: {
      views: "desc",
    },
    take: 4,
    include: {
      user: true, // user 정보 포함
    },
  };

  try {
    const posts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};