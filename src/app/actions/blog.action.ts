"use server";
import { withServerActionAsyncCatcher } from "@/lib/async-wrapper";
import { ErrorHandler } from "@/lib/error";
import axios from "axios";
import CustomImage from "@/components/customimage";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import { SuccessResponse } from "@/lib/success";

const getBlogs = withServerActionAsyncCatcher(async () => {
  const response = await axios.get(
    "https://api.github.com/repos/vineetagarwal-code/remote-blogpost/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const repoFileTree = response.data;
  const fileArray = repoFileTree.tree.filter((file: any) =>
    file.path.includes(".mdx")
  );

  const meta: Meta[] = [];

  for (const file of fileArray) {
    const postResponse = await getBlogByName(file.path);
    if (postResponse.code === 200) {
      const blogMeta: Meta = postResponse.additional.blogPost.meta;
      meta.push(blogMeta);
    }
  }

  const message = "Blogs fetched successfully";
  const additional = { meta: meta };
  return new SuccessResponse(message, 200, additional).serialize();
});

const getBlogByName = withServerActionAsyncCatcher(
  async (file: string = "") => {
    const response = await axios.get(
      `https://raw.githubusercontent.com/vineetagarwal-code/remote-blogpost/main/${file}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (response.status == 404 || response.data === "404: Not Found") {
      throw new ErrorHandler("Post not found", "NOT_FOUND");
    }

    const rawMDX = response.data;
    const { frontmatter, content } = await compileMDX<Frontmatter>({
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
    const blogPost: {
      meta: Meta;
      content: React.ReactNode;
    } = {
      meta: {
        id,
        ...frontmatter,
      },
      content,
    };
    const message = "Blog post fetched successfully";
    const additional = { blogPost };
    return new SuccessResponse(message, 200, additional).serialize();
  }
);
export { getBlogs, getBlogByName };
