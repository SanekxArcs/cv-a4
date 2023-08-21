import React from "react";
import { motion } from "framer-motion";

const TechSkills = () => {
  const techs = [
    "HTML",
    "CSS",
    "SASS/LESS",
    "JavaScript",
    "TypeScript",
    "React.JS",
    "Redux",
    "Git/GitHub",
    "Firebase",
    "Figma",
    "Photoshop",
    "AI",
    "Other ...",
  ];

  return (
    <>
      <motion.div className="select-none break-before-auto">
        <h3 className="select-none">
          <i class="fa-solid fa-laptop-code pr-2"></i>Tech Skills
        </h3>
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
