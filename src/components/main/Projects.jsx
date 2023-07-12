import React from "react";
import { motion } from "framer-motion";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.jpg";
import img3 from "./../../assets/3.jpg";
import img4 from "./../../assets/4.jpg";
import img5 from "./../../assets/5.jpg";
import img6 from "./../../assets/6.jpg";
import img7 from "./../../assets/7.jpg";
import img8 from "./../../assets/8.jpg";

const Projects = () => {


  return (
    <section id="projects" className="break-before-auto">
      <motion.details open>
        <summary className="flex">
          <h3 className="w-full mb-5 border-b cursor-pointer border-blue-950/30">
            Done Samples
          </h3>
        </summary>

        <motion.div className="grid gap-4 lg:grid-cols-2 h-[450px]">
          <div className="grid gap-4 grid-cols-2 grid-rows-1 ">
            <img
              className="rounded-xl ring-2 overflow-hidden w-full h-full bg-cover"
              src={img1}
              alt=""
            />
            <img
              className="rounded-xl ring-2 overflow-hidden w-full h-full bg-cover"
              src={img2}
              alt=""
            />
          </div>

          <div className="grid gap-4 grid-cols-2 grid-rows-1 ">
            <img
              className="rounded-xl ring-2 overflow-hidden w-full h-full bg-cover"
              src={img7}
              alt=""
            />
            <img
              className="rounded-xl ring-2 overflow-hidden w-full h-full bg-cover"
              src={img4}
              alt=""
            />
          </div>

          <img
            className="rounded-xl ring-2 overflow-hidden shadow-md w-full h-full bg-cover"
            src={img3}
            alt=""
          />
          <img
            className="rounded-xl ring-2 overflow-hidden shadow-md w-full h-full bg-cover"
            src={img8}
            alt=""
          />
        </motion.div>
      </motion.details>
    </section>
  );
};

export default Projects;
