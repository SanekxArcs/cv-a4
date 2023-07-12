import React from "react";
import { motion } from "framer-motion";

const TechSkills = () => {
  const techs = [
    "Photoshop",
    "Lightroom",
    "Adobe Ilustrator",
    "Figma",
    "Premier Pro",
    "After Effects",
    "AI Promt Engineer",
    "Mid Jorney",
    "GPT-4",
    "and other ...",
  ];

  return (
    <>
      <motion.div className="select-none break-before-auto">
        <h3 className="select-none">Tech Skills</h3>
        <ul className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <li key={tech} className="liTechSkills hover-btn last:text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default TechSkills;
