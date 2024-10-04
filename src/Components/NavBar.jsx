import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={"flex justify-between items-center px-12"}>
      <img src="public/Logo.png" alt="" className={"w-[135px]"} />
      <div className="flex gap-6 text-[#373737] font-medium items-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Content</Link>
      <Link to={"/"} className="rounded-xl text-white bg-[#282B2E] px-4 py-2">Resume</Link>
      </div>
    </div>
  );
}
