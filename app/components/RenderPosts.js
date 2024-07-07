export default function RenderPosts({ post }) {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="mt-20 container mx-auto">
      <div id="headline" className="mb-4">
        <h1 className="text-4xl text-green-500">{post.title}</h1>
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
        <p className="mt-14">comments: </p>
        <ul className="max-w-fit">
          {post.comments.map((comment, index) => (
            <li className="bg-green-50 mb-2 p-2 rounded-md" key={index}>
              <div className="flex items-center ">
                <div className="bg-green-500 w-10 h-10 rounded-full text-center flex items-center justify-center mr-4 font-bold text-green-100">
                  <p>{comment.author[0]}</p>
                </div>
                <div>
                  <p className="font-bold text-green-500">{comment.author}</p>
                  <p className="text-xs text-green-500">
                    posted: {comment.date}
                  </p>
                </div>
              </div>
              <p className="ml-14 mt-2 text-sm text-green-700">
                {comment.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
