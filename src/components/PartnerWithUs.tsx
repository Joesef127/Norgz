import GradientHeader from "./ui/GradientHeader";
import phone from "../assets/icons/phone.svg";
import handshake from "../assets/images/handshake.svg";

const PartnerWithUs = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto mt-[100px] mb-10 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-between items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14 ">
          <GradientHeader
            heading="Partner With Us"
            paragraph="Whether you’re a state government, hotel brand, private equity firm, or institutional investor — we welcome partnerships that share our ambition."
            subHeading="Looking to invest, franchise, or co-develop?"
            className="gap-1! sm:gap-3!"
            hasButton
            btn_text="Let's talk"
            btnIcon={phone}
            btnStyle="mt-6 sm:mt-8 bg-[#CA9762] border-[#CA9762] hover:text-[#CA9762] items-center"
            route="/contact"
            textStyle="text-[#0C3635]! text-base sm:text-2xl"
            isGradient
          />
          <div
            style={{ backgroundImage: `url(${handshake})` }}
            className="w-full h-[300px] sm:h-full bg-cover bg-center bg-no-repeat"
            data-aos="fade-right"
          >
            {/* <img src={city_street} alt="location" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
