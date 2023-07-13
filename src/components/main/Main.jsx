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
          <motion.h1>Vadym Lanovenko</motion.h1>
          <motion.h2>Photo editor / Retoucher</motion.h2>
          <motion.p ref={nameRef} className="text-lg">
            I am a young and motivated professional with strong skills in photo
            editing and retouching. I have several years of experience working
            with graphic editing software such as Adobe Photoshop and Lightroom.
            Currently, I am seeking opportunities to further develop my career
            in the field of professional photography and image editing, where I
            can utilize my skills and creative potential.
            <br />
            <a
              href="https://v-l.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-2 text-xs transition-all rounded-lg hover:ring-2 ring-blue-400">
                <i className="pr-2 fa-solid fa-link "></i>Click here to see my
                latest resume updates
              </span>
            </a>
          </motion.p>
        </div>

        <WorkExperience />

        <Projects />

        <Education />

        <Training />
      </motion.main>
    </>
  );
};

export default Main;
