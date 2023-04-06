import React from "react";

const Main = () => {
  return (
    <>
      <main className="flex flex-col col-span-2 gap-10 px-5">
        <div id="top" className="hidden md:block">
          <h1 className="pb-0 text-6xl font-medium">Oleksandr Dzisiak</h1>
          <h2 className="pb-3 text-4xl">Frontend developer</h2>
          <p ref={nameRef} className="text-lg">
            I am a highly motivated <b>developer</b> with a passion for creating
            visually appealing and user-friendly web applications. My skills
            include proficiency in
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
              <a href="http://solar" target="_blank" rel="noopener noreferrer">
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
                    <li className="text-xs">Animations on visible</li>
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
                href="https://uwp-digital.netlify.app/"
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
                  href="https://.netlify.app/"
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
                    Ensuring compatibility with various web browsers and devices
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
                      Maintaining and updating the website to ensure proper and
                      efficient functioning
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
                      Working with a team of developers, designers, and project
                      managers
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
                  <i className="pr-2 fa-regular fa-building"></i>A&A Web and App
                  solutions
                </h5>
                <p className={p}>
                  <i className="fa-solid fa-location-dot pr-2"></i>Ukraine, Kiev
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
                    Test and debug website across multiple browsers and devices
                  </li>
                  <li>Optimize website for performance and SEO</li>
                  <li>
                    Work closely with back-end developers to ensure seamless
                    integration of frontend and back-end functionality
                  </li>
                  <li>
                    Eight projects were made, which includes an online store, a
                    forum, a landing pages, and a business card sites
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
                  <a href="http:///" target="_blank" rel="noopener noreferrer">
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
                  <span className=" text-lg font-medium">Specialization:</span>{" "}
                  Electrikal Engineering and Electrotechnics
                </p>
              </div>

              <div>
                <h4 className={h4}>
                  Kyiv College of Energy Politechnic Institute
                </h4>
                <p className={p}>
                  <span className=" text-lg font-medium">Specialization:</span>{" "}
                  Maintenance of automated power equipment in power plants
                </p>
              </div>

              <div>
                <h4 className={h4}>Netishyn School №3</h4>
                <p className={p}>
                  <span className=" text-lg font-medium">Specialization:</span>{" "}
                  Philology
                </p>
              </div>
            </div>
          </details>
        </section>

        <section ref={coursesIsVisible} id="courses">
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
    </>
  );
};

export default Main;
