import PortFolioCard from "../Components/PortFolioCard";

export default function Portfolio() {
  return (
    <div className={"text-[#282938] font-playfair py-28 px-16"}>
      <p className={"text-xl font-medium"}>Recent Projects</p>
      <h1 className={"text-[4rem] font-semibold mb-20"}>My Portfolio</h1>

      <div className="flex justify-around">
        <PortFolioCard
          img={"/public/PortfolioImages/PortfolioImageMubeen.png"}
          Title={"Ahuse"}
          Description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />

        <PortFolioCard
          img={"/public/PortfolioImages/Byan.png"}
          Title={"App Dashboard"}
          Description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />

        <PortFolioCard
          img={"/public/PortfolioImages/Ta7adath.png"}
          Title={"Easy Rent"}
          Description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
      </div>
    </div>
  );
}
