import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import axios from "axios";
import CustomImage from "@/components/customimage";
type fileTree = {
  tree: [
    {
      path: string;
    }
  ];
};

export async function getPostByName(file: any): Promise<BlogPost | undefined> {
  try {
    const res = await axios.get(
      `https://raw.githubusercontent.com/vineetagarwal-code/remote-blogpost/main/${file}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (res.status === 404) return undefined;

    const rawMDX = await res.data;
    if (rawMDX === "404: Not Found") return undefined;
    const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      tags: string[];
      description: string;
    }>({
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
    const blogPost: BlogPost = { meta: { id, ...frontmatter }, content };
    return blogPost;
  } catch (e) {
    return undefined;
  }
}
export async function getPostMeta(): Promise<Meta[] | undefined> {
  const res = await axios.get(
    "https://api.github.com/repos/vineetagarwal-code/remote-blogpost/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
        cache: "no-cache",
      },
    }
  );

  const repoFileTree: fileTree = await res.data;
  //@typescript-eslint/no-explicit-any
  const fileArray = repoFileTree.tree.filter((file: any) =>
    file.path.includes(".mdx")
  );
  const posts: Meta[] = [];
  for (const file of fileArray) {
    const post = await getPostByName(file.path);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }
  return posts;
}
