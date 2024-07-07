export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between container mx-auto my-2">
        <h2 className="text-green-600">
          <span className="font-bold text-green-800">Memory</span>Lane
        </h2>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Blog Posts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
