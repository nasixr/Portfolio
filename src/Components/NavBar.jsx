import { IoIosMenu } from "react-icons/io";

export default function NavBar({ visibility, setVisibility }) {
  return (
<>
<div className={"hidden sm:flex justify-between items-center px-12"}>
    <img src="public/Logo.png" alt="" className={"w-[135px]"} />
    <div className="flex gap-6 text-[#373737] font-medium items-center">
    <a href={"#home"}>Home</a>
    <a href={"#aboutme"}>About Me</a>
    <a href={"#contact"}>Contact</a>
    <a href={"/"} className="rounded-xl text-white bg-[#282B2E] px-4 py-2">Resume</a>
    </div>
  </div>

    <div className={"sm:hidden mt-11 mx-auto w-[90%] bg-[#4D80FF0D] py-5 flex justify-between items-center"}>
      <img src="public/Logo.png" alt="Logo" className={"h-9 pl-6"} />
      <IoIosMenu className="mr-3 cursor-pointer" size={24} onClick={() => setVisibility(!visibility)} />
    </div>
</>
  
  );
}
