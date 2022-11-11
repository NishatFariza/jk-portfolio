import React from "react";
import SkillPanel from "./SkillPanel";


const SkillName = () => {
  return (
    <div className="bg-[#1D293A] rounded-md">
      <div className="flex items-center justify-between px-4 py-4">
        <h4>Web</h4>
      </div>
      <div
        style={{ width: "100%" }}
        className="h-2 bg-green-600 rounded-md"
      ></div>
    </div>
  );
}

const Skill = () => {
  return (
    <div className="py-20">
      <SkillPanel />
      <div className="">
        <div className="flex gap-3 mt-7">
          <button className="border px-4 py-2 rounded ">Web</button>
          <button className="border px-4 py-2 rounded ">Programming</button>
          <button className="border px-4 py-2 rounded ">Framework</button>
          <button className="border px-4 py-2 rounded ">Tools</button>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
         <SkillName />
        </div>
      </div>
    </div>
  );
};

export default Skill;
