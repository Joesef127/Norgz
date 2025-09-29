import React from "react";

type iconCardProps = {
  icon?: string;
  text: string;
  textStyle?: string;
  iconStyle?: string;
  className?: string;
  isImage?: boolean;
  animationDelay?: string;
};

const IconCard: React.FC<iconCardProps> = ({
  icon,
  text,
  iconStyle,
  textStyle,
  className,
  isImage,
  animationDelay,
}: iconCardProps) => {
  return (
    <div
      className={`flex sm:flex-col gap-6 ${className}`}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <span>
        {isImage ? (
          <img src={icon} alt={icon} className={iconStyle} />
        ) : (
          <span>{icon}</span>
        )}
      </span>

      {text && (
        <p
          className={`mt-2 sm:text-base font-normal leading-[150%] text-black text-justify ${textStyle}`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default IconCard;
