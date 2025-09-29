import { partnerData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";
import pattern from "../assets/images/pattern.svg";

const Partner = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-white">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-24 flex flex-col justify-center items-center gap-10">
        <GradientHeader
          heading="Partner With Us"
          paragraph="At NORGZ, we go beyond brick and mortar. Every development starts with a vision — a place that will not only serve a market need but also spark imagination, boost local pride, and attract global interest."
          className="gap-1! justify-center items-center"
          textStyle="text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-snug max-w-[1152px]"
          isGradient
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {partnerData.map((item, index) => {
            return (
              <div
                key={index}
                className="relative lg:w-[300px] h-48 sm:h-[360px] lg:h-[404px] flex justify-center pt-12 sm:pt-0 item-start sm:items-center bg-[#0C3635]"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <p className="text-center px-5 text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#CA9762] leading-[110%] -tracking-[-0.72px]">
                  {item}
                </p>
                <span className="absolute bottom-5 left-0">
                  <img src={pattern} alt="pattern" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
