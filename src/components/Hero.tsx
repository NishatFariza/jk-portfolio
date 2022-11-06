import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "JJ Krasnick",
        "I love to find new solutions through machine learning!",
      ],
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
    <div className="h-screen flex flex-col justify-center items-start ml-8">
      <span className="text-[#00cf5d] text-2xl">Hello! I am</span>
      <div className="text-5xl font-semibold mb-3">
        <span ref={typedRef}></span>
      </div>
      <div className="my-3">
        <p className="text-2xl font-semibold text-[#00cf5d]">
          Full Stack Engineer
        </p>
        <div className="flex gap-3">
          <li className="list-none">Software Engineer</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
        </div>
      </div>
    </div>
  );
};

export default Hero;
