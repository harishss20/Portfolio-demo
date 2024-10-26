import React from "react";

const About = () => {
  return (
    <div className="flex items-center w-full text-white">
      <div className="flex-none space-x-4 mr-12">
        <a
          href="https://linkedin.com/in/harishssdev"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src="public/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10 rounded-xl"
          />
        </a>
        <a
          href="https://github.com/harishss20"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src="public/github.jpg"
            alt="GitHub"
            className="w-10 h-10 rounded-xl"
          />
        </a>
        <a
          href="https://discord.com/users/850297354862198814"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src="public/discord.png"
            alt="discord"
            className="w-10 h-10 rounded-xl text-white"
          />
        </a>
      </div>
      <div className="flex-none mr-20 ">
        <img
          src="public/profile.jpg"
          alt="Harish SS"
          className="w-80 h-80 object-cover"
        />
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="flex  text-3xl font-bold mb-4 text-5xl">About Me</h1>
        <p className="mb-6 text-lg w-full">
          I'm <span class="text-red">Harish SS</span>, a passionate developer
          dedicated to transforming ideas into reality through clean code and
          intuitive design. My focus is on crafting impactful, user-centered
          applications that make a difference. I thrive on tackling new
          challenges and pushing the boundaries of what’s possible. Always eager
          to learn and grow, I'm excited to create innovative solutions that
          elevate user experiences.
        </p>
        <button class="flex ">
          <img src="public/download.png " alt="my image" class="w-6 h-6 mr-2" />
          Resume
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default About;
