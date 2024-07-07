import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between container mx-auto my-2">
        <Link href="/">
          <h2 className="text-green-600">
            <span className="font-bold text-green-800">Memory</span>Lane
          </h2>
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="/posts">Blog Posts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
