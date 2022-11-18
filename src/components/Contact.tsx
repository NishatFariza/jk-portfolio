import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex py-28 justify-between items-center gap-10"
    >
      <div className="w-7/12">
        <p className="mb-8 leading-loose">
          I am thrilled about opportunities and challenges that allow me to
          utilize my skills so I can help turn data and numbers into easily
          quantifiable metrics. I did love to be able to use my insights to help
          drive growth within a team and a company, if this sounds like you
          please feel free to contact me!
        </p>
        <button className="border-none bg-green-600 py-3 px-5 rounded-md text-white text-xl">
          Contact Me
        </button>
      </div>
      <div className="w-4/12">
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold ">Email</h5>
          <p className="text-slate-400">
            jjkrasnick23@gmail.com
            {/* <span className="text-green-200">(Recommended)</span> */}
          </p>
        </div>
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold">LinkedIn</h5>
          <Link
            href="https://www.linkedin.com/in/jjkrasnick/"
            target={"_b"}
            className="text-slate-400"
          >
            jjkrasnick
          </Link>
        </div>
        <div className="mb-3">
          <h5 className="text-2xl text-stone-200 font-semibold">GitHub</h5>
          <Link
            href="https://github.com/jjkrasnick"
            target={"_b"}
            className="text-slate-400"
          >
            jjkrasnick
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
