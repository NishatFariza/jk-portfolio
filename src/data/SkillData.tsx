interface SkillType {
  name: string;
  
}
interface SkillListType {
  [key: string]: SkillType[];
}

export const skills: SkillListType = {
  Web: [
    { name: "React" },
    { name: "Gatsby" },
    { name: "Next.JS" },
    { name: "Node JS" },
    { name: "Express JS" },
    { name: "MongoDB" },
    { name: "MySQL" },
  ],
  Programming: [
    { name: "Python" },
    { name: "Java" },
    { name: "Javascript" },
    { name: "R" },
    { name: "C" },
    { name: "C#" },
    { name: "C++" },
    { name: "Golang" },
    { name: "Ruby" },
  ],
  Frameworks: [
    { name: "React Native"},
    { name: "Electron JS" },
    { name: "Johnny Five" },
    { name: "Svelte" },
    { name: "Redux" },
    { name: "GraphQL" },
    { name: "Jest" },
    { name: "Mocha" },
    { name: "Cypress" },
    { name: "SVG" },
  ],
  Tools: [
    { name: "Git" },
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "Travis CI" },
    { name: "Circle CI" },
    { name: "AppVeyor" },
    { name: "Docker" },
    { name: "Kubernetes"},
  ],
};
