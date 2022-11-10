import React from "react";

const Contact = () => {
  return (
    <div className="flex h-96 justify-between items-center">
      <div className="w-6/12">
        <p className="mb-5 leading-loose">
          I am thrilled about opportunities and challenges that allow me to utilize my skills so I can help turn data and numbers into easily quantifiable metrics. I did love to be able to use my insights to help drive growth within a team and a company, if this sounds like you please feel free to contact me!
        </p>
        <button className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl">
          Contact Me
        </button>
      </div>
      <div className="w-5/12">
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold ">Email</h5>
          <p className="text-slate-400">
            jjkrasnick23@gmail.com
            {/* <span className="text-green-200">(Recommended)</span> */}
          </p>
        </div>
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold">LinkedIn</h5>
          <a
            href="https://www.linkedin.com/in/jjkrasnick/"
            className="text-slate-400"
          >
            jjkrasnick
          </a>
        </div>
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold">GitHub</h5>
          <a href="https://github.com/jjkrasnick" className="text-slate-400">
            jjkrasnick
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
