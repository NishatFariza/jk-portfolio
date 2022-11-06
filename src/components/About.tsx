import React from 'react'

const About = () => {
  return (
    <div className='flex justify-around'>
      <div className='w-6/12 flex flex-col justify-center '>
        <p>
          Second-year computer science student, aspiring SWE or Data Scientist,
          with one year of experience performing Python, SQL, and R, in software
          engineering.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl ">
            Get Resume
          </button>
          <button className="border-2 border-green-600 py-3 px-5 rounded-md text-white text-xl ">
            My Skill
          </button>
        </div>
      </div>
 
        <img className='rounded-md'
          src="https://avatars.githubusercontent.com/u/109563164?v=4"
          alt="jj-profile"
        />
   
    </div>
  );
}

export default About