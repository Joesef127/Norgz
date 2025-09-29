import { edgeData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";
import pattern from "../assets/images/pattern.svg";

const NorgzEdge = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-white">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-24 flex flex-col justify-center items-center gap-10">
        <GradientHeader
          heading="The NORGZ Edge"
          className="gap-1! justify-center items-center text-center"
          isGradient
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {edgeData.map((item, index) => {
            return (
              <div
                className="grid grid-rows-2"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="bg-cover bg-top bg-no-repeat w-full h-[320px] lg:h-full"
                ></div>
                <div className="px-6 py-10 bg-[#0C3635] flex flex-col gap-4 relative overflow-hidden">
                  <p className="text-[#CA9762] text-2xl font-medium leading-[145%] tracking-[-0.48px]">
                    {item.title}
                  </p>
                  <p className="text-white text-lg font-light leading-[140%] tracking-[-0.09px]">
                    {item.desc}
                  </p>
                  <img
                    src={pattern}
                    alt="pattern"
                    className="absolute bottom-0 right-0 -mb-5 lg:-mb-3 w-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NorgzEdge;
