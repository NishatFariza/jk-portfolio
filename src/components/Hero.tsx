import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Panel from "./Panel";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["JJ Krasnick", "I use data to find solutions!"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="relative flex flex-col md:flex-row justify-center h-[calc(100vh-120px)] ">
      <Panel />
      <div
        id="hero"
        className="flex flex-col items-center justify-center w-10/12 lg:items-start"
      >
        <span className="text-[#00cf5d] md:text-2xl mb-2">Hello! I am</span>
        <div className="md:mb-5 mb-3 font-serif text-2xl font-semibold md:text-5xl sm:text-4xl lg:text-6xl text-center md:text-start">
          <span ref={typedRef}></span>
        </div>
        <div className="md:my-4 flex flex-col justify-center md:justify-start">
          <p className="md:text-2xl text-md text-center md:text-start font-semibold text-[#00cf5d] mb-2">
            Full Stack Engineer
          </p>
          <div className="flex flex-col justify-start mt-6 md:mt-none gap-3">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-[10px] h-[10px] rounded-full bg-green-600 md:hidden block"></div>
              <p className="md:text-xl md:hidden block">Software Engineer</p>
            </div>
            <p className="md:text-xl hidden md:block">Software Engineer</p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-[10px] h-[10px] rounded-full bg-green-600"></div>
              <p className="md:text-xl">Machine Learning</p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-[10px] h-[10px] rounded-full bg-green-600"></div>
              <p className="md:text-xl">Data Science</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 flex-col md:flex-row">
            <a
              href="/myResume/resume.pdf"
              target={"_blank"}
              className="px-5 py-3 text-xl text-white bg-green-600 border-none rounded-md "
            >
              Get Resume
            </a>
            <a
              href="#about"
              className="px-5 py-3 text-xl text-white transition duration-300 border-2 border-green-600 rounded-md hover:bg-green-600"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
