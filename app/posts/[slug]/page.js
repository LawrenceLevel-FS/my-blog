"use client";
import blogPosts from "../../cms/blogCMS.json";

export default function RenderPosts(props) {
  const slug = props.params.slug;
  console.log(blogPosts[slug]);
  return (
    <section className="mt-20 container mx-auto">
      <div id="headline" className="mb-4">
        <h1 className="text-4xl">{blogPosts[slug].title} </h1>
        <div className="text-gray-500 text-sm mt-1 flex gap-4">
          <p>By: {blogPosts[slug].author}</p>
          <p>Posted: {blogPosts[slug].date}</p>
        </div>
      </div>
      <p>{blogPosts[slug].content}</p>
      <div>
        <ul className="flex mt-2 text-xs text-gray-500">
          Tags:[
          {blogPosts[slug].tags.map((tag) => (
            <li>{tag} ,</li>
          ))}
          ]
        </ul>
      </div>
    </section>
  );
}
