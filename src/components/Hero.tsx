import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "JJ Krasnick",
        "I love to learn Computer Science!!",
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
    <div className="h-screen flex flex-col justify-center items-start">
      <span>Hello, I am</span>
      <div className="text-5xl font-semibold mb-3">
        <span ref={typedRef}></span>
      </div>
      <div className="flex">
        <li>Software Engineer</li>
        <li>Machine Learning</li>
        <li>Data Science</li>
      </div>
    </div>
  );
};

export default Hero;
