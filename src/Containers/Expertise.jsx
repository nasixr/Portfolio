import ExpertiseCard from "../Components/ExpertiseCard";

export default function Expertise() {
  return (
    <div className="mx-20 mb-7">
      <h1 className={"text-[#282938] font-semibold text-[4rem] font-playfair mb-24"}>
        My Expertise
      </h1>

      <div className={"flex justify-between"}>
        <ExpertiseCard
          img={"/public/CardImages/Strategy & Direction.png"}
          Title={"Strategy & Direction"}
          Description={`Developing comprehensive business strategies to drive growth and achieve organizational objectives. I work closely with stakeholders to understand market trends, set clear goals, and provide guidance for optimal decision-making and successful execution.`}
        />

        <ExpertiseCard
          img={"/public/CardImages/Branding & Logo.png"}
          Title={"Branding & Logo"}
          Description={`Designing distinctive logos and cohesive brand identities that effectively communicate a company's values and resonate with its target audience. I focus on creating visually appealing branding that differentiates businesses and leaves a lasting impression.`}
        />

        <ExpertiseCard
          img={"/public/CardImages/UI & UX Design.png"}
          Title={"UI & UX Design"}
          Description={`Specializing in crafting user interfaces and experiences that prioritize usability, accessibility, and aesthetics. I aim to design intuitive digital products that enhance user satisfaction and engagement through a seamless and visually captivating experience.`}
        />
      </div>
    </div>
  );
}
