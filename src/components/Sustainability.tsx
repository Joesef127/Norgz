import { sustainabilityData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";

const Sustainability = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#0C3635]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-28 flex flex-col justify-center items-center gap-24">
        <div className="grid sm:grid-cols-2 justify-center items-start gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          <GradientHeader
            heading="Sustainability"
            paragraph="Our Commitment to Impact At NORGZ, we integrate ESG principles into every stage of development:"
            className="gap-3! items-start"
            textStyle="text-xl text-white font-medium leading-[145%] tracking-[-0.1px]"
            isOrange
            isGradient
          />
          <div className="grid grid-rows-5 gap-4">
            {sustainabilityData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-start items-center gap-6 lg:gap-7 xl:gap-9 bg-white p-4 sm:p-2 lg:p-4 xl:p-6"
                >
                  <span className="min-w-4 min-h-4">
                    <img src={item.icon} alt="icon" className="w-full h-full" />
                  </span>
                  <p className="text-base sm:text-xs md:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
