import React from "react";
import AboutPanel from "./AboutPanel";


const MobileAbout = () => {
  <div className="flex items-center justify-center mb-12">
    <div className="flex  justify-center items-center gap-1">
      <p className="text-[#DCDDDF] text-xl font-semibold bg-[#1D293A] py-1 px-2 rounded-md uppercase">
        About Me
      </p>
      <div className="w-[60px] h-1 bg-[#DCDDDF] rounded"></div>
    </div>
  </div>;
}

const About = () => {
  return (
    <div id="about" className="w-8/12 mx-auto ">
      <div className="text-center ">
        <AboutPanel />
        <p className="leading-loose text-justify">
          I am a second-year computer science student, aspiring Software
          Engineer, and Data Scientist with one year of experience performing
          Python, SQL, and R, in the software engineering industry at the
          University of North Carolina at Chapel Hill as an Undergraduate
          Research Assistant. I primarily helped with cleansing and sorting
          through datasets. My ambition is to one day help companies become more
          efficient in providing their products to consumers through data and
          developed code. My projects are built from the ground up, from
          planning and designing to solving real-life problems with code.
        </p>
        <div className="flex justify-center gap-4 mt-10">
          <a
            href="/myResume/resume.pdf"
            download={true}
            className="px-5 py-3 text-xl text-white bg-green-600 border-none rounded-md "
          >
            Get Resume
          </a>
          <a
            href="#skill"
            className="px-5 py-3 text-xl text-white transition duration-300 border-2 border-green-600 rounded-md hover:bg-green-600"
          >
            My Skill
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
