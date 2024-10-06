export default function About() {
  return (
    <div id="aboutme" className={"mt-24 py-32 px-14 flex items-center justify-around"}>
        <img src="/public/AboutImage.png" alt="" className={" sm:h-[43.75rem] h-52 sm:mr-0 mr-6 self-start"}/>

        <div>
            <h1 className={"font-shantell sm:text-[4rem] text-2xl text-[#5D30BE] font-semibold -translate-y-24 "}>About Me</h1>
            <p className={"sm:text-2xl text-[0.6rem] font-shantell text-[#1C1E53] font-normal sm:w-[38.75rem] w-40"}>I am a creative professional specializing in strategy, branding, and UI/UX design. I help businesses define their direction, craft compelling brand identities, and design user-friendly interfaces to enhance user satisfaction and engagement. Alongside my creative work, I also have a background in cybersecurity, ensuring a deep understanding of how to protect digital environments. My diverse skill set allows me to contribute both to impactful visual experiences and secure technological solutions, always striving to exceed expectations.
            </p>
        </div>
    </div>
  )
}