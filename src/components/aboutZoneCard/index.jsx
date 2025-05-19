import React from "react";

const AboutZoneCard = ({ title, description, image, caption, background }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative px-4 py-12 md:px-8 z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg bg-[#C5D6F5] rounded-xl shadow-xl p-12 max-xl:p-4">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-start">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-[16px] leading-relaxed">{description}</p>
              </div>
              <div className="md:w-1/3 flex flex-col items-start">
                <img
                  src={image}
                  alt={caption}
                  className="w-full h-70 object-cover rounded-lg"
                />
                <p className="text-sm mt-2 italic">{caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutZoneCard;
