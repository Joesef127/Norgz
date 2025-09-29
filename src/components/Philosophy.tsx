import city_street from "../assets/images/city_street.svg";
import GradientHeader from "./ui/GradientHeader";
import slant_arrow_brown from "../assets/icons/slant_arrow_brown.svg";

const Philosophy = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-White">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto mt-[100px] mb-10 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 justify-center items-center gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          <GradientHeader
            heading="Our Philosophy"
            paragraph="Hospitality is not just about where you stay — it's about how a place makes you feel. Every NORGZ project is crafted with meaning, identity, and unmatched quality."
            className="gap-3! "
            hasButton
            btn_text="Partner with us"
            btnIcon={slant_arrow_brown}
            btnStyle="mt-8 md:mt-10 lg:mt-[48px]"
            route="/contact"
            textStyle="px-4 sm:px-7 border-l-2 border-[#DADADA]"
            isGradient
          />
          <div style={{backgroundImage: `url(${city_street})`}} className="w-full h-[420px] bg-cover bg-center bg-no-repeat" data-aos="fade-left">
            {/* <img src={city_street} alt="location" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
