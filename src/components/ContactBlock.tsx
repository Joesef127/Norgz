import { contactInfo } from "../data/contactData";
import Button from "./ui/Button";
import GradientHeader from "./ui/GradientHeader";

const ContactBlock = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#DADADA]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto py-16 flex flex-col justify-center items-center gap-8">
        <GradientHeader heading="Contact Us" isGradient />
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-10 sm:gap-8 md:gap-14 ">
          <p className="max-w-[245px] text-4xl leading-[110%] tracking-[-2%] font-bold text-[#0C3635]">
            NORGZ Urban Development Company
          </p>
          <div className="grid grid-rows-3 gap-4">
            {contactInfo.map((item, index) => {
              return (
                <Button
                  key={index}
                  children={item.text}
                  icon={item.icon}
                  isImage
                  route={item.route}
                  className="flex gap-6 text-base leading-[145%] text-black"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
