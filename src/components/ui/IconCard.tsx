import React from "react";

type iconCardProps = {
  icon?: string;
  text: string;
  textStyle?: string;
  iconStyle?: string;
  className?: string;
  isImage?: boolean;
};

const IconCard: React.FC<iconCardProps> = ({
  icon,
  text,
  iconStyle,
  textStyle,
  className,
  isImage,
}: iconCardProps) => {
  return (
    <div className={`flex sm:flex-col gap-6 ${className}`}>
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
