import dual_location from "../assets/images/dual_location.svg";
import GradientHeader from "./ui/GradientHeader";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-White">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto mt-[100px] mb-10 flex flex-col justify-center items-center gap-24">
        <div className="grid sm:grid-cols-2 justify-center items-center gap-8 sm:gap-10 md:gap-16 lg:gap-20" data-aos="fade-right" data-aos-delay="200">
          <GradientHeader
            heading="Who We Are"
            paragraph="NORGZ Urban Development Company is a future-forward hospitality
              real estate firm dedicated to building luxury, lifestyle, and
              legacy-driven destinations across Africa. From upscale hotels and
              branded residences to cultural and business hubs, we are
              reimagining what hospitality means in modern African cities."
            className="gap-3!"
            isGradient
          />
          <div
            // style={{ backgroundImage: `url(${dual_location})` }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            data-aos="fade-right"
          >
            <img src={dual_location} alt="location" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
