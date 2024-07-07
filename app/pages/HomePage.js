import Image from "next/image";
import heroImg from "../images/filip-mishevski-c5QdMcuFlgY-unsplash.jpg";

export default function HomePage() {
  return (
    <div className="text-center mt-14 container mx-auto">
      <div id="hero-image">
        <h1 className="text-4xl mb-4">Welcome to Memory Lane Chronicles</h1>
        <Image src={heroImg} className="w-screen h-96 object-cover" />
      </div>
      <p className="mt-4">
        Journey through our curated collection of stories, insights, and
        adventures. At Memory Lane Chronicles, we believe in the power of words
        to transport us, inspire us, and connect us to the world around us.
        Whether you're here to explore the latest in technology, embark on
        travel adventures, enhance your well-being, or dive into the intricacies
        of coding, we've got something for everyone.
      </p>
    </div>
  );
}
