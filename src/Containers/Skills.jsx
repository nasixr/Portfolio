import { useEffect, useState } from "react";
import SkillCard from "../Components/SkillCard";
import Img1 from "/public/Skills/Canva.png";
import Img2 from "/public/Skills/Figma.png";
import Img3 from "/public/Skills/Penetration.png";
import Img4 from "/public/Skills/PublicSpeeking.png";
import Img5 from "/public/Skills/Research.png";

const Images = [
  [Img1, "Canva"],
  [Img2, "Figma"],
  [Img3, "Web PT"],
  [Img4, "Public speeking "],
  [Img5, "(UX) Research"],
];

export default function Skills() {
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
          setIndex((prevIndex) =>
      prevIndex === Images.length - 3 ? 0 : prevIndex + 1
    );
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative">
      <h1 className="w-fit mx-auto font-playfair text-2xl sm:text-[4rem] sm:mb-8 font-semibold">
        Skills
      </h1>
      <p className="w-fit mx-auto font-playfair text-[#1C1E53] mb-8 sm:mb-28">
        Here I list my skills that I learn and that I am good at
      </p>

      <div className="w-[21.75rem] sm:w-[80rem] h-80 mx-auto shadow-Skills rounded-2xl p-2 flex overflow-hidden items-center">
        {Images.map((Img, i) => {
          return <SkillCard img={Img[0]} text={Img[1]} index={index} key={i} />;
        })}
      </div>
    </div>
  );
}
