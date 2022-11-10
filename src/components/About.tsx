import React from "react";
import AboutPanel from "./AboutPanel";

const About = () => {
  return (
    <div id="about" className="w-8/12 mx-auto ">
      <div className=" text-center ">
        <AboutPanel />
        <p className="leading-loose">
          My ambition is to one day help companies become more efficient in
          providing their products to consumers through use of data and
          developed code.
          <span className="leading-loose">
            All my projects are built from the ground up, from planning and
            designing to solving real-life problems with my code.
          </span>
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/myResume/resume.pdf"
            download={true}
            className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl "
          >
            Get Resume
          </a>
          <button className="border-2 border-green-600 py-3 px-5 rounded-md text-white text-xl ">
            My Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
