'use client'

import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-4xl font-eb-garamond font-bold text-titleGreen">
        Sponsors
      </h1>
      <div className="flex flex-row items-center justify-center w-max-[1200px] flex-wrap">
        <Image
          src="/s1.png"
          alt="Canon"
          width={200}
          height={200}
          className="mb-5 lg:mb-0 mx-10"
        />
        <Image
          src="/s2.png"
          alt="Cathay Photo"
          width={200}
          height={200}
          className="mb-5 lg:mb-0 mx-10"
        />
        <Image
          src="/s3.png"
          alt="NYC"
          width={200}
          height={200}
          className="mb-5 lg:mb-0 mx-10"
        />
        <Image
          src="/OSA.png"
          alt="NYC"
          width={200}
          height={200}
          className="mb-5 lg:mb-0 mx-10"
        />
        <Image
          src="/s5.png"
          alt="NYC"
          width={200}
          height={200}
          className="mb-5 lg:mb-0 mx-10"
        />
      </div>

    </div>
  );}
