import tall_buildings from "../assets/images/tall_buildings.png";
import chaligon_logo_white from "../assets/images/Chaligon_logo_white.svg";

const ProjectHero = () => {
  return (
    <div className="pt-[124px] flex flex-col justify-center items-center text-white w-full h-full relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${tall_buildings})`,
        }}
      ></div>
      <div className="absolute inset-0 w-full h-full z-10 bg-center bg-cover bg-no-repeat bg-[#3C151C]/60"></div>
      <div className="w-[90%] mx-auto max-w-[1280px] z-30 flex items-center justify-center pt-40 pb-60 sm:pt-60 sm:pb-80">
        <div><img src={chaligon_logo_white} alt="chaligon logo" /></div>
      </div>
    </div>
  );
};

export default ProjectHero;
