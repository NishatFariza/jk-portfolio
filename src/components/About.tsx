import React from 'react'
import AboutPanel from './AboutPanel';

const About = () => {
  return (
    <div id="about" className="grid grid-cols-2 gap-3 relative">
      <div className=" flex flex-col justify-center ">
        <p className='leading-loose'>
          Second-year computer science student, aspiring SWE or Data Scientist,
          with one year of experience performing Python, SQL, and R, in software
          engineering. Second-year computer science student, aspiring SWE or
          Data Scientist, with one year of experience performing Python, SQL,
          and R, in software engineering.
        </p>
        <div className="mt-8 flex gap-4">
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

      <div className="">
        <img
          className="rounded-md"
          src="https://avatars.githubusercontent.com/u/109563164?v=4"
          alt="jj-profile"
        />
      </div>
      <AboutPanel />
    </div>
  );
}

export default About