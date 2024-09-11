// lib/viewActions.ts (create this file for server actions)
import prisma from "@/lib/prisma";

// Fetch the view count for a blog post
export async function fetchViewCount(blog: string) {
  const viewCount = await prisma.count.findUnique({
    where: { blog },
  });

  if (!viewCount) {
    return 0;
  }

  return viewCount.viewCount;
}

// Increment the view count for a blog post
export async function incrementViewCount(blog: string) {
  const viewCount = await prisma.count.findUnique({
    where: { blog },
  });

  if (!viewCount) {
    // If blog post does not exist in DB, create it with viewCount 1
    await prisma.count.create({
      data: {
        blog,
        viewCount: 1,
      },
    });
  } else {
    // If blog post exists, increment view count
    await prisma.count.update({
      where: { blog },
      data: {
        viewCount: viewCount.viewCount + 1,
      },
    });
  }
}
