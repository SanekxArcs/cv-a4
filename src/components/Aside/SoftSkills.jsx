import React from "react";
import { motion } from "framer-motion"
const SoftSkills = () => {
  return (
    <>
      <motion.div className="cursor-default select-none break-before-auto">
        <h3>Soft Skills</h3>
        <ul className="flex flex-col gap-1 text-base list-disc">
          <li>Effective interaction and exchange of information.</li>
          <li>Guiding and inspiring a group towards success.</li>
          <li>Innovative thinking and originality.</li>
          <li>Efficient allocation and utilization of time.</li>
          <li>Adjusting in different situations.</li>
          <li>Collaborative efforts towards a common goal.</li>
          <li>Finding solutions to challenges and obstacles.</li>
        </ul>
      </motion.div>
    </>
  );
};

export default SoftSkills;
