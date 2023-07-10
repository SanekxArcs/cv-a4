import React from "react";
import { motion } from "framer-motion"
const SoftSkills = () => {
  return (
    <>
      <motion.div className="cursor-default select-none break-before-auto">
        <h3>Soft Skills</h3>
        <ul className="flex flex-col gap-1">
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
          <li>Adaptability</li>
          <li>Time management</li>
          <li>Creativity</li>
          <li>Leadership skills</li>
        </ul>
      </motion.div>
    </>
  );
};

export default SoftSkills;
