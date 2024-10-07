export default function SkillCard({ img,text, index }) {
  return (
    <div
      className="transition-all duration-300 w-[10rem] sm:w-1/3 flex-grow-0 flex-shrink-0"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <p className=" text-[#020873] text-xs sm:text-[2rem] font-semibold">{text}</p>
      <img
        src={img}
        alt=""
        className={"h-[6.25rem] sm:h-[10rem] mt-14 object-cover select-none"}
      />
    </div>
  );
}
