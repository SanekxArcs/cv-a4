import React from "react";
import myPhoto from "../assets/ProfilePhoto.webp";


const Header = ({isOpen, onClickHandle, nameIsVisible, imageIsVisible}) => {

  return (
    <>
      <header
        className={` sticky z-10 flex items-center justify-between px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn`}
      >
        <div className="flex items-center gap-2">
          {imageIsVisible ? (
            ""
          ) : (
            <img
              className="w-10 mx-auto animate-fadeInUp animate-duration-500"
              src={myPhoto}
              alt="Oleksandr Dzisiak photo"
            />
          )}
          {nameIsVisible ? (
            <p className="text-sm font-black">Resume / CV</p>
          ) : (
            <h3 className="text-sm font-black transition-all duration-500 animate-fadeInUp animate-duration-500">
              Oleksandr Dzisiak <br />
              <span className="text-sm font-normal ">Frontend developer</span>
            </h3>
          )}
        </div>

        <a className="flex-row items-center hidden px-2 py-1 flex-nowrap hover-btn md:flex"
          target="_blank"
          href="./Oleksandr_Dzisiak_CV_c.pdf"
          download=""
        ><i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV</a>
        <nav className="flex h-6 gap-5 md:hidden ">
          <button
            onClick={onClickHandle}
            className={`hover flex flex-col justify-between z-30 h-full px-2 py-1 bg-transparent rounded-md cursor-pointer`}
          >
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
          </button>
          <div
            onClick={onClickHandle}
            className={`${isOpen
              ? "absolute top-16 right-0 left-0 animate-fadeIn"
              : "hidden"
              }`}
          >
            <ul
              className={` flex flex-col gap-2 items-center justify-center w-full h-full px-5 py-10 rounded-md backdrop-blur-md bg-emerald-300/90 text-center font-semibold`}
            >
              <li
                className={`w-full hover:ring-2 rounded-md transition-all  py-1 duration-300 ring-emerald-400 `}
              >
                <a
                  className="animate-fadeInUp animate-duration-500"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li
                className={`w-full hover:ring-2 rounded-md transition-all  py-1 duration-300 ring-emerald-400 `}
              >
                <a
                  className="animate-fadeInUp animate-duration-500"
                  href="#work"
                >
                  Work Experience
                </a>
              </li>
              <li
                className={`w-full hover:ring-2 rounded-md transition-all  py-1 duration-300 ring-emerald-400 `}
              >
                <a
                  className="animate-fadeInUp animate-duration-500"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li
                className={`w-full hover:ring-2 rounded-md transition-all  py-1 duration-300 ring-emerald-400 `}
              >
                <a
                  className="animate-fadeInUp animate-duration-500"
                  href="#courses"
                >
                  Courses
                </a>
              </li>
              <li
                className={`w-full hover:ring-2 rounded-md transition-all py-1 duration-300 ring-emerald-400 `}
              >
                <a
                  target="_blank"
                  href="../assets/Oleksandr_Dzisiak_CV_c.pdf"
                  download=""
                ><i className="pr-2 fa-solid fa-file-arrow-down"></i>Save CV</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
