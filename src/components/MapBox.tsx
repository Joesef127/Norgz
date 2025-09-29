const MapBox = () => {
  return (
    <div className="pt-[104px] flex flex-col justify-center items-center text-white w-full h-full md:h-screen relative overflow-hidden">
      <div className="w-[95%] mx-auto h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241148.19815888905!2d3.610080197693702!3d6.511561891264095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e1!3m2!1sen!2sng!4v1759150356186!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full min-h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBox;
