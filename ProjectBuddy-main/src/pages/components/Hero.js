import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-between h-screen items-center px-48 font-merryweather">
      <div className="flex flex-col gap-5">
        <h1 className="uppercase text-8xl flex flex-col dark:text-otherWhite">
          <span>project</span>
          <span>buddy</span>
        </h1>
        <h2 className="text-black/50 text-xl flex gap-2 dark:text-otherWhite">
          <span>Collaborate. </span>
          <span>Innovate. </span>
          <span>Elevate. </span>
        </h2>
        <button className="uppercase bg-blue/80 px-5 py-3 rounded-full shadow-md w-fit text-white shadow-gray-500 dark:bg-otherWhite/20">
          find a project
        </button>
      </div>
      <div className="w-auto bg-otherBlue rounded-xl shadow-2xl shadow-gray-700 dark:bg-otherWhite/20 dark:shadow-none">
        <img className="w-auto"
          src="/Image1.png"
        />
      </div>
    </div>
  );
};
