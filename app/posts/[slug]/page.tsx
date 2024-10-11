import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/utils/getPostMetadata";
import ReactMarkdown from "react-markdown"; // Add this line
import remarkGfm from "remark-gfm"; // Add this line
import rehypeRaw from "rehype-raw"; // Add this line
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div  className="mx-auto  max-w-2xl px-6">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="bg-slate-800 text-white rounded-md p-10 gap-2 flex flex-col space-y-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown> {/* Update this line */}
      </article>
    </div>
  );
};

export default PostPage;
