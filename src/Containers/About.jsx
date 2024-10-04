export default function About() {
  return (
    <div className={"mt-24 py-32 px-14 flex items-center justify-around"}>
        <img src="/public/AboutImage.png" alt="" className={"w-[38rem] h-[43.75rem]"}/>

        <div className={""}>
            <h1 className={"font-shantell text-[4rem] text-[#5D30BE] font-semibold"}>About Me</h1>
            <p className={"text-2xl font-shantell text-[#1C1E53] font-normal w-[38.75rem]"}>I am a creative professional specializing in strategy, branding, and UI/UX design. I help businesses define their direction, craft compelling brand identities, and design user-friendly interfaces to enhance user satisfaction and engagement. Alongside my creative work, I also have a background in cybersecurity, ensuring a deep understanding of how to protect digital environments. My diverse skill set allows me to contribute both to impactful visual experiences and secure technological solutions, always striving to exceed expectations.
            </p>
        </div>
    </div>
  )
}