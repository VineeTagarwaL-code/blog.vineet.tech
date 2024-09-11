import axios from "axios";

export async function GET(req: Request) {
  const tag = req.url?.split("/")[req.url.split("/").length - 1];
  if (!tag || typeof tag !== "string") {
    return new Response(JSON.stringify({ blogs: "tags are required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const filteredBlogs = await getBlogsByTag(tag);
    return new Response(JSON.stringify({ blogs: filteredBlogs }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error fetching posts", { status: 500 });
  }
}

const getBlogsByTag = async (tag: string) => {
  const res = await axios.get("https://blog.vineet.tech/api/blogs");
  const blogs = res.data.blogs;
  return blogs.filter((blog: any) => blog.tags.includes(tag));
};
