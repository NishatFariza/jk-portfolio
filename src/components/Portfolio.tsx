import React, { useState } from "react";
import PortfolioPanel from "./PortfolioPanel";
import {portfolios} from "../data/PortfolioData"

interface PortfolioProps {
  name: string;
}

const PortfolioName: React.FC<PortfolioProps> = ({ name }) => {
  return (
    <div className="bg-[#1D293A] rounded-md">
      <div className="flex items-center justify-between px-4 py-4">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Web")
  return (
    <div id="portfolio">
      <PortfolioPanel />
      <div className="grid grid-cols-3 gap-10">
        <div className="flex gap-3 mt-7">
          {Object.keys(portfolios).map((portfolioTopic) => (
            <button
              key={portfolioTopic}
              className={`border border-green-600 px-4 py-2 rounded ${
                portfolioTopic === selectedPortfolio
                  ? "bg-green-600"
                  : "border border-green-600"
              }`}
              onClick={() => setSelectedPortfolio(portfolioTopic)}
            >
              {portfolioTopic}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {portfolios[selectedPortfolio].map((portfolio, i) => (
          <PortfolioName key={i} name={portfolio.name} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
