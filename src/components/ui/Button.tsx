import { Link } from "react-router-dom";
import type { ButtonTypes } from "../../types/constantTypes";

const Button = ({
  icon,
  className,
  children,
  isImage,
  route,
  iconStyle,
  customStyle,
  onClick,
}: ButtonTypes) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit flex justify-start items-start ${customStyle}`}
      data-aos="fade-right"
    >
      <Link to={route ? route : "#"} className={className}>
        <span>
          {isImage ? (
            <img src={icon} alt={icon} className={iconStyle} />
          ) : (
            <span>{icon}</span>
          )}
        </span>
        <span>{children}</span>
      </Link>
    </button>
  )
}

export default Button;