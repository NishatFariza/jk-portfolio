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
    <div className="relative flex justify-center h-[calc(100vh-120px)] ">
      <Panel />
      <div
        id="hero"
        className="flex flex-col items-center justify-center w-10/12 lg:items-start"
      >
        <span className="text-[#00cf5d] md:text-2xl mb-2">Hello! I am</span>
        <div className="mb-5 font-serif text-xl font-semibold md:text-6xl sm:text-3xl">
          <span ref={typedRef}></span>
        </div>
        <div className="my-4">
          <p className="text-2xl font-semibold text-[#00cf5d] mb-2">
            Full Stack Engineer
          </p>
          <div className="flex gap-3">
            <p className="text-xl">Software Engineer</p>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-green-600"></div>
              <p className="text-xl">Machine Learning</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-green-600"></div>
              <p className="text-xl">Data Science</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
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
