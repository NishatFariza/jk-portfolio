interface PortfolioType {
  name: string;
  type: string;
  description: string;
  demo: string;
  source: string;
  tools: string[];
}
interface PortfoliolListType {
  
  [key: string]: PortfolioType[];
}

export const portfolios: PortfoliolListType = {
  Web: [
    {
      type: "featured",
      name: "Python-Slots-Machine-Project",
      // image: require("./image/devsonket.jpg"),
      description:
        "A Collection of Bengali Cheatsheets for the developers, completely open-source",
      demo: "https://devsonket.com",
      source: "https://github.com/devsonket/devsonket.github.io",
      tools: ["gatsby", "json", "travis ci"],
    },
    {
      type: "featured",
      name: "Python Number Guesser Project",
      // image: require("./image/js.zonayed.me.png"),
      description:
        "Learn Practical use case of JavaScript in your everyday life, entirely in Bengali",
      demo: "https://zonayed.js.org",
      source: "https://github.com/zonayedpca/js.zonayed.me",
      tools: ["gatsby", "utterances", "travis ci"],
    },
    {
      type: "regular",
      name: "Steam Webscraper Python Project",
      description:
        "Created a web scraper using Python, BeautifulSoup4, and urllib to extract, compile, and structure data from the Steam Sales webpage into a more parsable format. Formatted 280+ items into organized CSV files to expedite the process of searching for purchases.",
      demo: "https://phonebookpca.netlify.com/",
      source: "https://github.com/zonayedpca/nodeMySQLPhonebook",
      tools: ["express", "mysql", "react"],
    },
    {
      type: "regular",
      name: "Holy Quran",
      description:
        "Read the Holy Quran with English Transaltion. Simple, basic and clean",
      demo: "https://zonayedpca.github.io/HolyQuranReact/",
      source: "https://github.com/zonayedpca/HolyQuranReact",
      tools: ["react", "redux"],
    },
    {
      type: "regular",
      name: "To-do App",
      description:
        "Just another interactive, nice, beautiful and small to-do application. Does everything!",
      demo: "https://todoreacthooks.netlify.com/",
      source: "https://github.com/zonayedpca/todo-react-hooks",
      tools: ["react", "react hooks"],
    },
    {
      type: "regular",
      name: "Micro Blog",
      description:
        "Entirely works on the client-side, behaves like actual micro blog, everything handled by client",
      demo: "https://zonayedpca.github.io/react-micro-blog/",
      source: "https://github.com/zonayedpca/react-micro-blog",
      tools: ["react", "react router"],
    },
    {
      type: "regular",
      name: "Mini Blog",
      description:
        "Entirely works on the client-side, behaves like actual blog, can even make posts, bookmarks",
      demo: "https://zonayedpca.github.io/react-mini-blog/",
      source: "https://github.com/zonayedpca/react-mini-blog",
      tools: ["react", "react router", "draft js"],
    },
    {
      type: "regular",
      name: "PWA Blog",
      description:
        "A Simple blog powered by WP-Rest API and React, Progressive Web App supported",
      demo: "https://zonayedjsv1.netlify.com",
      source: "https://github.com/zonayedpca/old.js.zonayed.me",
      tools: ["react", "pwa"],
    },
  ],
  Others: [
    {
      type: "featured",
      name: "AlgoDS.js",
      // image: require("./image/algods.jpg"),
      description:
        "A Collection of most used algorithms and data structures implemented using JavaScript",
      demo: "https://zonayedjsv1.netlify.com",
      source: "https://github.com/zonayedpca/AlgoDS.js",
      tools: ["data structure", "algorithm"],
    },
    {
      type: "regular",
      name: "React Native Welcome",
      description:
        "A helper package for React Native to welcome user with beautiful and interactive UI",
      demo: "https://www.npmjs.com/package/react-native-welcome",
      source: "https://github.com/zonayedpca/react-native-welcome",
      tools: ["npm package", "react native"],
    },
    {
      type: "regular",
      name: "React Web Workers",
      description: "A Small helper package for React to work with web workers",
      demo: "https://www.npmjs.com/package/react-web-workers",
      source: "https://github.com/zonayedpca/react-web-workers",
      tools: ["npm package", "react"],
    },
    {
      type: "regular",
      name: "React Poll",
      description:
        "Entirely works on client-side, behave like actual poll application",
      demo: "https://zonayedpca.github.io/react-fake-poll/",
      source: "https://github.com/zonayedpca/react-fake-poll",
      tools: ["react", "react router"],
    },
  ],
};
