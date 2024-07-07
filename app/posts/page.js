import blogPosts from "../cms/blogCMS.json";
import Link from "next/link";
import { uuid } from "uuidv4";

export default function Posts() {
  return (
    <section className="container mx-auto mt-14">
      <h4 className="text underline underline-offset-4 font-medium mb-4">
        All Posts
      </h4>
      <ul>
        {blogPosts.map((post, index) => {
          return (
            <li key={uuid()} className="mb-4">
              <Link className="text-xl" href={`/posts/${index}`}>
                {post.title}
              </Link>
              <div className="text-xs flex gap-4 text-gray-500">
                <p>By: {post.author}</p>
                <p>date: {post.date}</p>
              </div>
              <p className="text-xs mt-1 text-gray-500">
                {post.content.substring(0, 70) + "...."}
              </p>
              <a href={`/posts/${index}`}>
                <button className="mt-2 text-sm text-green-900 bg-green-400 p-1 rounded border-green-500 border-4">
                  Read More
                </button>
              </a>
            </li>
          );
        })}{" "}
      </ul>
    </section>
  );
}
