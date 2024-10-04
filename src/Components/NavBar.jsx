
export default function NavBar() {
  return (
    <div className={"flex justify-between items-center px-12"}>
      <img src="public/Logo.png" alt="" className={"w-[135px]"} />
      <div className="flex gap-6 text-[#373737] font-medium items-center">
      <a href={"/"}>Home</a>
      <a href={"/"}>About</a>
      <a href={"/"}>Content</a>
      <a href={"/"} className="rounded-xl text-white bg-[#282B2E] px-4 py-2">Resume</a>
      </div>
    </div>
  );
}
