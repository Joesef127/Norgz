import { NavLink } from "react-router-dom";
import { navlinks } from "../data/constantData";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import norgz_logo from "../assets/norgz_logo.svg";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <header className="w-full py-3 sm:py-4 md:py-5 bg-white flex flex-col items-center justify-center shadow-md fixed top-0 left-0 z-50">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-7xl flex gap-2.5 lg:gap-6 items-center justify-between">
        {/* Logo */}
        <NavLink
          to={"/"}
          className="flex items-center gap-2 w-28 md:w-28 lg:w-32"
        >
          <img src={norgz_logo} alt="Norgz Logo" />
        </NavLink>

        <nav className="hidden md:flex items-center ml-10">
          {navlinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.route}
                className="py-3 px-4 bg-transparent hover:bg-[#0C3635] text-[#0C3635] hover:text-white transition duration-300"
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#0C3635]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-mb">
          <nav className="flex flex-col gap-1 py-4  sm:px-6 mt-2">
            {navlinks.map((item) => (
              // <div className="w-full">
                <NavLink
                  to={item.route}
                  key={item.name}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 bg-transparent hover:bg-[#0C3635] text-[#0C3635] hover:text-white transition duration-300"
                >
                  {item.name}
                </NavLink>
              // </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
