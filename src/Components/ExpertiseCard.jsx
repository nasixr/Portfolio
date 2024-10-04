export default function ExpertiseCard({ img, Title, Description }) {
  return (
    <div className={"p-8 bg-[#F5FCFF] w-[26rem] h-[31rem] font-roboto"}>
      <img src={img} alt="Branding & Logo" className="w-20" />
      <h1 className="mb-[1.33rem] text-[2rem] font-bold">{Title}</h1>
      <p className={"text-[1.33rem]"}>{Description}</p>
    </div>
  );
}
