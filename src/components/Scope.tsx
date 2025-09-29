import { scopeData } from "../data/projectsData";
import GradientHeader from "./ui/GradientHeader";
import IconCard from "./ui/IconCard";

const Scope = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto my-20 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-cols-1 justify-center items-center gap-5">
          <GradientHeader
            heading="Scope"
            className="justify-center items-center"
            isGradient
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 w-full bg-[#0C3635] py-6 px-4 sm:px-7">
            {scopeData.map((scope, index) => {
              return (
                <IconCard
                  key={index}
                  icon={scope.icon}
                  isImage
                  text={scope.text}
                  className="flex-row items-center sm:items-start justify-start"
                  textStyle={`text-white text-start text-2xl! max-w-[186px]`}
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

export default Scope;
