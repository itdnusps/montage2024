import Image from "next/image";
import Link from "next/link";


export default function Landing() {
  return (
    <div className="relative z-0">
      <Image 
        src="https://i.imgur.com/MevrnAQ.png"
        layout="responsive"
        width={0}
        height={0}
        className="opacity-100 w-full h-auto brightness-50 z-0"
        alt="First Place Prize Image"
      />
      <Image 
        src="https://i.imgur.com/CPAhDuf.png" // Replace with your overlay image path
        layout="intrinsic"
        width={1000}
        height={100}
        alt="Overlay Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      />

      
      <Link
        href="/winners"
      >
        <button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full fixed bottom-5 right-5 block lg:hidden">          
          Winners
        </button>
      </Link>

    </div>
  );
}
