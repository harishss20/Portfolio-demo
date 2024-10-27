import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center w-full text-white p-4"
    >
      <div className="flex-none md:flex-col space-x-4 md:mr-12 mb-4 md:mb-0">
        <a
          href="https://linkedin.com/in/harishssdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="public/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
        <a
          href="https://github.com/harishss20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="public/github.jpg"
            alt="GitHub"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
        <a
          href="https://x.com/Harishssdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="public/twitter.png"
            alt="Discord"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
      </div>

      <div id="Animation-Profile" className="flex-none mb-4 md:mr-20">
        <img
          src="public/profile.jpg"
          alt="Harish SS"
          className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-lg"
        />
      </div>

      {/* About Text */}
      <div className="flex flex-col min-h-screen md:justify-center items-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 hover:text-red md:mb-4">
          About Me
        </h1>
        <p className="text-base md:text-lg mb-4 w-full md:w-auto">
          I'm <span className="text-red">Harish SS</span>, a passionate
          developer committed to bringing innovative ideas to life with elegant
          code and captivating design. My focus is on crafting impactful,
          user-centered applications that make a difference. I thrive on
          tackling new challenges and pushing the boundaries of what’s possible.
          Always eager to learn and grow, I'm excited to create innovative
          solutions that elevate user experiences.
        </p>
        <button className="flex">
          <img
            src="public/download.png"
            alt="Download"
            className="w-6 h-6 mr-2"
          />
          Resume
        </button>
      </div>
    </div>
  );
};

export default About;
