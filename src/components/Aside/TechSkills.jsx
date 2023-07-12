import React from "react";
import { motion } from "framer-motion";

const TechSkills = () => {
  const techs = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "ReactJS",
    "React Router",
    "Redux",
    "Vite",
    "Git/GitHub",
    "Netlify",
    "Vercel",
    "CMS platforms",
    "REST",
    "Ajax",
    "Figma",
    "AI",
    "Photoshop",
    "Lightroom",
    "Framer Motion",
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
