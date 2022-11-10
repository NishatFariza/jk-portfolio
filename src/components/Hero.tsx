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
        className=" flex flex-col justify-center items-start w-10/12 "
      >
        <span className="text-[#00cf5d] text-2xl mb-2">Hello! I am</span>
        <div className="text-6xl font-semibold mb-5 font-serif">
          <span ref={typedRef}></span>
        </div>
        <div className="my-4">
          <p className="text-2xl font-semibold text-[#00cf5d] mb-2">
            Full Stack Engineer
          </p>
          <div className="flex gap-3">
            <li className="list-none">Software Engineer</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
          </div>
          <div className="mt-4 flex gap-4">
            <button className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl ">
              Get Resume
            </button>
            <a
              href="#about"
              className="border-2 border-green-600 py-3 px-5 rounded-md text-white text-xl "
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
