"use client";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Link from "next/link";

export default function TimelineOverview() {
  return (
    <div>
      <section id="Timeline" className="flex flex-col items-center">
        <h1 className="text-4xl font-eb-garamond font-bold text-titleGreen">
          Timeline and Workshops
        </h1> 
        
        <p className="max-w-[1100px] text-xl mt-7 text-center px-5">Montage 2024 also features a series of portraiture, street, and landscape photography workshops. Hear from industry experts on how you can elevate your photographic craft and tell visually impactful stories in this competition!</p>
        <Image 
          src="/maintimeline.png" 
          width={700} 
          height={700} 
          alt="Timeline Overview" 
          className="m-5"
        />
        <Link
          href="/timeline"
        >
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-5">
            Learn More About the Timeline!
          </button>
        </Link>
      </section>
    </div>
  );
}
