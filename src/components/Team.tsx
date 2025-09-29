import prosper_uwa from "../assets/images/prosper_uwa.svg";
// import GradientHeader from "./ui/GradientHeader";

const Team = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-28 flex flex-col justify-center items-center gap-24">
        <div className="grid sm:grid-cols-2 justify-center items-center w-full gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          <div className="order-2 flex flex-col md:gap-6 text-center sm:text-start">
            <h2 className="hidden sm:block text-4xl leading-[77.778px] -tracking-normal font-bold text-[#1D4734] uppercase">
              Team
            </h2>
            <div className="flex flex-col gap-4 md:gap-6 max-w-[488px]">
              <p className="text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.72px]">
                ONAIFO PROSPER UWA MICA, FBDFM
              </p>
              <p className="md:text-lg font-medium leading-[145%] tracking-[-0.09px]">
                Visionary leader, brand strategist, and urban real estate
                developer with cross-sector experience.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-12 justify-start sm:justify-center items-center order-1">
            <h2 className="block sm:hidden text-4xl leading-[77.778px] -tracking-normal font-bold text-[#1D4734] uppercase">
              Team
            </h2>
            <img src={prosper_uwa} alt="prosper" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
