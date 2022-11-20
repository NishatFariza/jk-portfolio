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
      name: "Slots Machine",
      // image: require("./image/devsonket.jpg"),
      description:
        "This program allows the user to type a dollar amount number (1-100) on the screen and have the program take however many lines (1-3), and how much you will put on each number line. It then will give you a random generated dollar number. This uses a basic neural network model.",
      demo: "https://devsonket.com",
      source: "https://github.com/jjkrasnick/Python-Slots-Machine-Project",
      tools: ["javascript", "machine-learning", "neural-network", "python3"],
    },
    {
      type: "featured",
      name: "Number Guesser",
      // image: require("./image/js.zonayed.me.png"),
      description:
        "This program allows the user to draw a number on the screen and have the program take a guess of which digit it is. This uses a basic neural network model.",
      demo: "https://zonayed.js.org",
      source: "https://github.com/jjkrasnick/Python-Number-Guesser-Project",
      tools: ["javaScript", "python3"],
    },
    {
      type: "regular",
      name: "Steam Webscraper",
      description:
        "Created a web scraper using Python, BeautifulSoup4, and urllib to extract, compile, and structure data from the Steam Sales webpage into a more parsable format. Formatted 280+ items into organized CSV files to expedite the process of searching for purchases.",
      demo: "https://phonebookpca.netlify.com/",
      source: "https://github.com/jjkrasnick/Steam-Webscraper-Python-Project",
      tools: ["python", "machine-learning", "algorithms"],
    },
  ],
  Others: [
    {
      type: "featured",
      name: "",
      // image: require("./image/algods.jpg"),
      description: "COMING Soon",
      demo: "",
      source: "https://github.com/jjkrasnick/",
      tools: ["data structure", "algorithm"],
    },
  ],
};
