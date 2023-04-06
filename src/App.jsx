import { useState } from "react";
import { useInView } from "react-intersection-observer";

import myPhoto from "./assets/ProfilePhoto.webp";
import qrCode from "./assets/qr-code.svg";
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
    threshold: 1,
  });
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: educationRef, inView: educationIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: coursesRef, inView: coursesIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: contactsRef, inView: contactsIsVisible } = useInView({
    threshold: 1,
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
  const liContacts = `flex flex-row gap-2 items-center px-2 py-0.5 hover:bg-emerald-100/50 backdrop-blur-md
    ${hover}`;
  const liTechSkills = `px-2 py-0.5 rounded-md bg-emerald-200/50 backdrop-blur-md ${hover}`;
  const animation = `animate-fadeIn animate-duration-500`;

  return (
    <div className="max-w-[1280px] mx-auto">
      <header
        className={`relative sticky z-10 flex items-center justify-between px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn`}
      >
        <div className="flex gap-2 items-center">
          {imageIsVisible ? "" : <img className="w-10 mx-auto animate-fadeInUp animate-duration-500" src={myPhoto} alt="Oleksandr Dzisiak photo"/>}
          {nameIsVisible ? <p className="font-black text-sm ">Resume / CV</p> : <h3 className="font-black text-sm animate-fadeInUp animate-duration-500 transition-all duration-500">Oleksandr Dzisiak <h2 className=" font-normal text-sm ">Frontend developer</h2></h3>}
          
        </div>
        <button className=" flex-row flex-nowrap items-center px-2 py-1 transition-all duration-200 rounded-md hover:ring-2 hover:ring-emerald-500 hidden md:flex">
          <i class="fa-solid fa-file-arrow-down pr-2"></i>Save CV
          </button>
        <nav className="flex gap-5 md:hidden h-6 ">
          <button onClick={onClickHandle}
            className={`${hover} flex flex-col justify-between  h-full px-2 py-1 bg-transparent rounded-md cursor-pointer`}
          >
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
            <span className="h-0.5 w-5 rounded-full bg-emerald-800"></span>
          </button>
          <div className={`${isOpen ? "absolute top-16 right-0 bottom-0 animate-fadeIn" : "hidden"}`}>
            <div className="flex flex-col items-center justify-between px-4 p-5 rounded-md backdrop-blur-md  bg-emerald-300/30 animate-fadeIn">
              <button className="flex flex-row flex-nowrap items-center px-2 py-1 transition-all duration-200 rounded-md hover:ring-2 hover:ring-emerald-500">
          <i class="fa-solid fa-file-arrow-down pr-2"></i>Save CV
          </button>
            <select className={`${hover} hidden`} name="colors" id="theme">
            <option value="choseTheme">-Theme-</option>
            <option value="emerald">Emerald</option>
          </select>
            </div>
            
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

          <div className={animation}>
            <details open className="">
              <summary className="flex cursor-pointer marker:hidden">
                <h3 className={h3}>Contacts</h3>
              </summary>
              <ul className={` flex flex-col items-start justify-start gap-2`}>
                <li className={liContacts}>
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
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.67"
                  height="32"
                  viewBox="0 0 32 24"
                >
                  <defs>
                    <path id="flagpackGbUkm0" fill="#fff" d="M0 0h32v24H0z" />
                  </defs>
                  <mask
                    id="flagpackGbUkm1"
                    width="32"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <use href="#flagpackGbUkm0" />
                  </mask>
                  <g fill="none" mask="url(#flagpackGbUkm1)">
                    <path
                      fill="#2E42A5"
                      fill-rule="evenodd"
                      d="M0 0v24h32V0H0z"
                      clip-rule="evenodd"
                    />
                    <mask
                      id="flagpackGbUkm2"
                      width="32"
                      height="24"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M0 0v24h32V0H0z"
                        clip-rule="evenodd"
                      />
                    </mask>
                    <g mask="url(#flagpackGbUkm2)">
                      <mask
                        id="flagpackGbUkm3"
                        width="32"
                        height="24"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <use href="#flagpackGbUkm0" />
                      </mask>
                      <g mask="url(#flagpackGbUkm3)">
                        <path
                          fill="#fff"
                          d="m-3.563 22.285l7.042 2.979l28.68-22.026l3.715-4.426l-7.53-.995l-11.698 9.491l-9.416 6.396l-10.793 8.581z"
                        />
                        <path
                          fill="#F50100"
                          d="M-2.6 24.372L.989 26.1L34.54-1.599h-5.037l-32.102 25.97z"
                        />
                        <path
                          fill="#fff"
                          d="m35.563 22.285l-7.042 2.979L-.159 3.238l-3.715-4.426l7.53-.995l11.698 9.491l9.416 6.396l10.793 8.581z"
                        />
                        <path
                          fill="#F50100"
                          d="m35.323 23.783l-3.588 1.728l-14.286-11.86l-4.236-1.324l-17.445-13.5H.806l17.434 13.18l4.631 1.588l12.452 10.188z"
                        />
                        <mask id="flagpackGbUkm4" fill="#fff">
                          <path
                            fill-rule="evenodd"
                            d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2z"
                            clip-rule="evenodd"
                          />
                        </mask>
                        <path
                          fill="#F50100"
                          fill-rule="evenodd"
                          d="M19.778-2h-7.556V8H-1.972v8h14.194v10h7.556V16h14.25V8h-14.25V-2z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill="#fff"
                          d="M12.222-2v-2h-2v2h2zm7.556 0h2v-2h-2v2zM12.222 8v2h2V8h-2zM-1.972 8V6h-2v2h2zm0 8h-2v2h2v-2zm14.194 0h2v-2h-2v2zm0 10h-2v2h2v-2zm7.556 0v2h2v-2h-2zm0-10v-2h-2v2h2zm14.25 0v2h2v-2h-2zm0-8h2V6h-2v2zm-14.25 0h-2v2h2V8zm-7.556-8h7.556v-4h-7.556v4zm2 8V-2h-4V8h4zm-16.194 2h14.194V6H-1.972v4zm2 6V8h-4v8h4zm12.194-2H-1.972v4h14.194v-4zm2 12V16h-4v10h4zm5.556-2h-7.556v4h7.556v-4zm-2-8v10h4V16h-4zm16.25-2h-14.25v4h14.25v-4zm-2-6v8h4V8h-4zm-12.25 2h14.25V6h-14.25v4zm-2-12V8h4V-2h-4z"
                          mask="url(#flagpackGbUkm4)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                English - B1
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.67"
                  height="32"
                  viewBox="0 0 32 24"
                >
                  <mask
                    id="flagpackPl0"
                    width="32"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#fff" d="M0 0h32v24H0z" />
                  </mask>
                  <g fill="none" mask="url(#flagpackPl0)">
                    <path
                      fill="#F7FCFF"
                      fill-rule="evenodd"
                      d="M0 0v24h32V0H0z"
                      clip-rule="evenodd"
                    />
                    <mask
                      id="flagpackPl1"
                      width="32"
                      height="24"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M0 0v24h32V0H0z"
                        clip-rule="evenodd"
                      />
                    </mask>
                    <g mask="url(#flagpackPl1)">
                      <path
                        fill="#C51918"
                        fill-rule="evenodd"
                        d="M0 12v12h32V12H0z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </g>
                </svg>
                Poland - C1
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.67"
                  height="32"
                  viewBox="0 0 32 24"
                >
                  <mask
                    id="flagpackUa0"
                    width="32"
                    height="24"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path fill="#fff" d="M0 0h32v24H0z" />
                  </mask>
                  <g fill="none" mask="url(#flagpackUa0)">
                    <path
                      fill="#3195F9"
                      fill-rule="evenodd"
                      d="M0 0v24h32V0H0z"
                      clip-rule="evenodd"
                    />
                    <mask
                      id="flagpackUa1"
                      width="32"
                      height="24"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M0 0v24h32V0H0z"
                        clip-rule="evenodd"
                      />
                    </mask>
                    <g mask="url(#flagpackUa1)">
                      <path
                        fill="#FECA00"
                        fill-rule="evenodd"
                        d="M0 12v12h32V12H0z"
                        clip-rule="evenodd"
                      />
                    </g>
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
          <div className="hidden md:block">
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

          <section>
            <details open>
              <summary className="flex"><h3 className={h3WE}>Projects</h3></summary>
            </details>
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <h4>name</h4>
                <p>This project technologies.</p>
                <ul>
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Netlify</li>
                  <li>Tailwind CSS</li>
                </ul>
                <p>Features
📖 Multi-Page Layout

🎨 Styled with React-Bootstrap and Css with easy to customize colors

📱 Fully Responsive</p>
              </div>
            </div>
          </section>


          <section>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Warsaw
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>03.2022 – Now
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li>
                      Create design and landing-page solarsense.pl 
                    </li>
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
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Warsaw
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>07.2022 – 03.2023
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
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Poland
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>02.2020 – 06.2022
                  </p>
                  <h6 className={h6}>Short job Description:</h6>
                  <ul className="pl-5 list-disc ">
                    <li></li>
                  </ul>
                  <div className={hover}>
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Ukraine, Kiev
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>01.2019 – 11.2020
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
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Ukraine, Dnipro
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>01.2018 – 12.2018
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
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Russia,
                    Sankt-Petersburg
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>01.2018 – 12.2018
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
                    <i class="fa-solid fa-globe pr-2"></i>
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
                    <i class="fa-solid fa-location-dot pr-2"></i>Ukraine,
                    Netishyn
                  </p>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>01.2018 – 12.2018
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

          <section>
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
                    </span> Electrikal Engineering and Electrotechnics
                  </p>
                </div>

                <div>
                  <h4 className={h4}>
                    Kyiv College of Energy Politechnic Institute
                  </h4>
                  <p className={p}>
                    <span className=" text-lg font-medium">
                      Specialization: 
                    </span> Maintenance of automated power equipment in power plants
                  </p>
                </div>

                <div>
                  <h4 className={h4}>Netishyn School №3</h4>
                  <p className={p}>
                    <span className=" text-lg font-medium">
                      Specialization: 
                    </span> Philology
                  </p>
                </div>
              </div>
            </details>
          </section>

          <section>
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
                    <i class="fa-regular fa-calendar pr-2"></i>10.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>
                    Build a responsive real-world website with HTML and CSS
                  </h4>
                  <h5 className={h5}>Udemy</h5>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>09.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>Java Script</h4>
                  <h5 className={h5}>Grasshopper by Google</h5>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>07.2022
                  </p>
                </div>
                <div>
                  <h4 className={h4}>
                    HTML, CSS, JS. Professional website layout.
                  </h4>
                  <h5 className={h5}>HTML Academy</h5>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>12.2019
                  </p>
                </div>
                <div>
                  <h4 className={h4}>Basics of digital marketing</h4>
                  <h5 className={h5}>Digital workshop by Google</h5>
                  <p className={date}>
                    <i class="fa-regular fa-calendar pr-2"></i>10.2019
                  </p>
                </div>
              </div>
            </details>
          </section>
        </main>
      </div>
      <footer className="flex flex-col items-center justify-center px-4 py-2 m-2 rounded-md backdrop-blur-md top-2 bg-emerald-300/30 animate-fadeIn text-center mt-10">
        <p className="border-b w-full  border-emerald-950/30 mb-2 p-2">Thank you for visiting my page, I am waiting for you to contact</p>
        <p>© 2023 Food. Built using ReactJS by <a href="https://github.com/SanekxArcs" target="_blank" rel="noopener noreferrer">Sanekx Arcs</a> </p>
      </footer>
    </div>
  );
}

export default App;
