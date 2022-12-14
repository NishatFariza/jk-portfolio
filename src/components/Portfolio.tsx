import React, { useState } from "react";
import PortfolioPanel from "./PortfolioPanel";
import { portfolios } from "../data/PortfolioData";
import Link from "next/link";

interface PortfolioProps {
  name: string;
  description: string;
  source: string;
  tools: string[];
}

const PortfolioName: React.FC<PortfolioProps> = ({
  name,
  description,
  source,
  tools,
}) => {
  return (
    <div className="bg-[#1D293A] rounded-md">
      <div className="flex flex-col gap-4 px-4 py-4">
        <h4 className="text-[26px] leading-[29px] text-[#DDDFE2] font-bold">
          {name}
        </h4>
        <p className=" leading[24px] text-[#DDDFE2]">{description}</p>
        <Link className="" href={source} target={"_blank"}>
          <svg
            className="w-6 h-6 hover:fill-green-600 transition duration-300"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#DCDDDF"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </Link>
        {/* <Link href={}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link> */}
        {/* <div className="text-sm flex justify-between gap-4">{tools}</div> */}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Web");
  return (
    <div id="portfolio">
      <PortfolioPanel />
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-4">
        {portfolios[selectedPortfolio].map((portfolio, i) => (
          <PortfolioName
            key={i}
            name={portfolio.name}
            description={portfolio.description}
            source={portfolio.source}
            tools={portfolio.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
