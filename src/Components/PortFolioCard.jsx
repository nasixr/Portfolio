import { FiArrowUpRight } from "react-icons/fi";

export default function PortFolioCard({ img, Title, Description }) {
  return (
    <div className={"font-roboto shadow-lg w-96"} >
        <img src={img} alt="Mubeen" />
        <div className={"p-6"}>
        <h1 className={"text-2xl text-[#282938] font-bold"}>{Title}</h1>
        <p className=" text-[#1C1E53] text-[1rem] mb-6">{Description}</p>
        <a className="border-b border-[#5E3BEE]" href="">View In Dribbble <FiArrowUpRight className=" inline-block"/>
        </a>
        </div>
    </div>
  )
}
