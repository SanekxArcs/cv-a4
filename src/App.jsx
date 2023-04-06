import { useState } from "react";
import { useInView } from "react-intersection-observer";

import myPhoto from "./assets/ProfilePhoto.webp";
import qrCodePng from "./assets/qr-code.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: nameRef, inView: nameIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: workRef, inView: workIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: educationRef, inView: educationIsVisible } = useInView({
    threshold: 0,
  });
  const { ref: coursesRef, inView: coursesIsVisible } = useInView({
    threshold: 0,
  });

  const onClickHandle = () => {
    setIsOpen(!isOpen);
  };

  const h3 = "text-2xl font-medium pb-2";
  const h3WE =
    "w-full text-3xl font-medium pb-2 border-b border-emerald-950/30 mb-5 mt-5 md:mt-0";
  const h4 = "text-xl font-medium pb-1";
  const h5 = "text-lg";
  const h6 = "text-sm font-light";
  const ul = "pl-5 list-disc";
  const hover =
    "hover:ring-2 hover:ring-offset-2 hover:ring-emerald-500 hover:ring-offset-emerald-50 transition-all duration-200 rounded-md";

  const p = "text-lg";
  const date = "font-light";
  const liContacts = `flex flex-row gap-2 items-center px-2 py-0.5 backdrop-blur-md
    ${hover}`;
  const loProjects =
    "rounded-full px-1 ring-1 ring-emerald-600 bg-emerald-100 text-emerald-950 text-xs";
  const liTechSkills = `px-2 py-0.5 rounded-md bg-emerald-200/50 backdrop-blur-md ${hover}`;

  return (
    <div className="max-w-[1280px] mx-auto">
      <header
        className={` sticky z-10 flex items-center justify-between px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn`}
      >
        <div className="flex gap-2 items-center">
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
            <p className="font-black text-sm">Resume / CV</p>
          ) : (
            <h3 className="font-black text-sm animate-fadeInUp animate-duration-500 transition-all duration-500">
              Oleksandr Dzisiak <br />
              <span className=" font-normal text-sm ">Frontend developer</span>
            </h3>
          )}
        </div>
        
        <a className="flex-row flex-nowrap items-center px-2 py-1 transition-all duration-200 rounded-md hover:ring-2 hover:ring-emerald-500 hidden md:flex"
                  target="_blank"
                  href="./Oleksandr_Dzisiak_CV_c.pdf"
                  download=""
                ><i class="fa-solid fa-file-arrow-down pr-2"></i>Save CV</a>
        <nav className="flex gap-5 md:hidden h-6 ">
          <button
            onClick={onClickHandle}
            className={`${hover} flex flex-col justify-between z-30 h-full px-2 py-1 bg-transparent rounded-md cursor-pointer`}
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
                  href="./Oleksandr_Dzisiak_CV_c.pdf"
                  download=""
                ><i class="fa-solid fa-file-arrow-down pr-2"></i>Save CV</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="grid md:grid-cols-3">
        <aside className="flex flex-col gap-5 px-5">
          <img
            ref={imageRef}
            className="h-32 w-32 my-2 md:h-52 md:w-52 mx-auto animate-fadeIn animate-duration-500 md:my-12"
            src={myPhoto}
            alt="Oleksandr Dzisiak photo"
          />

          <div className={`animate-fadeIn animate-duration-500`}>
            <details open className="">
              <summary className="flex cursor-pointer marker:hidden">
                <h3 className={h3}>Contacts</h3>
              </summary>
              <ul className={` flex flex-col items-start justify-start gap-2`}>
                <li className={`${liContacts} text-sm lg:text-base`}>
                  <i className="fa-solid fa-at"></i>
                  <a href="mailto:oleksandr.dzisiak@gmail.com">
                    oleksandr.dzisiak@gmail.com
                  </a>
                </li>
                <li className={liContacts}>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+48 735 145 620">+48 735 145 620</a>
                </li>
                <li className={liContacts}>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+380 961 016 968">+380 961 016 968</a>
                </li>
                <li className={liContacts}>
                  <i className="fa-solid fa-location-dot"></i>
                  <a
                    href="https://goo.gl/maps/FBqjq7pZKCouV9hr6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Poland
                  </a>
                </li>
              </ul>
            </details>
          </div>

          <div>
            <h3 className={h3}>Tech Skills</h3>
            <ul className="flex flex-wrap gap-2">
              <li className={liTechSkills}>HTML5</li>
              <li className={liTechSkills}>CSS3</li>
              <li className={liTechSkills}>Tailwind CSS</li>
              <li className={liTechSkills}>SCSS</li>
              <li className={liTechSkills}>Bootstrap</li>
              <li className={liTechSkills}>JavaScript</li>
              <li className={liTechSkills}>TypeScript</li>
              <li className={liTechSkills}>jQuery</li>
              <li className={liTechSkills}>ReactJS</li>
              <li className={liTechSkills}>React Router</li>
              <li className={liTechSkills}>Redux</li>
              <li className={liTechSkills}>Gatsby</li>
              <li className={liTechSkills}>Vite</li>
              <li className={liTechSkills}>Git/GitHub</li>
              <li className={liTechSkills}>WebPack</li>
              <li className={liTechSkills}>Netlify</li>
              <li className={liTechSkills}>Vercel</li>
              <li className={liTechSkills}>CMS platforms</li>
              <li className={liTechSkills}>REST</li>
              <li className={liTechSkills}>Ajax</li>
              <li className={liTechSkills}>Figma</li>
              <li className={liTechSkills}>AI</li>
              <li className={liTechSkills}>Photoshop</li>
              <li className={liTechSkills}>Lightroom</li>
              <li className={liTechSkills}>Framer Motion</li>
            </ul>
          </div>

          <div className="select-none">
            <h3 className={h3}>Soft Skills</h3>
            <ul className="flex flex-col gap-1 select-none">
              <li className="select-none">Communication</li>
              <li>Teamwork</li>
              <li>Problem-solving</li>
              <li>Adaptability</li>
              <li>Time management</li>
              <li>Creativity</li>
              <li>Leadership skills</li>
            </ul>
          </div>

          <div>
            <h3 className={h3}>Languages</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <clipPath id="svgIDa">
                    <circle cx="256" cy="256" r="256"></circle>
                  </clipPath>
                  <g clipPath="url(#svgIDa)">
                    <path
                      fill="#eee"
                      d="m0 0l8 16l-8 15v16l32 65l-32 64v32l32 48l-32 48v32l32 64l-32 65v47l16-8l15 8h16l65-32l64 32h32l48-32l48 32h32l64-32l65 32h47l-8-15l8-16v-16l-32-65l32-64v-32l-32-48l32-48v-32l-32-64l32-65V0l-15 8l-16-8h-16l-65 32l-64-32h-32l-48 32l-48-32h-32l-64 32L47 0H0z"
                    ></path>
                    <path
                      fill="#0052b4"
                      d="m47 0l129 129V0Zm289 0v129L465 0ZM0 47v129h129Zm512 0L383 176h129ZM0 336v129l129-129Zm383 0l129 129V336Zm-47 47v129h129zm-160 0L47 512h129Z"
                    ></path>
                    <path
                      fill="#d80027"
                      d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"
                    ></path>
                    <path
                      fill="#d80027"
                      d="m336 336l176 176v-31L367 336Zm0-160L512 0h-31L336 145Zm-160 0L0 0v31l145 145zm0 160L0 512h31l145-145Z"
                    ></path>
                  </g>
                </svg>
                English - B1
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <mask id="circleFlagsPl0">
                    <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                  </mask>
                  <g mask="url(#circleFlagsPl0)">
                    <path
                      fill="#d80027"
                      d="m0 256l256.4-44.3L512 256v256H0z"
                    ></path>
                    <path fill="#eee" d="M0 0h512v256H0z"></path>
                  </g>
                </svg>
                Poland - C1
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <mask id="circleFlagsUa0">
                    <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                  </mask>
                  <g mask="url(#circleFlagsUa0)">
                    <path
                      fill="#ffda44"
                      d="m0 256l258-39.4L512 256v256H0z"
                    ></path>
                    <path fill="#338af3" d="M0 0h512v256H0z"></path>
                  </g>
                </svg>
                Ukrainian - Native
              </li>
            </ul>
          </div>

          <div>
            <h3 className={h3}>Links</h3>
            <ul className="flex flex-col gap-1">
              <li className={liContacts}>
                <i className="fa-brands fa-github"></i>
                <a
                  href="https://github.com/SanekxArcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li className={liContacts}>
                <i className="fa-brands fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/od-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className={liContacts}>
                <i className="fa-brands fa-telegram"></i>
                <a
                  href="https://t.me/Sanekx_Arcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li className={liContacts}>
                <i className="fa-brands fa-linkedin"></i>
                <a
                  href="https://wa.me/qr/DISE7CCEVP5JJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsUp
                </a>
              </li>
              <li className={liContacts}>
                <i className="fa-brands fa-facebook-messenger"></i>
                <a
                  href="https://m.me/sanekx.arcs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta Messenger
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={h3}>Interests</h3>
            <ul className="flex flex-col gap-1">
              <li>Development</li>
              <li>3D Modeling</li>
              <li>Snowboarding</li>
              <li>Tennis</li>
              <li>Racing</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className={h3}>VCARD</h3>
            <a
              href="https://qr-coge-vcard-generator.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={`${hover} max-w-56 max-h-56 mix-blend-multiply`}
                src={qrCodePng}
                alt=""
              />
            </a>
          </div>
        </aside>

        <main className="flex flex-col col-span-2 gap-10 px-5">
          <div id="top" className="hidden md:block">
            <h1 className="pb-0 text-6xl font-medium">Oleksandr Dzisiak</h1>
            <h2 className="pb-3 text-4xl">Frontend developer</h2>
            <p ref={nameRef} className="text-lg">
              I am a highly motivated <b>developer</b> with a passion for
              creating visually appealing and user-friendly web applications. My
              skills include proficiency in
              <b> HTML, CSS, JavaScript,</b> as well as experience with popular
              frameworks such as <b>React.js</b>. I am always eager to learn new
              technologies and stay current with industry trends. I am a quick
              learner and a team player, and I am dedicated to delivering
              high-quality work on time. And i love to refactor code and
              constantly learn new things in JS,
              <b> love to write code</b> and see the results of my efforts.
            </p>
          </div>

          <section ref={projectsRef} id="projects">
            <details open>
              <summary className="flex">
                <h3 className={h3WE}>Projects</h3>
              </summary>

              <div className="grid lg:grid-cols-2 gap-2">
                <a
                  href="http://solarsense.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                  >
                    <h4 className="font-bold">Solar Sense</h4>
                    <p className="">Landing-page</p>
                    <p>Features:</p>
                    <ul className="flex flex-col gap-1 list-disc pl-5">
                      <li className="text-xs">Multi-Page Layout</li>
                      <li className="text-xs">Fully Responsive</li>
                      <li className="text-xs">PageSpeed 99-100</li>
                      <li className="text-xs">
                        Next step transform to Corporate
                      </li>
                    </ul>
                    <p>This project technologies:</p>
                    <ul className="flex gap-2 flex-wrap">
                      <li className={loProjects}>React.js</li>
                      <li className={loProjects}>Tailwind CSS</li>
                      <li className={loProjects}>Host LH.pl</li>
                      <li className={loProjects}>JavaScript</li>
                      <li className={loProjects}>React Router</li>
                      <li className={loProjects}>Vite</li>
                    </ul>
                  </div>
                </a>

                <a
                  href="https://l-i.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                  >
                    <h4 className="font-bold">LIBERTY IMMIGRATION</h4>
                    <p className="">Landing-page</p>
                    <p>Features:</p>
                    <ul className="flex flex-col gap-1 list-disc pl-5">
                      <li className="text-xs">Multi-language page</li>
                      <li className="text-xs">
                        `animate-fadeIn animate-duration-500`s on visible
                      </li>
                      <li className="text-xs">Fully Responsive</li>
                      <li className="text-xs">Contact form</li>
                    </ul>
                    <p>This project technologies:</p>
                    <ul className="flex gap-2 flex-wrap">
                      <li className={loProjects}>React.js</li>
                      <li className={loProjects}>Tailwind CSS</li>
                      <li className={loProjects}>Netlify</li>
                      <li className={loProjects}>Tailwind CSS</li>
                    </ul>
                  </div>
                </a>

                <a
                  href="http://whatismyscreenresolution.net/multi-screen-test?site-url=https://uwp-digital.netlify.app/&w=1920&h=1080"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                  >
                    <h4 className="font-bold">UWP-DIGITAL</h4>
                    <p className="">Corporate</p>
                    <p>Features:</p>
                    <ul className="flex flex-col gap-1 list-disc pl-5">
                      <li className="text-xs">FullHD Responsive</li>
                      <li className="text-xs">Pixel-Perfect</li>
                      <li className="text-xs">Modals</li>
                      <li className="text-xs">Slider</li>
                      <li className="text-xs">Contact Form</li>
                    </ul>
                    <p className="pb-1">This project technologies:</p>
                    <ul className="flex flex-wrap gap-1">
                      <li className={loProjects}>Html5</li>
                      <li className={loProjects}>JavaScript</li>
                      <li className={loProjects}>jQuery</li>
                      <li className={loProjects}>Netlify</li>
                      <li className={loProjects}>Tailwind CSS</li>
                    </ul>
                  </div>
                </a>

                <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
                  <a
                    href="https://app-accounting-employees.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                    >
                      <h4 className="font-bold">Accounting Employees SPA</h4>
                    </div>
                  </a>
                  <a
                    href="https://tip-calculator-many-peoples.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                    >
                      <h4 className="font-bold">
                        Tip calculator for many peoples SPA
                      </h4>
                    </div>
                  </a>
                  <a
                    href="https://sushi-shop.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                    >
                      <h4 className="font-bold">Sushi Shop SPA</h4>
                    </div>
                  </a>
                  <a
                    href="https://qr-coge-vcard-generator.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`${hover} bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                    >
                      <h4 className="font-bold">QR-Code vcard generator SPA</h4>
                    </div>
                  </a>
                </div>
              </div>
            </details>
          </section>

          <section ref={workRef} id="work">
            <details open className="flex flex-col gap-5">
              <summary className="flex cursor-pointer ">
                <h3 className={h3WE}>Work experience</h3>
              </summary>

              <div className="flex flex-col gap-5">
                <div>
                  <h4 className={h4}>Frontend developer</h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>Solar Sense
                    Krzysztof Gutter
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Warsaw
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>03.2022 – Now
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>Create design and landing-page solarsense.pl</li>
                    <li>In-proces</li>
                    <li>
                      Ensuring compatibility with various web browsers and
                      devices
                    </li>
                    <li>Monitoring website traffic and analyzing data</li>
                    <li>Making updates and changes based on data analysis</li>
                    <li>Troubleshooting issues that arise</li>
                    <li>Providing technical support to users</li>
                    <li>
                      Working with a team of developers, designers, and project
                      managers
                    </li>
                    <li>
                      Collaborating with clients to understand their needs and
                      goals for the website.
                    </li>
                  </ul>
                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a href="https://solarsense.pl/">solarsense.pl</a>
                  </div>
                </div>

                <div>
                  <h4 className={h4}>Frontend developer</h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>Best Solution
                    Eco Sp. z o. o.
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Warsaw
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>07.2022 –
                    03.2023
                  </p>

                  <details open>
                    <summary className="flex cursor-pointer">
                      <h6 className={h6}>Short job Description:</h6>
                    </summary>
                    <ul className="pl-5 list-disc">
                      <li>
                        Maintaining and updating the website to ensure proper
                        and efficient functioning
                      </li>
                      <li>Fixing bugs and adding new features</li>
                      <li>
                        Ensuring compatibility with various web browsers and
                        devices
                      </li>
                      <li>Monitoring website traffic and analyzing data</li>
                      <li>Making updates and changes based on data analysis</li>
                      <li>Troubleshooting issues that arise</li>
                      <li>Providing technical support to users</li>
                      <li>
                        Working with a team of developers, designers, and
                        project managers
                      </li>
                      <li>
                        Collaborating with clients to understand their needs and
                        goals for the website.
                      </li>
                    </ul>
                  </details>

                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a href="http://bestsolution.eco/">bestsolution.eco</a>
                  </div>
                </div>

                <div>
                  <h4 className={h4}>
                    <span className=" text-sm text-emerald-950/70">from </span>
                    Electrician
                    <span className=" text-sm text-emerald-950/70"> to </span>
                    Electrical Engineer
                  </h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>
                    BANKIER GROUP sp. z o.o. GREEN SMART ENERGY sp. k.
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Poland
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>02.2020 –
                    06.2022
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li></li>
                  </ul>
                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a
                      href="https://gse.info.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      gse.info.pl
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className={h4}>
                    <span className=" text-sm text-emerald-950/70">from </span>
                    Trainee Frontend Developer
                    <span className=" text-sm text-emerald-950/70"> to </span>
                    Junior
                  </h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>A&A Web and
                    App solutions
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Ukraine,
                    Kiev
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>01.2019 –
                    11.2020
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>Use HTML, CSS, and JavaScript to build websites</li>
                    <li>
                      Use CSS preprocessors such as SASS or LESS to write more
                      efficient CSS code
                    </li>
                    <li>
                      Test and debug website across multiple browsers and
                      devices
                    </li>
                    <li>Optimize website for performance and SEO</li>
                    <li>
                      Work closely with back-end developers to ensure seamless
                      integration of frontend and back-end functionality
                    </li>
                    <li>
                      Eight projects were made, which includes an online store,
                      a forum, a landing pages, and a business card sites
                    </li>
                  </ul>
                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a
                      href="https://web.archive.org/web/20220530091720/https://a8a.com.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      a8a.com.ua
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className={h4}>
                    <span className=" text-sm text-emerald-950/70">from </span>
                    IT Support
                    <span className=" text-sm text-emerald-950/70"> to </span>
                    Department manager
                  </h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>
                    Dnipropetrovsk Opera and Ballet Theatre
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Ukraine,
                    Dnipro
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>01.2018 –
                    12.2018
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>03.2018 Department manager</li>
                    <li>
                      Create new and maintenance of the main website of the
                      theater.
                    </li>
                  </ul>
                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a
                      href="https://web.archive.org/web/20210620145435/https://www.opera-ballet.com.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      opera-ballet.com.ua
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className={h4}>
                    <span className=" text-sm text-emerald-950/50">from </span>
                    Warehouseman
                    <span className=" text-sm text-emerald-950/50"> to </span>
                    Department manager
                  </h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>AKS!
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Russia,
                    Sankt-Petersburg
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>01.2018 –
                    12.2018
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>03.2018 Department manager</li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </li>
                  </ul>
                  <div className={hover}>
                    <i className="fa-solid fa-globe pr-2"></i>
                    <a
                      href="http:///"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      aks-market.ru
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className={h4}>
                    Employee of the desalination plant department
                    <span className=" text-sm text-emerald-950/50">from </span>
                    V3
                    <span className=" text-sm text-emerald-950/50"> to </span>
                    V5
                  </h4>
                  <h5 className={h5}>
                    <i className="pr-2 fa-regular fa-building"></i>Khmelnitsk
                    nuclear power plant
                  </h5>
                  <p className={p}>
                    <i className="fa-solid fa-location-dot pr-2"></i>Ukraine,
                    Netishyn
                  </p>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>01.2018 –
                    12.2018
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>03.2018 Department manager</li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </section>

          <section ref={educationRef} id="education">
            <details open>
              <summary className="flex w-full cursor-pointer ">
                <h3 className={h3WE}>Education</h3>
              </summary>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className={h4}>
                    National Technikal University of Ukraine "Igor Sikorsky Kyiv
                    Politechnic Institute
                  </h4>
                  <p className={p}>
                    <span className=" text-lg font-medium">
                      Specialization:
                    </span>
                    Electrikal Engineering and Electrotechnics
                  </p>
                </div>

                <div>
                  <h4 className={h4}>
                    Kyiv College of Energy Politechnic Institute
                  </h4>
                  <p className={p}>
                    <span className=" text-lg font-medium">
                      Specialization:
                    </span>
                    Maintenance of automated power equipment in power plants
                  </p>
                </div>

                <div>
                  <h4 className={h4}>Netishyn School №3</h4>
                  <p className={p}>
                    <span className=" text-lg font-medium">
                      Specialization:
                    </span>
                    Philology
                  </p>
                </div>
              </div>
            </details>
          </section>

          <section ref={coursesRef} id="courses">
            <details open>
              <summary className="flex w-full cursor-pointer ">
                <h3 className={h3WE}>Training, courses, certificates</h3>
              </summary>
              <div className="flex flex-col gap-5">
                <div>
                  <h4 className={h4}>
                    The Complete JavaScript Course 2022: From Zero to Expert!
                  </h4>
                  <h5 className={h5}>Udemy</h5>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>10.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>
                    Build a responsive real-world website with HTML and CSS
                  </h4>
                  <h5 className={h5}>Udemy</h5>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>09.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>Java Script</h4>
                  <h5 className={h5}>Grasshopper by Google</h5>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>07.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>
                    HTML, CSS, JS. Professional website layout.
                  </h4>
                  <h5 className={h5}>HTML Academy</h5>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>12.2019
                  </p>
                </div>
                <div>
                  <h4 className={h4}>Basics of digital marketing</h4>
                  <h5 className={h5}>Digital workshop by Google</h5>
                  <p className={date}>
                    <i className="fa-regular fa-calendar pr-2"></i>10.2019
                  </p>
                </div>
              </div>
            </details>
          </section>
        </main>
      </div>
      <footer className="flex flex-col items-center justify-center px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn text-center mt-10">
        <p className="border-b w-full  border-emerald-950/30 mb-2 p-2">
          Thank you for visiting my page, I am waiting for you to contact
        </p>
        <p>
          © 2023 Built using ReactJS by
          <a
            href="https://github.com/SanekxArcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanekx Arcs
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
