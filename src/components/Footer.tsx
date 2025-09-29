import { NavLink } from "react-router-dom";
import norgz_logo_white from "../assets/norgz_logo_white.svg";
import { footerNav, socialLinks } from "../data/constantData";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-[#0C3635] flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-7xl flex flex-col gap-12 items-center justify-center">
        <div>
          <img src={norgz_logo_white} alt="norgz logo" />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {socialLinks.map((item, index) => {
            return (
              <a key={index} href={item.route}>
                <img src={item.icon} alt={item.name} />
              </a>
            );
          })}
        </div>
        <div className="border-t-[1.11px] border-white/50 w-full flex justify-center items-center pt-6">
          <div className="grid grid-cols-3 w-fit">
            {footerNav.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.route}
                  className={`uppercase text-xs sm:text-base md:text-lg font-medium leading-snug text-white text-center px-4 sm:px-8 md:px-12 flex justify-center items-center ${index === 1 && "border-x border-white"}`}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
