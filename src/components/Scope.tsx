import { scopeData } from "../data/projectsData";
import OrangeLine from "./OrangeLine";
import GradientHeader from "./ui/GradientHeader";
import IconCard from "./ui/IconCard";

const Scope = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#F2F2F2]">
      <OrangeLine />
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto mt-20 mb-36 flex flex-col justify-center items-center gap-24">
        <div className="grid grid-cols-1 justify-center items-center gap-5 w-full">
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
                  className={`w-full flex-row items-center sm:items-start justify-start pb-5 md:pb-4 sm:mb-0 sm:px-8 lg:px-10 xl:px-14 lg:border-x border-[#CA9762]  
                    
                    ${index === 0 ? "pt-0 sm:pt-5 lg:border-x-0" : "pt-5"} 
                    ${index === 4 ? "border-b-0" : "border-b lg:border-b-0"} 

                    ${index === 1 && "sm:border-l "} 
                    ${index === 3 && "sm:border-l "} 
                    ${index === 4 && "sm:border-r lg:border-r-0"} 

                    ${
                      index === 0 && "lg:pr-14!  sm:px-8 lg:px-0! sm:border-x-0"
                    } 
                    ${
                      index === 4 && "lg:pl-14!  sm:px-8 lg:px-0! sm:border-x-0"
                    }
                  `}
                  textStyle={`text-white text-start text-xl! max-w-[186px]`}
                  iconStyle="min-w-[50px] sm:min-w-full h-[50px] sm:h-full"
                />
              );
            })}
          </div>
        </div>
      </div>
      <OrangeLine notArray text="More Projects Coming Soon – Calabar | Abuja | Kigali" />
    </div>
  );
};

export default Scope;
