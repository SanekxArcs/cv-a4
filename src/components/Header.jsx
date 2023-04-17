import React from "react";
import myPhoto from "../assets/ProfilePhoto.webp";
import myCv from "../assets/Oleksandr-Dzisiak.pdf";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ isOpen, onClickHandle, nameIsVisible, imageIsVisible }) => {
  const classForMobileBtn =
    "w-full hover:ring-2 rounded-md transition-all py-1 duration-300 ring-violet-400 ";

  return (
    <>
      <header
        className={`sticky z-10 flex items-center justify-between px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-gradient-to-br from-violet-400/30 to-violet-800/30 animate-fadeIn print:hidden relative h-14`}
      >
        <div className="flex items-center gap-2">
          {imageIsVisible ? (
            ""
          ) : (
            <img
              className="w-10 mx-auto "
              src={myPhoto}
              alt="Oleksandr Dzisiak photo"
            />
          )}
          {nameIsVisible ? (
            <p className="text-sm font-black">Resume / CV</p>
          ) : (
            <h3 className="text-sm font-black transition-all duration-500 ">
              Oleksandr Dzisiak <br />
              <span className="text-sm font-normal ">Frontend developer</span>
            </h3>
          )}
        </div>

        <div className="flex-row hidden gap-2 md:flex">
          <a
            className="flex flex-row items-center px-2 py-1 flex-nowrap hover-btn"
            target="_blank"
            href={myCv}
            download="Oleksandr Dzisiak Resume.pdf"
          >
            <i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV
          </a>
          <DarkModeToggle />
        </div>
        <nav className="flex h-6 gap-5 md:hidden">
          <button
            onClick={onClickHandle}
            className={`hover flex flex-col justify-between z-30 h-full px-2 py-1 bg-transparent rounded-md cursor-pointer`}
          >
            <span className="h-0.5 w-5 rounded-full bg-violet-800 dark:bg-violet-100"></span>
            <span className="h-0.5 w-5 rounded-full bg-violet-800 dark:bg-violet-100"></span>
            <span className="h-0.5 w-5 rounded-full bg-violet-800 dark:bg-violet-100"></span>
          </button>

          {/* Mobile menu */}
          <div
            onClick={onClickHandle}
            className={`${
              isOpen
                ? "absolute top-full left-0 right-0  mt-2 animate-fadeInDown rounded-md bg-gradient-to-br from-violet-400 to-violet-800 backdrop-blur-md dark:bg-violet-800/30 "
                : "hidden"
            }`}
            style={{top: "100%"}}
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
                  href={myCv}
                  download="Oleksandr Dzisiak Resume.pdf"
                >
                  <i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV
                </a>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
