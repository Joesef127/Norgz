import city_view from "../assets/images/city_view.jpg";
import search from "../assets/icons/search.svg";
import slant_arrow from "../assets/icons/slant_arrow.svg";
import Button from "./ui/Button";

const HomeHero = () => {
  return (
    <div className="pt-[124px] flex flex-col justify-center items-center text-white w-full h-full relative">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${city_view})`,
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full z-10 bg-center bg-cover bg-no-repeat bg-[#0C3635]/62"></div>
      <div className="w-[90%] mx-auto max-w-[1280px] z-20 flex items-center justify-center pt-0 lg:pt-20">
        <div className="flex flex-col justify-center items-center w-full gap-6 sm:gap-20 md:gap-28 lg:gap-[172px] pb-3 sm:pb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[110%] tracking-[-1px] sm:tracking-[-2.222px] font-bold text-center uppercase max-w-5xl">
            Building Africa’s Most Iconic Hospitality Destinations
          </h1>
          <div className="pt-10 pb-3 sm:pb-16 bg-[#0C3635]/69 flex flex-col justify-center items-center max-w-4xl gap-9 sm:gap-16 px-5">
            <p className="max-w-3xl text-center text-sm sm:text-[22px] leading-normal font-light tracking-[-0.5px]">
              Our international brand specializes in property appraisal, sales,
              purchases, and investments. Trust us to deliver exceptional
              service and help you find your perfect real estate opportunity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                children="Explore our Projects"
                isImage
                icon={search}
                className="flex sm:flex-row-reverse gap-2 text-xs sm:text-base text-[#0C3635] hover:bg-white/80 bg-white py-4 px-5 transition duration-300"
              />
              <Button
                children="Patner with Us"
                isImage
                icon={slant_arrow}
                className="flex flex-row-reverse gap-2 text-white hover:bg-transparent border border-white/15 hover:border-white py-4 px-5  transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
