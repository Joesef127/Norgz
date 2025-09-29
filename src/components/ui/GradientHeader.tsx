import React from "react";
import Button from "./Button";

type GradientTextProps = {
  heading: string;
  paragraph?: string;
  className?: string;
  headingStyle?: string;
  textStyle?: string;
  hasButton?: boolean;
  btn_text?: string;
  btnIcon?: string;
  route?: string;
  btnStyle?: string;
  isOrange?: boolean;
  isGradient?: boolean;
  subHeading?: string;
};

const GradientHeader: React.FC<GradientTextProps> = ({
  heading,
  paragraph,
  className,
  headingStyle,
  textStyle,
  hasButton,
  btn_text,
  btnStyle,
  route,
  isOrange,
  isGradient,
  subHeading,
  btnIcon,
}) => {
  return (
    <div>
      <div className={`flex flex-col gap-6 ${className}`}>
        <h2
          className={`bg-gradient-to-r ${
            isOrange
              ? "from-[#CA9762] to-[#CA9762]/1"
              : "from-[#1D4734] to-[#1D4734]/1"
          } bg-clip-text ${
            isGradient && "text-transparent"
          } text-4xl font-bold leading-[4rem] tracking-[-2.222px] ${headingStyle}`}
          data-aos="fade-right"
        >
          {heading}
        </h2>

        {
          subHeading && (
            <p className="font-bold text-2xl sm:text-4xl text-[#0C3635] leading-[110.00000000000001%] tracking-[-2%]" data-aos="fade-left" data-aos-delay="100">
              {subHeading}
            </p>
          )
        }

        {paragraph && (
          <p
            className={`mt-2 font-normal leading-[150%] text-black ${textStyle}`}
            data-aos="fade-left" data-aos-delay="100"
          >
            {paragraph}
          </p>
        )}
      </div>
      {hasButton && (
        <Button
          children={btn_text}
          icon={btnIcon}
          isImage
          className={`flex flex-row-reverse gap-2 text-white bg-[#0C3635] py-4 px-5 border border-[#0C3635] hover:bg-transparent hover:text-[#0C3635] transition duration-300 ${btnStyle}`}
          route={route ? route : "#"}
        />
      )}
    </div>
  );
};

export default GradientHeader;
