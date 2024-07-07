"use client";

export default function RenderPosts({ post }) {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="mt-20 container mx-auto">
      <div id="headline" className="mb-4">
        <h1 className="text-4xl">{post.title}</h1>
        <div className="text-gray-500 text-sm mt-1 flex gap-4">
          <p>By: {post.author}</p>
          <p>Posted: {post.date}</p>
        </div>
      </div>
      <p className="w-3/4">{post.content}</p>
      <div>
        <ul className="flex mt-2 text-xs text-gray-500">
          <span className="font-bold">Tags: </span> [
          {post.tags.map((tag, index) => (
            <li key={index}>{tag}, </li>
          ))}
          ]
        </ul>
      </div>
      <div>
        <p>comments: </p>
        <ul className="mt-14">
          {post.comments.map((comment, index) => (
            <li key={index}>
              <div className="flex items-center mt-4">
                <p className="bg-green-500 w-10 h-10 rounded-full text-center">
                  {comment.author[0]}
                </p>
                <p>{comment.author}</p>
              </div>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
