export default function Home() {
  return (
      <div id="home" className={"px-[20%] w-full mx-auto bg-[#4591FE0D] sm:my-16 my-12"}>

      <h1 className="sm:text-3xl text-[0.5rem] -translate-x-11">👋, my name is Nasser and I am a freelance</h1>
      <img className={""} src="/public/UI.png" alt="" />
      <button className={"text-white bg-[#404245] px-9 py-3 rounded-xl sm:font-bold font-medium block mx-auto sm:my-14 my-6 sm:text-base text-[0.625rem] "}>
        <a href="#contact">You Need Disigner?</a>
      </button>
      </div>
  )
}