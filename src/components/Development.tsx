import { developmentData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";

const Development = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-28 flex flex-col justify-center items-center gap-16">
        <GradientHeader
          heading="Our Development Approach Includes:"
          className="gap-3! items-start"
          textStyle="text-xl text-white font-medium leading-[145%] tracking-[-0.1px]"
          headingStyle="text-black text-center"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 w-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-5 lg:gap-6 xl:gap-8">
            {developmentData.map((item, index) => {
              return (
                index <= 1 && (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="relative bg-cover bg-center bg-no-repeat w-full min-h-[360px] px-4 lg:px-6 xl:px-8 py-8 flex justify-start items-end"
                  >
                    <p className="text-xl text-white leading-snug -tracking-tight z-10">
                      {item.caption}
                    </p>
                    <div className="absolute bg-black/40 w-full h-full bottom-0 right-0"></div>
                  </div>
                )
              );
            })}
          </div>

          {developmentData.map((item, index) => {
            return (
              index >= 2 && (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="relative bg-cover bg-center bg-no-repeat w-full h-full min-h-[360px] px-4 lg:px-6 xl:px-8 py-8 flex justify-start items-end"
                >
                  <p className="text-xl text-white leading-snug -tracking-tight z-10">
                    {item.caption}
                  </p>
                  <div className="absolute bg-black/40 w-full h-full bottom-0 right-0"></div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Development;
