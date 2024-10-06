export default function ExpertiseCard({ img, Title, Description }) {
  return (
    <div className={"p-8 bg-[#F5FCFF] sm:w-[26rem] w-[21rem] sm:h-[31rem] h-[14.6rem] font-roboto"}>
      <img src={img} alt="Branding & Logo" className="sm:w-20 w-12" />
      <h1 className="mb-[1.33rem] text-base sm:text-[2rem] font-shantell sm:font-roboto font-bold">{Title}</h1>
      <p className={"text-xs sm:text-2xl  font-shantell sm:font-roboto"}>{Description}</p>
    </div>
  );
}
