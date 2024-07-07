"use client";
import blogPosts from "../cms/blogCMS.json";
import Link from "next/link";

export default function Posts() {
  return (
    <section className="container mx-auto mt-14">
      <h4 className="text underline underline-offset-4 font-medium mb-4">
        All Posts
      </h4>
      <ul>
        {blogPosts.map((post, index) => {
          return (
            <div>
              <Link href={`/posts/${index}`}>{post.title}</Link>{" "}
            </div>
          );
        })}{" "}
      </ul>
    </section>
  );
}
