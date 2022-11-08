import React from "react";

const AboutPanel = () => {
  return (
    <div className="flex justify-end items-start">
      <div className="flex rotate-90 mt-20 w-56 justify-center items-center">
        <p className="text-[#DCDDDF] text-xl font-semibold bg-[#1D293A] py-1 px-2 rounded-md uppercase">
          About Me
        </p>
        <div className="w-[60px] h-1 bg-[#DCDDDF] rounded"></div>
      </div>
    </div>
  );
};

export default AboutPanel;
