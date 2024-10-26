import React from "react";

function Navbar() {
  return (
    <header>
      <div className="fixed top-5 left-0 right-0 mx-auto w-fit flex justify-center z-50 rounded-3xl border p-2  font-medium border-red">
        <a href="" className="flex-none w-24 text-center text-white">
          About
        </a>
        <a href="#projects" className="flex-none w-20 text-center text-white">
          Projects
        </a>
        <a href="#skills" className="flex-none w-24 text-center text-white">
          Skills
        </a>
        <a href="#experience" className="flex-none w-24 text-center text-white">
          Experience
        </a>
        <a href="#contact" className="flex-none w-28 text-center text-white">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
