"use client";

import './styles.css';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Winners() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const top3Winners = [
    {
      name: "Richmond Tang",
      title: "First Place",
      image: "/firstplace.jpg",
      description: "Richmond Tang captures a young bus driver in his early thirties, whose face is a testament to exhaustion and determination. As the bus idles at a red light, the driver closes his eyes, finding solace in a fleeting moment of respite. This brief pause is not merely a break in the journey but a quiet rebellion against the relentless pace of modern life. Through this image, we witness more than fatigue; we see the essence of resilience and the unsung strength of those who keep our cities moving, a powerful reminder of the dedication of youth working behind the scenes, often unnoticed but never unappreciated.",
      judge: "Carlos Monforte",
      judgeComment: "The photographer captured the perfect moment. With the lights, shadows, and reflections creating a unique atmosphere around the driver's expression. From the first moment that you look at this work, it starts talking to you and transmitting emotions.",
    },
    {
      name: "Chua Poh Yang",
      title: "Second Place",
      image: "/2nd.jpg",
      description: "Chua Poh Yang’s photograph depicts Tampines Meridian Junior College Aquila’s J2 Orientation Group Leaders (OGLs) in red, stacking hands with their Aquila Orientation Group Members (OGMs) in blue, with a teacher waving the Aquila flag in the background. This moment captures the conclusion of Aquila’s finale performance, symbolizing the culmination of a week where the OGLs helped the OGMs acclimate to their new environment, fostering new bonds and unforgettable memories. This image resonates deeply with the OGLs, many of whom have set it as their profile picture and wallpaper, embodying the essence of their pride and spirit in TMJC.",
      judge: "Jasper Yu",
      judgeComment: "Composition, lighting and emotions are well captured in this photo. A powerful moment seen here with the winner and his team wielding their flag, beautifully photographed in the right moment, and a creative use of light and shadow to subtly distinguish between the winners and the runner up",
    },
    {
      name: "Jun Leong",
      title: "Third Place",
      image: "/3rd.jpg",
      description: "Jun Leong’s photograph captures the essence of the typical youth in Singapore, deeply focused on shaping their futures. The image portrays a young person studying diligently while an adult, a level below, walks briskly along a road-like path. This contrast symbolises the journey of life, where the youth set their focus on their chosen path, facing unknowns and potentially lonely moments. Through this image, Jun Leong hopes to inspire young people to look forward with optimism, believing in the light at the end of the tunnel and understanding that the path they walk is a journey well worth endeavoring.",
      judge: "Francis Lee",
      judgeComment: "There lies a moment of quiet yet attentive capture amid the chaotic juxtaposition architecturally frenzy.",
    },
  ];

  const honourableMentions = [
    {
      name: "Ren Junhao",
      title: "Honourable Mention",
      image: "/4th.jpg",
      description: "Ren Junhao’s photograph captures the essence of exploration and the transformative power of travel. Growing up in China, Junhao was taught to focus solely on studying, leading to a feeling of being lost for many years until completing his undergraduate degree. This photograph reflects his belief that young people should travel, see the world, learn about different cultures, and interact with diverse individuals. Through embracing a world beyond the classroom, they can better understand the life they want to lead and the person they aspire to become.",
      judge: "Francis Lee",
      judgeComment: "In the warm light bathing the forestry, the adventurer, a strong foreground element leads the eye into the distant mountains.",
    },
    {
      name: "Low Zhi Xuan",
      title: "Honourable Mention",
      image: "/5th.jpg",
      description: "Low Zhi Xuan’s photograph captures the delicate equilibrium between the relentless advance of urban development and the enduring presence of nature. By merging the stark contrast of skyscrapers with the soft outlines of natural landscapes, Zhi Xuan illustrates the urgent need for today's youth to embrace the challenge of fostering sustainable growth. This image, submitted to the 'Youth in Focus' exhibition, encapsulates a critical moment: a call to action for young people to innovate and lead in finding solutions that harmonize development with environmental stewardship. It serves as both a warning and an inspiration, urging viewers to recognize their power in shaping the future of our world.",
      judge: "Jasper Yu",
      judgeComment: "A creative use of in-camera’s multi exposure to create this beautiful montage/portrait. The layers don’t only look aesthetically pleasing but also show the inner emotions of the photographer."
    },
    {
      name: "Nathan Cheong",
      title: "Honourable Mention",
      image: "/6th.jpg",
      description: "Nathan Cheong's photograph is a stunning capture from his East Java trip on the summit of Mount Ijen. This image ties together the importance of friendship, exploration, and beauty. In a country like Singapore, filled with light pollution, this photograph unveils the beautiful canvas of stars hidden within Singapore skies, serving as a tribute to the awe-inspiring beauty that often goes unnoticed.",
      judge: "Carlos Monforte",
      judgeComment: "A beautifully captured scene with a great exposure of the Milky-Way. It also tells a story about the youngsters' joy of freedom and friendship.",
    },
  ];

  return (
    <div className="pt-[70px]">
      <section id="TimelineUrl" className="flex justify-center">
        <div className="flex flex-col items-left w-11/12 lg:w-9/12 max-w-[1200px]">
          <h1 className="self-center text-5xl mt-4 font-eb-garamond font-bold text-titleGreen">Winners</h1>

          {/* Render Top 3 Winners */}
          {top3Winners.map((winner, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-center lg:items-start w-full self-center mt-8">
              <div className="mb-10">
                <Image
                  src={winner.image}
                  height={400}
                  width={400}
                  alt={`${winner.name} Image`}
                  className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
                  onClick={() => handleImageClick(winner.image)}
                />
              </div>
              <div className="lg:w-3/4 mt-4 lg:mt-0 lg:ml-10 align-self-center">
                <p className="font-bold text-2xl mb-5">{`${winner.name} | ${winner.title}`}</p>
                <p className="text-justify">{winner.description}</p>
                {winner.judgeComment && (
                  <>
                    <br/>
                    <p className="italic text-justify"> {`"${winner.judgeComment}"`} </p>
                    <p className="italic"> {`~ ${winner.judge}`} </p>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Render Honourable Mentions */}
          <h1 className="self-center text-5xl mt-4 font-eb-garamond font-bold text-titleGreen">Honourable Mentions</h1>
          <div className="flex flex-wrap justify-between items-start w-full self-center mt-5">
            {honourableMentions.map((winner, index) => (
              <div key={index} className="w-full md:w-1/3 p-5">
                <div className="flex flex-col items-center">
                  <Image
                    src={winner.image}
                    height={500}
                    width={500}
                    alt={`${winner.name} Image`}
                    className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 pb-2"
                    onClick={() => handleImageClick(winner.image)}
                  />
                  <div className="mt-3">
                    <p className="font-bold text-2xl mb-5 text-center">{`${winner.name}`}</p>
                    <p className='text-justify'>{winner.description}</p>
                    {winner.judgeComment && (
                        <>
                            <br />
                            <p className="italic"> {`"${winner.judgeComment}"`} </p>
                            <p className="italic"> {`~ ${winner.judge}`} </p>
                        </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Back to Main Site Button */}
          <div className="flex flex-col items-center justify-center w-full mt-8">
            <Link href="/#Timeline">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-5">
                Back to main site
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50" 
        onClick={() => setSelectedImage(null)}
        >
            <div className="relative flex justify-center items-center">
                <img
                src={selectedImage}
                alt="Expanded Image"
                className="max-w-[90vw] max-h-[90vh] object-contain"
                />
            </div>
        </div>
    )}
    </div>
  );
}
