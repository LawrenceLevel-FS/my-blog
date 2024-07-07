import blogPosts from "../../cms/blogCMS.json";
import RenderPosts from "../../components/RenderPosts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function PostPage({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return <RenderPosts post={post} />;
}
