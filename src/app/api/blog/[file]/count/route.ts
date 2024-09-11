import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { file: string } }
) {
  try {
    const { file } = params;

    const viewCount = await prisma.count.findUnique({
      where: {
        blog: file,
      },
    });

    if (!viewCount) {
      return new Response("Post not found", { status: 404 });
    }
    return new Response(JSON.stringify({ viewCount: viewCount.viewCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response("Error fetching post", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { file: string } }
) {
  try {
    const { file } = params;

    const viewCount = await prisma.count.findUnique({
      where: {
        blog: file,
      },
    });

    if (!viewCount) {
      await prisma.count.create({
        data: {
          blog: file,
          viewCount: 1,
        },
      });
    } else {
      await prisma.count.update({
        where: {
          blog: file,
        },
        data: {
          viewCount: viewCount.viewCount + 1,
        },
      });
    }

    return new Response("Success", { status: 200 });
  } catch (err) {
    return new Response("Error updating post", { status: 500 });
  }
}
