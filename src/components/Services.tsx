import { servicesData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";

const Services = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-24 flex flex-col justify-center items-center gap-10">
        <GradientHeader
          heading="Our Services"
          paragraph="What We Do"
          className="gap-1! justify-center items-center"
          isGradient
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {servicesData.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="bg-cover bg-center bg-no-repeat w-full h-[360px] lg:h-[404px] pl-5 xl:pl-7 pr-3 pb-12 flex justify-start items-end"
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
              >
                <p className="text-2xl md:text-lg lg:text-2xl xl:text-[28px] text-white leading-snug -tracking-tight">
                  {item.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
