import React from "react";
import Products from "./Utils.jsx";

function Experience() {
  return (
    <>
      <div id="experience">
        <h1 className="text-3xl w-20 mt-40 md:text-5xl font-bold mb-12 hover:text-red duration-300">
          Projects
        </h1>
        <div
          id="Experiences"
          className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0"
        >
          {Products.map((pro) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={pro.id}
            >
              <a href="">
                <img className="rounded-t-lg" src={pro.img} alt="" />
              </a>
              <div className="p-5">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pro.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {pro.disc}
                </p>
                <a
                  href={pro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg border"
                >
                  Github
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
