import Button from "./ui/Button";
import slant_arrow_brown from "../assets/icons/slant_arrow_brown.svg";
import charlizgon from "../assets/images/charlizgon.svg";
import skyscrapper from "../assets/images/skyscrapper.svg";

const HomeFeature = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto mt-[100px] mb-10 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 w-fit">
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-full"
            style={{ backgroundImage: `url(${skyscrapper})` }}
            data-aos="fade-right"
          ></div>
          {/* <img src={skyscrapper} alt="skyscrapper" className="w-full" /> */}
          <div className="flex flex-col gap-8 md:gap-10 px-6 py-10 sm:px-8 sm:py-8 md:py-10 md:px-10 bg-white" data-aos="fade-left">
            <h3 className="text-[#949494] text-sm sm:text-sm md:text-lg lg:text-xl leading-7 tracking-[2px] sm:tracking-[1.2px] md:tracking-[2px] lg:tracking-[4.6px] uppercase">
              hero Feature Project
            </h3>
            <div>
              <img src={charlizgon} alt="Charlisgon" />
            </div>
            <Button
              children="Learn more"
              icon={slant_arrow_brown}
              isImage
              className="flex flex-row-reverse gap-2 text-white bg-[#0C3635] py-4 px-5 border border-[#0C3635] hover:bg-transparent hover:text-[#0C3635] transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
