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
          <motion.h1 className="">Oleksandr Dzisiak</motion.h1>
          <motion.h2 className="">Frontend developer</motion.h2>
          <motion.p ref={nameRef} className="text-lg">
            I am a highly <b>motivated</b> professional with a passion for
            creating visually appealing and user-friendly web applications. My
            expertise encompasses effective interaction and exchange of
            information to ensure seamless communication. I excel in
            collaborative efforts towards a common goal, demonstrating teamwork
            that guides and inspires a group towards success. <br /> In addition
            to my proficiency in
            <b> HTML, CSS, JavaScript </b>, I specialize in finding solutions to
            challenges and obstacles, showcasing my adaptability and
            problem-solving skills. Also i have experience with popular
            frameworks such as <b>React.js</b> . <br /> Time management is
            another forte, as I am adept at efficient allocation and utilization
            of time, ensuring timely delivery of high-quality work. Beyond this,
            I actively seek to learn and integrate new technologies, reflecting
            my dedication to continuous improvement.
            <br />
            <a
              href="https://o-d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-2 text-xs transition-all rounded-lg hover:ring-2 ring-emerald-400">
                <i className="pr-2 fa-solid fa-link "></i>Click here to see my{" "}
                <b>full</b> and latest resume updates
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
