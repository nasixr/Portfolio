import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className={
        "flex bg-[#1E1E1E] py-8 px-4 sm:px-24  text-white justify-between items-center h-[10.6875rem] sm:h-[20.75rem]"
      }
    >
      <img src="/public/WhiteLogo.png" alt="" className={"h-8 sm:h-14"} />

      <div className="flex flex-col justify-center sm:hidden ">
        <a href={"/"}>Home</a>
        <a href={"/"}>About me</a>
        <a href={"/"}>Contact</a>
      </div>

      <div className="flex flex-col justify-center sm:hidden">
        <a href={"/"}>Portfolio</a>
        <a href={"/"}>Resume</a>
      </div>
      <div className="hidden sm:flex w-full justify-around">
        <a href={"/"}>Home</a>
        <a href={"/"}>About me</a>
        <a href={"/"}>Contact</a>
        <a href={"/"}>Portfolio</a>
        <a href={"/"}>Resume</a>
      </div>
      <div className={"flex justify-between w-1/5"}>
        <FaTwitter color="white"  className={"mr-3 h-[24px] sm:h-[3.75rem] w-[24px] sm:w-[2.75rem]"} />
        <FaLinkedin color="white"  className={"mr-3 h-[24px] sm:h-[3.75rem] w-[24px] sm:w-[2.75rem]"} />
        <FaInstagram color="white"  className={"h-[24px] sm:h-[3.75rem] w-[24px] sm:w-[2.75rem]"}/>
      </div>
    </div>
  );
}
