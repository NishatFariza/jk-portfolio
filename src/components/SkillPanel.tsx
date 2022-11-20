import React from 'react'

const SkillPanel = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row gap-4 items-center md:justify-start lg:justify-start sm:justify-center mt-20 md:gap-1">
        <p className="text-[#DCDDDF] text-xl font-semibold bg-[#1D293A] py-1 px-2 rounded-md uppercase">
          MySkill
        </p>
        <div className="w-[60px] h-1 bg-[#DCDDDF] rounded"></div>
      </div>
    </div>
  );
}

export default SkillPanel