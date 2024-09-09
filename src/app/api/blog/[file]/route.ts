// File: /app/api/post/[file]/route.js
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import axios from "axios";
import CustomImage from "@/components/customimage";

export async function GET(
  _req: Request,
  { params }: { params: { file: string } }
) {
  const { file } = params;
  try {
    const res = await axios.get(
      `https://raw.githubusercontent.com/vineetagarwal-code/remote-blogpost/main/${file}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (res.status === 404 || res.data === "404: Not Found") {
      return new Response("Post not found", { status: 404 });
    }

    const rawMDX = res.data;
    const { frontmatter, content } = await compileMDX({
      source: rawMDX,
      components: {
        CustomImage,
      },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
          ],
        },
      },
    });

    const id = file.replace(".mdx", "");
    const blogPost = { meta: { id, ...frontmatter }, content };
    return new Response(JSON.stringify({ blogPost }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response("Error fetching post", { status: 500 });
  }
}
