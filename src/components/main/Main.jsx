import React from "react";

const Main = ({ nameRef }) => {
  return (
    <>
      <main className="flex flex-col col-span-2 gap-10 px-5">
        <a href="https://o-d.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div id="top" className="hidden md:block">
          
          <h1>Oleksandr Dzisiak</h1>
          <h2>Frontend developer</h2>
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
            <b> love to write code</b> and see the results of my efforts. <br />
            <span className="text-sm"><i className="pr-2 fa-solid fa-link"></i>Click here to see my latest resume update</span> 
          </p>
        </div></a>

        <section id="projects" className="break-before-auto">
          <details open>
            <summary className="flex">
              <h3 className="w-full mb-5 border-b border-emerald-950/30">
                Projects
              </h3>
            </summary>

            <div className="grid gap-2 lg:grid-cols-2">
              <a
                href="http://solarsense.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                >
                  <h4 className="font-bold">Solar Sense</h4>
                  <p className="">Landing-page</p>
                  <p>Features:</p>
                  <ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li className="text-xs">Multi-Page Layout</li>
                    <li className="text-xs">Fully Responsive</li>
                    <li className="text-xs">PageSpeed 99-100</li>
                    <li className="text-xs">
                      Next step transform to Corporate
                    </li>
                  </ul>
                  <p>This project technologies:</p>
                  <ul className="flex flex-wrap gap-2">
                    <li className={`loProjects`}>Vite</li>
                    <li className={`loProjects`}>React.js</li>
                    <li className={`loProjects`}>Tailwind CSS</li>
                    <li className={`loProjects`}>JavaScript</li>
                    <li className={`loProjects`}>React Router</li>
                    <li className={`loProjects`}>Host LH.pl</li>
                  </ul>
                </div>
              </a>

              <a
                href="https://l-i.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                >
                  <h4 className="font-bold">LIBERTY IMMIGRATION</h4>
                  <p className="">Landing-page</p>
                  <p>Features:</p>
                  <ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li className="text-xs">Multi-language page</li>
                    <li className="text-xs">
                      Animation when element is visible
                    </li>
                    <li className="text-xs">Fully Responsive</li>
                    <li className="text-xs">Contact form</li>
                  </ul>
                  <p>This project technologies:</p>
                  <ul className="flex flex-wrap gap-2">
                    <li className={`loProjects`}>React.js</li>
                    <li className={`loProjects`}>Tailwind CSS</li>
                    <li className={`loProjects`}>Netlify</li>
                    <li className={`loProjects`}>JavaScript</li>
                    <li className={`loProjects`}>Hooks</li>
                    <li className={`loProjects`}>Animations</li>
                  </ul>
                </div>
              </a>

              <a
                href="http://whatismyscreenresolution.net/multi-screen-test?site-url=https://uwp-digital.netlify.app/&w=1920&h=1080"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full`}
                >
                  <h4 className="font-bold">UWP-DIGITAL</h4>
                  <p className="">Corporate</p>
                  <p>Features:</p>
                  <ul className="flex flex-col gap-1 pl-5 list-disc">
                    <li className="text-xs">FullHD ONLY!</li>
                    <li className="text-xs">Pixel-Perfect</li>
                    <li className="text-xs">Modals</li>
                    <li className="text-xs">Slider</li>
                    <li className="text-xs">Contact Form</li>
                  </ul>
                  <p className="pb-1">This project technologies:</p>
                  <ul className="flex flex-wrap gap-1">
                    <li className={`loProjects`}>Html5</li>
                    <li className={`loProjects`}>JavaScript</li>
                    <li className={`loProjects`}>jQuery</li>
                    <li className={`loProjects`}>Tailwind CSS</li>
                    <li className={`loProjects`}>Netlify</li>
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
                    className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                  >
                    <h4 className="text-base font-bold">Accounting Employees SPA</h4>
                  </div>
                </a>
                <a
                  href="https://tip-calculator-many-peoples.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                  >
                    <h4 className="text-base font-bold">
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
                    className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                  >
                    <h4 className="text-base font-bold">Sushi Shop SPA</h4>
                  </div>
                </a>
                <a
                  href="https://qr-coge-vcard-generator.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`hover-btn bg-emerald-500/30 rounded-md backdrop-blur-md top-2 animate-fadeIn p-5 h-full flex justify-center items-center text-center`}
                  >
                    <h4 className="text-base font-bold">QR-Code vcard generator SPA</h4>
                  </div>
                </a>
              </div>
            </div>
          </details>
        </section>

        <section id="work" className="break-before-auto">
          <details open className="flex flex-col gap-5">
            <summary className="flex cursor-pointer ">
              <h3 className="w-full mb-5 border-b border-emerald-950/30">
                Work experience
              </h3>
            </summary>

            <div className="flex flex-col gap-5">
              <div className="break-before-auto">
                <h4>Frontend developer | Electrical engineer</h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>
                  Solar Sense Krzysztof Gutter
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Warsaw
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>03.2022 – Now
                </p>
                <details open className="">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">Short job Description:</h6>
                    </summary>
                    <ul className="pl-5 list-disc ">
                  <li>Create design and landing-page solarsense.pl</li>
                  <li>
                    The project is currently underway for the development of a
                    corporate website and e-commerce platform
                  </li>
                  <li>A calculation tool is currently being developed</li>
                  <li>The execution of 3D visualization projects PV</li>
                </ul>
                </details>
                
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
                  <a href="https://solarsense.pl/">solarsense.pl</a>
                </div>
              </div>

              <div>
                <h4>Frontend developer</h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>Best Solution
                  Eco Sp. z o. o.
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Warsaw
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>07.2022 –
                  03.2023
                </p>

                <details open>
                  <summary className="flex cursor-pointer ">
                    <h6 className="transition-all hover:font-normal">Short job Description:</h6>
                  </summary>
                  <p className="py-2">
                    As a Frontend Developer at Best Solution Eco, my
                    responsibilities included:
                  </p>
                  <ul className="pl-5 list-disc">
                    <li>
                      maintaining and updating the website to ensure proper and
                      efficient functioning,
                    </li>
                    <li>fixing bugs and adding new features,</li>
                    <li>
                      ensuring compatibility with various web browsers and
                      devices,
                    </li>
                    <li>monitoring website traffic and analyzing data, </li>
                    <li>making updates and changes based on data analysis, </li>
                    <li>troubleshooting issues that arise, </li>
                    <li>providing technical support to users, </li>
                    <li>
                      I have also contributed to the development of new features
                      and improvements to enhance the user experience.
                    </li>
                  </ul>
                </details>

                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
                  <a href="http://bestsolution.eco/">bestsolution.eco</a>
                </div>
              </div>

              <div className="break-before-page">
                <h4>
                  <span className="text-sm text-emerald-950/70">from </span>
                  Electrician
                  <span className="text-sm text-emerald-950/70"> to </span>
                  Electrical Engineer
                </h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>
                  BANKIER GROUP sp. z o.o. GREEN SMART ENERGY sp. k.
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Poland
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>02.2020 –
                  06.2022
                </p>
                <details close className="">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">
                      Short job Description:
                    </h6>
                  </summary>
                  <p className="py-2 text-sm ">
                    As an electrician, I specialize in the installation and
                    maintenance of various electrical systems in the company. I
                    am responsible for repairing any faults that may occur and,
                    if necessary, rebuilding the existing electrical
                    installation system. Working in close collaboration with
                    other team members, I am committed to ensuring the proper
                    functioning of all electrical devices and equipment. With my
                    extensive experience in the field, I have developed a keen
                    eye for detail and a strong sense of professionalism. I am
                    highly skilled in monitoring the proper operation of
                    electrical devices and am committed to delivering
                    top-quality work that meets the highest industry standards.
                  </p>
                </details>
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
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
                <h4>
                  <span className="text-sm text-emerald-950/70">from </span>
                  Trainee Frontend Developer
                  <span className="text-sm text-emerald-950/70"> to </span>
                  Junior
                </h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>A&A Web and App
                  solutions
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Ukraine, Kiev
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>01.2019 –
                  11.2020
                </p><details open className="">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">Short job Description:</h6>
                    </summary>
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
                </details>
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
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
                <h4>
                  <span className="text-sm text-emerald-950/70">from </span>
                  IT Support
                  <span className="text-sm text-emerald-950/70"> to </span>
                  Department manager
                </h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>
                  Dnipropetrovsk Opera and Ballet Theatre
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Ukraine,
                  Dnipro
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>01.2018 –
                  12.2018
                </p>
                <details close className="">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">Short job Description:</h6>
                    </summary>
                <ul className="pl-5 list-disc ">
                  <li>As an experienced professional, I have developed skills in the organization and management of meetings, as well as in logistics and warehouse work. I am adept at organizing documentation, procuring office supplies, and optimizing company costs through favorable leasing contracts. I have experience servicing company fleets and purchasing office equipment, and ensuring smooth circulation of incoming and outgoing mail. Additionally, I am skilled in organizing business trips, managing the schedules of the management, and managing the company's archives.</li>
                  <li>
                    Create new and maintenance of the main website of the
                    theater.
                  </li>
                </ul>
                </details>
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
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
                <h4>
                  <span className="text-sm text-emerald-950/50">from </span>
                  Warehouseman
                  <span className="text-sm text-emerald-950/50"> to </span>
                  Department manager
                </h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>AKS!
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>
                  Ukraine, Kiev
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>01.2018 –
                  12.2018
                </p>
                <details close className="print:hidden">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">
                      Short job Description:
                    </h6>
                  </summary>
                  <p className="py-2 text-sm ">
                    As an experienced professional, I have developed skills in
                    the organization and management of meetings, as well as in
                    logistics and warehouse work. I am adept at organizing
                    documentation, procuring office supplies, and optimizing
                    company costs through favorable leasing contracts. I have
                    experience servicing company fleets and purchasing office
                    equipment, and ensuring smooth circulation of incoming and
                    outgoing mail. Additionally, I am skilled in organizing
                    business trips, managing the schedules of the management,
                    and managing the company's archives.
                  </p>
                  <p>As Warehouseman:</p>
                  <ul className="pl-5 list-disc">
                    <li>Accepting deliveries of goods</li>
                    <li>
                      Planning the use of storage space and deployment goods
                    </li>
                    <li>Distribution of goods in the warehouse</li>
                    <li>
                      Preparation of orders for retail and/or wholesale
                      customers
                    </li>
                    <li>Checking stock levels</li>
                    <li>Operation of storage facilities</li>
                    <li>Loading orders to delivery trucks</li>
                    <li>Activities related to the shipment of goods</li>
                    <li>
                      Checking the compliance of goods prepared for shipment
                      with invoices
                    </li>
                  </ul>
                </details>
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
                  <a href="http:///" target="_blank" rel="noopener noreferrer">
                    aks-market.ru
                  </a>
                </div>
              </div>

              <div>
                <h4>
                  Employee of the desalination plant department
                  <span className="text-sm text-emerald-950/50">from </span>
                  V3
                  <span className="text-sm text-emerald-950/50"> to </span>
                  V5
                </h4>
                <h5>
                  <i className="pr-2 fa-regular fa-building"></i>Khmelnitsk
                  nuclear power plant
                </h5>
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>Ukraine,
                  Netishyn
                </p>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>01.2018 –
                  12.2018
                </p>
                <details close className="print:hidden">
                  <summary className="flex cursor-pointer">
                    <h6 className="transition-all hover:font-normal">Short job Description:</h6>
                    </summary>
                    <ul className="pl-5 list-disc ">
                      <li>Hardware monitoring</li>
                      <li>Performing water treatment works</li>
                      <li>Performing other prescribed work instructions</li>
                    </ul>
                </details>
                </div>
            </div>
          </details>
        </section>

        <section id="education" className="break-before-auto">
          <details open>
            <summary className="flex w-full cursor-pointer ">
              <h3 className="w-full mb-5 border-b border-emerald-950/30">
                Education
              </h3>
            </summary>
            <div className="flex flex-col gap-5">
              <div>
                <h4>
                  National Technikal University of Ukraine "Igor Sikorsky Kyiv
                  Politechnic Institute
                </h4>
                <p>
                  <span className="text-lg font-medium ">Specialization: </span>
                  Electrikal Engineering and Electrotechnics
                </p>
              </div>

              <div>
                <h4>Kyiv College of Energy Politechnic Institute</h4>
                <p>
                  <span className="text-lg font-medium ">Specialization: </span>
                  Maintenance of automated power equipment in power plants
                </p>
              </div>

              <div>
                <h4>Netishyn School №3</h4>
                <p>
                  <span className="text-lg font-medium ">Specialization: </span>
                  Philology
                </p>
              </div>
            </div>
          </details>
        </section>

        <section id="courses" className="break-before-auto">
          <details open>
            <summary className="flex w-full cursor-pointer ">
              <h3 className="w-full mb-5 border-b border-emerald-950/30">
                Training, courses, certificates
              </h3>
            </summary>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h4>
                  The Complete JavaScript Course 2022: From Zero to Expert!
                </h4>
                <h5>Udemy</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>10.2022
                </p>
              </div>
              <div>
                <h4>Build a responsive real-world website with HTML and CSS</h4>
                <h5>Udemy</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>09.2022
                </p>
              </div>
              <div>
                <h4>Java Script</h4>
                <h5>Grasshopper by Google</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>07.2022
                </p>
              </div>
              <div>
                <h4>HTML, CSS, JS. Professional website layout.</h4>
                <h5>HTML Academy</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>12.2019
                </p>
              </div>
              <div>
                <h4>Basics of digital marketing</h4>
                <h5>Digital workshop by Google</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>10.2019
                </p>
              </div>
              <div>
                <h4>Mounting Technician Photovoltaic Systems.</h4>
                <h5>EcoProjekt i CW Lundberg</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>08.2021
                </p>
              </div>
              <div className="col-span-2  print:hidden">
                <h4>Thanks for the special conscientiousness and commitment to everyday work</h4>
                <h5>Piotr Tokarski President GREEN SMART ENERGY sp. k.</h5>
                <p>
                  <i className="pr-2 fa-regular fa-calendar"></i>11.2021
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
