"use server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(
      "https://api.github.com/repos/vineetagarwal-code/remote-blogpost/git/trees/main?recursive=1",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    const repoFileTree = res.data;
    const fileArray = repoFileTree.tree.filter((file: any) =>
      file.path.includes(".mdx")
    );

    const posts = [];

    for (const file of fileArray) {
      const postResponse = await fetch(
        `${process.env.API_BASE_URL}api/blog/${file.path}`
      );
      if (postResponse.status === 200) {
        const post = await postResponse.json();
        posts.push(post.blogPost.meta);
      }
    }
    return new Response(JSON.stringify({ blogs: posts }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response("Error fetching posts", { status: 500 });
  }
}
