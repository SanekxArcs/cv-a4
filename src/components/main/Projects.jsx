import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const bgProjects = `hover-btn bg-gradient-to-br from-emerald-200 to-emerald-300  rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`;
  const bgProjectsSmall = `hover-btn bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`;

const projectsData = [
  {
    title: "Solar Sense",
    description: "Landing-page",
    features: [
      "Multi-Page Layout",
      "Fully Responsive",
      "PageSpeed 99-100",
      "Calculator",
      "Validation",
    ],
    technologies: [
      "Vite",
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "Host LH.pl",
    ],
    url: "http://solarsense.pl/",
  },
  {
    title: "LIBERTY IMMIGRATION",
    description: "Landing-page",
    features: [
      "Landing page",
      "Animation when element is visible",
      "Fully Responsive",
      "Contact form",
      "UA and BY languages",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Netlify",
      "JavaScript",
      "Hooks",
      "Animations",
    ],
    url: "https://l-i.netlify.app/",
  },
  {
    title: "Book List App",
    description: "SPA",
    features: [
      "Responsive",
      "Filter ",
      "Displays data from database",
      "Add / Edit / Update / Delete",
      "Toasts alerts",
    ],
    technologies: [
      "Html5",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Netlify",
      "Shadcn/ui",
    ],
    url: "https://main--demo-book-list.netlify.app/",
  },
];
const projectsData2 = [
  {
    title: "Accounting Employees SPA",
    url: "https://app-accounting-employees.netlify.app/",
  },
  {
    title: "Tip calculator for many peoples SPA",
    url: "https://tip-calculator-many-peoples.netlify.app/",
  },
  {
    title: "Sushi Shop SPA",
    url: "https://sushi-shop.netlify.app",
  },
  {
    title: "QR-Code vcard generator SPA",
    url: "https://qr-coge-vcard-generator.netlify.app",
  },
  {
    title: "FunQuest",
    url: "https://fq.ua/ru/",
  },
  {
    title: "Eco Smart",
    url: "https://web.archive.org/web/20220406230916/https://a8a.com.ua/works/internet-magazin-dlya-eco-smart/",
  },
  {
    title: "Club SmartMom",
    url: "https://web.archive.org/web/20220406231034/https://a8a.com.ua/works/portal-novin-dlya-klub-smart-mam/",
  },
  {
    title: "Plenum Law",
    url: "https://plenum.com.ua/en/",
  },
];


  return (
    <section id="projects" className="break-before-auto">
      <motion.details open>
        <summary className="flex">
          <h3 className="w-full mb-5 border-b cursor-pointer border-emerald-950/30">
            <i class="fa-solid fa-earth-americas pr-2"></i>
            Projects
          </h3>
        </summary>

        <motion.div className="grid gap-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-full p-5 transition-all rounded-md hover-btn bg-gradient-to-br from-emerald-200 dark:from-emerald-600 to-emerald-300 dark:to-emerald-700 top-2 animate-fadeIn">
                <h4 className="font-bold">{project.title}</h4>
                {project.description && (
                  <p className="">{project.description}</p>
                )}
                {project.features && (
                  <>
                    <p>Features:</p>
                    <ul className="flex flex-col gap-1 pl-5 list-disc">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-xs">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {project.technologies && (
                  <>
                    <p>This project technologies:</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((technology, index) => (
                        <li key={index} className={`loProjects`}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </a>
          ))}
          <div className="grid grid-cols-2 grid-rows-4 row-span-1 gap-2">
            {projectsData2.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center h-full px-5 text-center rounded-md hover-btn bg-gradient-to-br from-emerald-200 dark:from-emerald-600 to-emerald-300 dark:to-emerald-700 top-2 animate-fadeIn">
                  <h4 className="text-xs font-bold">{project.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.details>
    </section>
  );
};

export default Projects;
