import React, { useState } from "react";
import { skills } from "../data/SkillData";
import SkillPanel from "./SkillPanel";

interface SkillProps {
  name: string;
}


const SkillName: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className="bg-[#1D293A] rounded-md">
      <div className="flex items-center justify-between px-4 py-4">
        <h4>{name}</h4>
      </div>
      <div
        style={{ width: "100%" }}
        className="h-2 bg-green-600 rounded-md"
      ></div>
    </div>
  );
};

const Skill  = () => {
  const [selectedSkill, setSelectedSkill] = useState("Web");
  return (
    <div id="skill" className="py-20">
      <SkillPanel />
      <div className="">
        <div className="flex flex-col md:flex-row gap-3 mt-7">
          {Object.keys(skills).map((skillTopic) => (
            <button
              key={skillTopic}
              className={`border border-green-600 px-4 py-2 rounded ${
                skillTopic === selectedSkill
                  ? "bg-green-600"
                  : "border border-green-600"
              }`}
              onClick={() => setSelectedSkill(skillTopic)}
            >
              {skillTopic}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
          {skills[selectedSkill].map((skill, i) => (
            <SkillName key={i} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
