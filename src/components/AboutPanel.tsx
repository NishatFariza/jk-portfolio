import React from "react";

const AboutPanel = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex  justify-center items-center gap-1">
        <p className="text-[#DCDDDF] text-xl font-semibold bg-[#1D293A] py-1 px-2 rounded-md uppercase">
          About Me
        </p>
        <div className="w-[60px] h-1 bg-[#DCDDDF] rounded"></div>
      </div>
    </div>
  );
};

export default AboutPanel;
