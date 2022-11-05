import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Hello, I am Rayhan", "I love to watch tutorial!!"],
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
    <div className="text-3xl font-semibold">
      <span ref={typedRef}></span>
    </div>
  );
};

export default Hero;
