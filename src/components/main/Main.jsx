import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Education from "./Education/Education";
import Training from "./Training";

const Main = ({ nameRef }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={true}
        className="flex flex-col col-span-2 gap-10 px-5"
      >
        <div id="top" className="hidden select-none md:block">
          <motion.h1>Oleksandr Dzisiak</motion.h1>
          <motion.h2>Frontend developer</motion.h2>
          <motion.p ref={nameRef} className="text-lg">
            I am a highly motivated <b>developer</b> with a passion for creating
            visually appealing and user-friendly web applications. My skills
            include proficiency in
            <b> HTML, CSS, JavaScript,</b> as well as experience with popular
            frameworks such as <b>React.js</b>. I am always eager to learn new
            technologies and stay current with industry trends. I am a quick
            learner and a team player, and I am dedicated to delivering
            high-quality work on time. And i love to refactor code and
            constantly learn new things in JS,
            <b> love to write code</b> and see the results of my efforts. <br />
            <a
              href="https://o-d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-2 text-xs transition-all rounded-lg hover:ring-2 ring-emerald-400">
                <i className="pr-2 fa-solid fa-link "></i>Click here to see my
                latest resume updates
              </span>
            </a>
          </motion.p>
        </div>

        <Projects />

        <WorkExperience />

        <Education />

        <Training />
      </motion.main>
    </>
  );
};

export default Main;
