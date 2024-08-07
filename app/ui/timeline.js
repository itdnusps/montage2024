"use client";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Link from "next/link";

export default function Timeline() {
  return (
    <div className="pt-[70px]">
      <section id="TimelineUrl" className="flex justify-center">
        <div className="flex flex-col items-left w-11/12 lg:w-9/12 max-w-[1200px] ">
          <h1 className="self-center text-5xl mt-4 font-eb-garamond font-bold text-titleGreen">Timeline and Workshops</h1>
          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-1">
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl font-bold">25 May</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                The Beginning of Montage 2024
              </h1>
              <Image
                src="/montage-opens.jpg"
                width={600}
                height={600}
                alt="Montage Opens"
              />
              <div className="mt-2 w-full">
                <p>
                  Montage officially launches! You can now submit your entries.
                </p>
                <br />
              </div>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" />
          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-1">
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl font-bold">1 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Portraiture & Lighting Workshop
              </h1>
              <Image
                src="https://i.imgur.com/d99Q2ow.png"
                width={600}
                height={600}
                alt="Portrait workshop Image"
              />
              <div className="mt-2">
                <p>
                  Dive into the world of professional portraiture at our
                  workshop! Learn how to master lighting setups and backdrop
                  selections to dramatically enhance your subject's features and
                  emotions.
                </p>
                <br />
                <p className="font-bold">Time</p>
                <p>09:00 - 12:00 (Session 1)</p>
                <p>15:00 - 18:00 (Session 2)</p>
                <br />
                <p className="font-bold">Venue</p>
                <p>Haste Studio (6 Ubi Road 1, #02-03, S408726)</p>
              </div>
 
              <button class="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Completed
              </button>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" />

          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
            pt-5 my-1">
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl font-bold">15 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Street Photography Workshop
              </h1>
              <Image
                src="/workshop2.png"
                width={600}
                height={600}
                alt="Portrait workshop Image"
              />
              <div className="mt-2">
                <p>
                  Hit the streets with confidence! This workshop will enhance
                  your skills in capturing candid moments and engaging quickly
                  with subjects, ensuring you never miss a shot.
                </p>
                <br />
                <p className="font-bold">Time</p>
                <p>09:00 - 12:00 (Session 1)</p>
                <p>15:00 - 18:00 (Session 2)</p>
                <br />
                <p className="font-bold">Reporting Venue</p>
                <p>NUS Med-Science Library</p>
                <p className="font-bold">Photowalk Venue</p>
                <p>City Hall/ Bayfront</p>
              </div>
  
              <button class="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Completed
              </button>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" id="landscape"  
          />

          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
            pt-5 my-1"
          >
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl font-bold">29 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Landscape Photography Workshop
              </h1>
              <Image
                src="/wksp3.png"
                width={600}
                height={600}
                alt="Portrait workshop Image"
              />
              <div className="mt-2">
                <p>
                  Capture the world as you see it! Learn to compose and create breathtaking travel
                  narratives, transforming natural and bustling environments into stunning photographic stories.
                </p>
                <br />
                <p className="font-bold">Time</p>
                <p>09:00 - 12:00 (Session 1)</p>
                <p>15:00 - 18:00 (Session 2)</p>
                <br />
                <p className="font-bold">Reporting Venue</p>
                <p>NUS Law Campus</p>
                <p className="font-bold">Practical Venue</p>
                <p>Botanic Garden</p>
              </div>
              <button class="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Completed
              </button>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" />

          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
            pt-5 my-1"
          >
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl font-bold">20 July</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Submission Day
              </h1>
              <Image
                src="/deadend.png"
                width={600}
                height={600}
                alt="deadline Image"
              />
              <div className="mt-2">
                <p>
                  NUSPS Montage 2024's submission deadline has been extened to the 20th of July!
                </p>
              </div>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" />


          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-3">
            <div className="col-span-1 flex justify-center items-center mx-10">
              <h1 className="text-4xl font-bold">TBA</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Prize Presentation Day
              </h1>
              <div className="mt-2">
                <p>
                  Join us as we celebrate talent and creativity at our Prize Presentation Day. Exciting awards and recognition await the best entries of the Montage Competition!
                </p>
                <br />
                <p>Stay tuned for more details.</p>
              </div>
            </div>
          </div>

          <hr className="w-full border-2 border-titleGreen m-1 my-3" />

          <div className="flex flex-col items-center justify-center w-full">
            <Link
              href="/#Timeline"
            >
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-5">
                Back to main site
              </button>
            </Link>
          </div>


        </div>
      </section>
    </div>
  );
}
