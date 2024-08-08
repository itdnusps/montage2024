"use client";

import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Link from "next/link";

export default function Winners() {
  return (
    <div className="pt-[70px]">
      <section id="TimelineUrl" className="flex justify-center">
        <div className="flex flex-col items-left w-11/12 lg:w-9/12 max-w-[1200px]">
          <h1 className="self-center text-5xl mt-4 font-eb-garamond font-bold text-titleGreen">Winners</h1>

          <div id="first-place-winner" className="">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Richmond Tang | First Place</p>
              </div>
              <Image
                src="/firstplace.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  Richmond Tang captures a young bus driver in his early thirties, whose face is a testament to exhaustion and determination. As the bus idles at a red light, the driver closes his eyes, finding solace in a fleeting moment of respite. This brief pause is not merely a break in the journey but a quiet rebellion against the relentless pace of modern life. Through this image, we witness more than fatigue; we see the essence of resilience and the unsung strength of those who keep our cities moving, a powerful reminder of the dedication of youth working behind the scenes, often unnoticed but never unappreciated.
                </p>
                <br/>
                <p>
                  "The photographer captured the perfect moment. With the lights, shadows, and reflections creating a unique atmosphere around the driver's expression. From the first moment that you look at this work, it starts talking to you and transmitting emotions," says Carlos Monforte, Judge.                </p>
                <br />
              </div>
            </div>
          </div>

          <div id="second-place-winner">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Chua Poh Yang | Second Place</p>
              </div>
              <Image
                src="/2nd.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  Chua Poh Yang’s photograph depicts Tampines Meridian Junior College Aquila’s J2 Orientation Group Leaders (OGLs) in red, stacking hands with their Aquila Orientation Group Members (OGMs) in blue, with a teacher waving the Aquila flag in the background. This moment captures the conclusion of Aquila’s finale performance, symbolizing the culmination of a week where the OGLs helped the OGMs acclimate to their new environment, fostering new bonds and unforgettable memories. This image resonates deeply with the OGLs, many of whom have set it as their profile picture and wallpaper, embodying the essence of their pride and spirit in TMJC.                </p>
                <br/>
                <p>
                  "Composition, lighting and emotions are well captured in this photo. A powerful moment seen here with the winner and his team wielding their flag, beautifully photographed in the right moment, and a creative use of light and shadow to subtly distinguish between the winners and the runner up," says Jasper Yu, Judge.
                </p>
              </div>
            </div>
          </div>

          <div id="third-place-winner">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Jun Leong | Third Place</p>
              </div>
              <Image
                src="/3rd.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  {/* Chua Poh Yang’s photograph depicts Tampines Meridian Junior College Aquila’s J2 Orientation Group Leaders (OGLs) in red, stacking hands with their Aquila Orientation Group Members (OGMs) in blue, with a teacher waving the Aquila flag in the background. This moment captures the conclusion of Aquila’s finale performance, symbolizing the culmination of a week where the OGLs helped the OGMs acclimate to their new environment, fostering new bonds and unforgettable memories. This image resonates deeply with the OGLs, many of whom have set it as their profile picture and wallpaper, embodying the essence of their pride and spirit in TMJC.                 */}
                  </p>
                <br/>
                <p>
                  "There lies a moment of quiet yet attentive capture amid the chaotic juxtaposition architecturally frenzy," says Francis Lee, Judge.                
                </p>
              </div>
            </div>
          </div>

          <div id="fourth-place-winner">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Ren Junhao | Honourable Mention</p>
              </div>
              <Image
                src="/4th.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  Ren Junhao’s photograph captures the essence of exploration and the transformative power of travel. Growing up in China, Junhao was taught to focus solely on studying, leading to a feeling of being lost for many years until completing his undergraduate degree. This photograph reflects his belief that young people should travel, see the world, learn about different cultures, and interact with diverse individuals. Through embracing a world beyond the classroom, they can better understand the life they want to lead and the person they aspire to become.                <br/>
                </p>
                <br/>
                <p>
                  "In the warm light bathing the forestry, the adventurer, a strong foreground element leads the eye into the distant mountains," says Francis Lee, Judge.                
                </p>
              </div>
            </div>
          </div>


          <div id="5th-place-winner">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Low Zhi Xuan | Honourable Mention</p>
              </div>
              <Image
                src="/5th.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  Low Zhi Xuan’s photograph captures the delicate equilibrium between the relentless advance of urban development and the enduring presence of nature. By merging the stark contrast of skyscrapers with the soft outlines of natural landscapes, Zhi Xuan illustrates the urgent need for today's youth to embrace the challenge of fostering sustainable growth. This image, submitted to the 'Youth in Focus' exhibition, encapsulates a critical moment: a call to action for young people to innovate and lead in finding solutions that harmonize development with environmental stewardship. It serves as both a warning and an inspiration, urging viewers to recognize their power in shaping the future of our world.                <br/>
                </p>
                <br/>
                <p>
                  "A creative use of in-camera’s multi exposure to create this beautiful montage/portrait. The layers don’t only look aesthetically pleasing but also show the inner emotions of the photographer," says Jasper Yu, Judge                </p>
              </div>
            </div>
          </div>

          <div id="6th-place-winner">
            <div className="col-span-4 flex flex-col items-center w-full self-center">
              <div className="mt-2 sm:w-9/12 w-11/12  mb-2">
                <p className="font-bold">Nathan Cheong | Honourable Mention</p>
              </div>
              <Image
                src="/6th.jpg"
                height={600}
                width={600}
                alt="First Place Image"
              />
              <div className="mt-2 sm:w-9/12 w-11/12">
                <p>
                  Nathan Cheong's photograph is a stunning capture from his East Java trip on the summit of Mount Ijen. This image ties together the importance of friendship, exploration, and beauty. In a country like Singapore, filled with light pollution, this photograph unveils the beautiful canvas of stars hidden within Singapore skies, serving as a tribute to the awe-inspiring beauty that often goes unnoticed.                </p>
                <br/>
                <p>
                  "A beautifully captured scene with a great exposure of the Milky-Way. It also tells a story about the youngsters' joy of freedom and friendship," says Carlos Monforte, Judge.    
                </p>          
              </div>
            </div>
          </div>




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
