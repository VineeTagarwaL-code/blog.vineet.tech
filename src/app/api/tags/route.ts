"use server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(`http://localhost:3000/api/blogs`);
    const blogs = res.data.blogs;

    const allTags = blogs.map((blog: any) => blog.tags).flat();

    const tagCountMap: { [key: string]: number } = {};

    allTags.forEach((tag: string) => {
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

    return new Response(JSON.stringify({ tags: tagsWithCounts }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
    return new Response("Error fetching posts", { status: 500 });
  }
}
