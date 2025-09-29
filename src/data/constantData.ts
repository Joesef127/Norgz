import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";

export const navlinks = [
  { name: "Home", route: "/"},
  { name: "Our Solutions", route: "/projects" },
  { name: "Contact", route: "/contact" },
];

export const socialLinks = [
  { icon: facebook, name: "fb", route: "#"},
  { icon: twitter, name: "X", route: "#"},
  { icon: instagram, name: "ig", route: "#"},
  { icon: linkedin, name: "ldi", route: "#"}
];

export const footerNav = [
  {title: "Home", route: "/"},
  {title: "our projects", route: "/projects"},
  {title: "contact", route: "contact"},
]