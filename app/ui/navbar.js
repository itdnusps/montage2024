'use client'

import Image from "next/image";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';




export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const currentPath =  usePathname();



  return (
    <nav className="bg-yellow-800 p-1 fixed w-full z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full flex justify-between items-center px-5">
          <Link
            href="/"
          >
            <Image
              width={50}
              height={50}
              src="https://i.imgur.com/qgUvwa5.png"
              alt="NUSPS Logo"
              className="pointer-cursor"
            />
          </Link>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 relative top-[5px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <ul className="lg:flex lg:space-x-4">
            <li><Link href="/#Theme" className="block lg:inline-block text-white p-2 text-center">Theme</Link></li>
            <li><Link href="/#Judges" className="block lg:inline-block text-white p-2 text-center">Judges</Link></li>
            <li><Link href="/#Timeline" className="block lg:inline-block text-white p-2 text-center">Timeline</Link></li>
            <li><Link href="/#FAQ" className="block lg:inline-block text-white p-2 text-center">FAQ</Link></li>
          </ul>
          <div className="w-full flex item-center justify-center">
            <Link
              href="/winners"
            >
              {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold ml-3 px-5 py-1 rounded self-center hidden lg:block">
                Winners
              </button> */}
            </Link>
          </div>

          

        </div>
      </div>
            
            

      {/* {
      currentPath !== '/winners' && (
        <Link
          href="/winners"
        >
          <button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full fixed bottom-5 right-5 block lg:hidden">          
            Winners
          </button>
        </Link>
      )} */}

    </nav>
  );
}
