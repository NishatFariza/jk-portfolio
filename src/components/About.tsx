import React from "react";
import AboutPanel from "./AboutPanel";

const About = () => {
  return (
    <div id="about" className="w-8/12 mx-auto ">
      <div className=" text-center ">
        <AboutPanel />
        <p className="leading-loose text-justify">
          I am a second-year computer science student, aspiring Software Engineer, and Data Scientist with one year of experience performing Python, SQL, and R, in the software engineering industry at the University of North Carolina at Chapel Hill as an Undergraduate Research Assistant. I primarily helped with cleansing and sorting through datasets. My ambition is to one day help companies become more efficient in providing their products to consumers through data and
          developed code. My projects are built from the ground up, from planning and designing to solving real-life problems with code.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/myResume/resume.pdf"
            download={true}
            className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl "
          >
            Get Resume
          </a>
          <a href="#skill" className="border-2 border-green-600 py-3 px-5 rounded-md text-white text-xl ">
            My Skill
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
