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

      <div className="  ">
        <h1 className="text-3xl font-bold mb-4 text-5xl">About Me</h1>
        <p className="mb-6 text-2xl w-full">
          I'm <span class="text-red">Harish SS</span>, a passionate developer
          who loves bringing ideas to life through clean code and intuitive
          design. Focused on building impactful, user-centered applications, I’m
          always ready to tackle new challenges and push the boundaries of
          what’s possible. Excited to keep learning, growing, and creating
          solutions that make a difference!
        </p>
        <div>
          <button> Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
