import React from "react";

function Navbar() {
  return (
    <header>
      <div className="fixed top-5 left-0 right-0 mx-auto w-fit flex justify-center z-50 rounded-3xl border p-2 font-medium border-red">
        <a
          href="#about"
          className="mx-4 text-center hover:text-red hover:duration-300 cursor-pointer text-white"
        >
          About
        </a>
        <a
          href="#skills"
          className="mx-4 text-center hover:text-red hover:duration-300 cursor-pointer text-white"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="mx-4 text-center hover:text-red hover:duration-300 cursor-pointer text-white"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="mx-4 text-center hover:text-red hover:duration-300 cursor-pointer text-white"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="mx-4 text-center hover:text-red hover:duration-300 cursor-pointer text-white"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
