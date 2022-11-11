import React, { useState } from "react";
import SkillPanel from "./SkillPanel";

export const skills = {
  Web: [
    { name: "React", percent: 90 },
    { name: "Gatsby", percent: 90 },
    { name: "Next.JS", percent: 75 },
    { name: "Node JS", percent: 80 },
    { name: "Express JS", percent: 90 },
    { name: "MongoDB", percent: 90 },
    { name: "MySQL", percent: 85 },
  ],
  Programming: [
    { name: "Python", percent: 90 },
    { name: "C", percent: 90 },
    { name: "C++", percent: 75 },
    { name: "Python", percent: 50 },
    { name: "Java", percent: 50 },
  ],
  Frameworks: [
    { name: "React Native", percent: 85 },
    { name: "Electron JS", percent: 90 },
    { name: "Johnny Five", percent: 75 },
    { name: "Svelte", percent: 70 },
    { name: "Redux", percent: 80 },
    { name: "GraphQL", percent: 80 },
    { name: "Jest", percent: 65 },
    { name: "Mocha", percent: 65 },
    { name: "Cypress", percent: 65 },
    { name: "SVG", percent: 80 },
  ],
  Tools: [
    { name: "Git", percent: 90 },
    { name: "Photoshop", percent: 75 },
    { name: "Illustrator", percent: 70 },
    { name: "Travis CI", percent: 85 },
    { name: "Circle CI", percent: 80 },
    { name: "AppVeyor", percent: 75 },
    { name: "Docker", percent: 60 },
    { name: "Kubernetes", percent: 30 },
  ],
};
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

const Skill = ({}) => {
  const [selectedSkill, setSelectedSkill] = useState("Web");
  return (
    <div id="skill" className="py-20">
      <SkillPanel />
      <div className="">
        <div className="flex gap-3 mt-7">
          
          {Object.keys(skills).map((skillTopic) => (
            <button key={skillTopic}
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
        <div className="grid grid-cols-3 gap-6 mt-4">{/* <SkillName /> */}</div>
      </div>
    </div>
  );
};

export default Skill;
