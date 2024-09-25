type Meta = {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
type Frontmatter = Omit<Meta, "id">;
