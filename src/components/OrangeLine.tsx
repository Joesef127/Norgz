import { orangeData } from "../data/projectsData";
import Button from "./ui/Button";

const OrangeLine = () => {
  return (
    <div className="bg-[#CA9762] w-full flex justify-center items-center overflow-hidden">
      <div className="w-[90%] mx-auto sm:w-fit max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-3 md:gap-8 justify-center items-center">
        {orangeData.map((item, index) => {
          return (
            <Button
              key={index}
              icon={item.icon}
              isImage
              children={item.text}
              className="w-full flex items-center justify-center gap-3 text-white text-base leading-14 sm:text-xl sm:leading-16 text-center"
              customStyle="w-full"
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrangeLine;
