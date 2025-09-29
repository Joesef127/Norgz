import { missionData } from "../data/homeData";
import GradientHeader from "./ui/GradientHeader";
import IconCard from "./ui/IconCard";

const Mission = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-20 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-cols-1 justify-center items-center gap-5">
          <GradientHeader
            heading="Our Mission"
            className="justify-center items-center"
            isGradient
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-2.5">
            {missionData.map((mission, index) => {
              return (
                <IconCard
                  key={index}
                  icon={mission.icon}
                  isImage
                  text={mission.text}
                  className="bg-[#0C3635] py-6 px-4 sm:px-7 gap-5 flex-row items-center sm:items-start   justify-start"
                  textStyle="text-white text-start text-sm"
                  iconStyle="min-w-[50px] sm:min-w-full h-[50px] sm:h-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
