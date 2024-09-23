"use server";
import { withServerActionAsyncCatcher } from "@/lib/async-wrapper";
import { getBlogs } from "./blog.action";
import { SuccessResponse } from "@/lib/success";
import { ErrorHandler } from "@/lib/error";

export const getTags = withServerActionAsyncCatcher(async () => {
  console.log("getTags");
  const response = await getBlogs();
  const blogs = response.additional.meta;
  const alltags = blogs.map((blog: any) => blog.tags).flat();
  const tagCountMap: { [key: string]: number } = {};

  alltags.forEach((tag: string) => {
    if (tagCountMap[tag]) {
      tagCountMap[tag]++;
    } else {
      tagCountMap[tag] = 1;
    }
  });

  const tagsWithCounts = Object.entries(tagCountMap).map(([tag, count]) => ({
    tag,
    count,
  }));
  const message = "tags fetched successfully";
  const tags = { tags: tagsWithCounts };
  return new SuccessResponse(message, 200, tags).serialize();
});

export const getBlogByTag = withServerActionAsyncCatcher(
  async (tag: string = "") => {
    if (tag == "") {
      throw new ErrorHandler("tags are required", "BAD_REQUEST");
    }
    const response = await getBlogs();
    const blogs = response.additional.meta;
    const filteredBlogs = blogs.filter((blog: any) => blog.tags.includes(tag));
    const message = "blogs fetched successfully";
    const blogsResponse = { blogs: filteredBlogs };
    return new SuccessResponse(message, 200, blogsResponse).serialize();
  }
);
