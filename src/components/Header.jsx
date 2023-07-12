import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import myPhoto from "../assets/profile.png";
// import myCv from "../assets/Oleksandr-Dzisiak.pdf";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ isOpen, onClickHandle, nameIsVisible, imageIsVisible }) => {
  const classForMobileBtn =
    "w-full hover:ring-2 rounded-md transition-all py-1 duration-300 ring-blue-400 ";

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          initial={{ opacity: 0, scale: 0.5, y: -200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`sticky z-10 flex items-center justify-between px-4 py-2 m-2 rounded-md bg-gradient-to-br  from-blue-200/50 dark:from-blue-600/50 to-blue-300/50 dark:to-blue-700/50 backdrop-blur-md top-2  print:hidden relative max-h-14`}
        >
          <motion.div className="flex items-center gap-2">
            {imageIsVisible || (
              <motion.img
                key="profile"
                initial={{ opacity: 0, scale: 0.5, y: -200 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.5, y: -200 }}
                className="w-10 mx-auto"
                src={myPhoto}
                alt="Vadym Lanovenko photo"
              />
            )}
            {nameIsVisible ? (
              <motion.p
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 200 }}
                className="text-sm font-black"
              >
                Resume / CV
              </motion.p>
            ) : (
              <motion.h3
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-sm font-black transition-all duration-500 "
              >
                Vadym Lanovenko
                <br />
                <span className="text-sm font-normal ">
                  Photo editor / Retoucher
                </span>
              </motion.h3>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-row gap-2 md:flex"
          >
            <a
              className="flex-row items-center hidden px-2 py-1 flex-nowrap hover-btn md:flex"
              target="_blank"
              href=""
              download="Oleksandr Dzisiak Resume.pdf"
            >
              <i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV
            </a>
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>

            <button
              onClick={onClickHandle}
              className={`hover md:hidden flex flex-col justify-center h-full bg-transparent rounded-md cursor-pointer items-center`}
            >
              <span className="w-5 h-5">
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </span>
            </button>
          </motion.div>
        </motion.header>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: "-100vh" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute sticky overflow-hidden left-0 right-0 z-10 md:hidden top-[72px] rounded-md mx-2 bg-gradient-to-br  from-blue-200/50 dark:from-blue-600/50 to-blue-300/50 dark:to-blue-700/50 backdrop-blur-md`}
          >
            <ul
              className={`flex flex-col gap-2 items-center justify-center w-full h-full px-5 py-10 text-center font-semibold`}
            >
              <li className={classForMobileBtn}>
                <a href="#projects">Projects</a>
              </li>
              <li className={classForMobileBtn}>
                <a href="#work">Work Experience</a>
              </li>
              <li className={classForMobileBtn}>
                <a href="#education">Education</a>
              </li>
              <li className={classForMobileBtn}>
                <a href="#courses">Courses</a>
              </li>
              <li className={classForMobileBtn}>
                <a
                  target="_blank"
                  href=""
                  download="Oleksandr Dzisiak Resume.pdf"
                >
                  <i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV
                </a>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
