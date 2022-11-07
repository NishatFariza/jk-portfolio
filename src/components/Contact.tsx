import React from "react";

const Contact = () => {
  return (
    <div className="flex h-96 justify-between items-center">
      <div className="w-6/12">
        <p className="mb-5">
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know. Or you can just say hi to me.
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
