import GradientHeader from "./ui/GradientHeader";

const ContactBlock = () => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#DADADA]">
      <div className="w-[90%] md:w-[95%] lg:w-[90%] max-w-[1240px] mx-auto py-16 flex flex-col justify-center items-center gap-8">
        <GradientHeader heading="Contact Us" isGradient />
        {/* <div className="flex"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
            <p className="max-w-[245px] text-4xl leading-[110%] tracking-[-2%] font-bold text-[#0C3635]">NORGZ Urban Development Company</p>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ContactBlock;
