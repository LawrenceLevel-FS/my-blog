import blogContent from "../../blogCMS.json";

export default function Posts() {
  return (
    <section>
      <h1>all posts</h1>
      {blogContent.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </section>
  );
}
