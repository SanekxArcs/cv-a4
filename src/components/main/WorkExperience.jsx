const workExperienceData = [
  {
    jobTitle: "Frontend developer | Electrical engineer",
    companyName: "Solar Sense Krzysztof Gutter",
    location: "Poland, Warsaw",
    duration: "03.2023 – 08.2023",
    description: [
      "Design and create multi-page site on react",
      "Optimize website for performance to get a 99 page speed test and SEO;",
      "A big calculation tool in Google sheets",
      "Create a generator of PDF docs from data and calculations",
      "The execution of 3D visualization projects PV",
    ],
    website: "https://solarsense.pl/",
    websiteName: "solarsense.pl",
    print: false,
  },
  {
    jobTitle: "Frontend developer",
    companyName: "Best Solution Eco Sp. z o. o.",
    location: "Poland, Warsaw",
    duration: "07.2022 – 03.2023",
    description: [
      "Maintaining and updating the website to ensure proper and efficient functioning",
      "Fixing bugs and adding new features",
      "Ensuring compatibility with various web browsers and devices",
      "Monitoring website traffic and analyzing data",
      "Making updates and changes based on data analysis",
      "Troubleshooting issues that arise",
      "Providing technical support to users",
      "Contributing to the development of new features and improvements to enhance the user experience",
    ],
    website: "http://bestsolution.eco/",
    websiteName: "bestsolution.eco",
    print: false,
  },
  {
    jobTitle: "Electrician",
    jobTitle2: "Electrical Engineer",
    companyName: "BANKIER GROUP sp. z o.o. GREEN SMART ENERGY sp. k.",
    location: "Poland",
    duration: "02.2020 – 06.2022",
    description: [
      "As an electrician, I specialize in the installation and maintenance of various electrical systems in the company. I am responsible for repairing any faults that may occur and, if necessary, rebuilding the existing electrical installation system. Working in close collaboration with other team members, I am committed to ensuring the proper functioning of all electrical devices and equipment. With my extensive experience in the field, I have developed a keen eye for detail and a strong sense of professionalism. I am highly skilled in monitoring the proper operation of electrical devices and am committed to delivering top-quality work that meets the highest industry standards.",
    ],
    website: "https://gse.info.pl/",
    websiteName: "gse.info.pl",
    print: true,
  },
  {
    jobTitle: "Trainee",
    jobTitle2: "Junior Frontend Developer",
    companyName: "A&A Web and App solutions",
    location: "Ukraine, Kiev",
    duration: "01.2019 – 11.2019",
    description: [
      "Use HTML, CSS, and JavaScript to build websites",
      "Use CSS preprocessors such as SASS or LESS to write more efficient CSS code",
      "Test and debug website across multiple browsers and devices",
      "Optimize website for performance and SEO",
      "Work closely with back-end developers to ensure seamless integration of frontend and back-end functionality",
      "Eight projects were made, which includes an online store, a forum, a landing pages, and a business card sites",
    ],
    website: "https://web.archive.org/web/20220530091720/https://a8a.com.ua/",
    websiteName: "a8a.com.ua",
    print: false,
  },
  {
    jobTitle: "IT Support",
    jobTitle2: "Department Manager",
    companyName: "Dnipropetrovsk Opera and Ballet Theatre",
    location: "Ukraine, Dnipro",
    duration: "01.2018 – 11.2018",
    description: [
      "At the beginning of my career, I started as a simple support worker. Due to my diligence and high performance, I was promoted to the position of department manager. In this role, I developed organizational, personnel management and meeting skills.",
      "My duties included not only the organization of documentation and the purchase of office supplies, but also the optimization of the company's costs. I set new standards of performance for the entire team, including my three employees. Thanks to my communication and problem-solving skills, everyone started working more efficiently through proper delegation of tasks. During this period, there was a need to update the company's website.",
      "Thanks to my skills acquired from my previous job, I took on this task and successfully completed it on the Wix.com platform. The choice of this particular platform was made with the aim of enabling even people without programming skills to make changes both visually and in content. After the new website was completed, my responsibilities included maintaining and managing it for the theater. I was involved in updating content, adding new features and ensuring the website worked efficiently for our visitors. Later, this job was transferred to a new employee.",
    ],
    website:
      "https://web.archive.org/web/20210620145435/https://www.opera-ballet.com.ua/",
    websiteName: "opera-ballet.com.ua",
    print: true,
  },
  {
    jobTitle: "Warehouseman",
    jobTitle2: "Department Manager",
    companyName: "AKS!",
    duration: "02.2017 – 12.2017",
    description: [
      "Starting as a storekeeper for a company specializing in phone accessories, I was responsible for receiving, sorting and picking goods for over 20 stores every morning. On my own initiative I developed an advanced system of sorting, numbering, and tabulation that had never existed before. These changes improved performance, and after a management evaluation, I was promoted.",
      "As a department head, my responsibilities included managing and delegating tasks to account managers (2 people), storekeepers (2 people), couriers (3 people) and the repair department (2 people).",
      "One of my main achievements was optimizing the logistics of sending goods and implementing efficient methods to reduce time and costs. I also stopped the turnover by focusing on the right recruitment. My listening skills have helped me understand the needs of employees and solve problems. ",
      "At the end of my working period, I was offered the position of head of the regional department, but due to family circumstances and relocation, I had to decline this opportunity.",
    ],
    print: true,
  },
  {
    jobTitle: "Employee of the desalination plant department",
    companyName: "Khmelnitsk nuclear power plant",
    location: "Ukraine, Netishyn",
    duration: "08.2014 – 01.2017",
    description: [
      "Hardware monitoring",
      "Performing water treatment works",
      "Performing other prescribed work instructions",
      "Other information - NDA",
    ],
    print: true,
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="cursor-default break-before-auto">
      <details open className="flex flex-col gap-5">
        <summary className="flex cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-emerald-950/30">
            <i class="pr-2 fa-solid fa-briefcase"></i>
            Work experience
          </h3>
        </summary>

        <div className="flex flex-col gap-5 ">
          {workExperienceData.map((experience, index) => (
            <div
              key={index}
              className={`${
                experience.print ? "print:hidden" : ""
              } break-before-avoid`}
            >
              {experience.jobTitle2 ? (
                <h4>
                  <span className="text-sm font-light ">from </span>
                  {experience.jobTitle}
                  <span className="text-sm font-light "> to </span>
                  {experience.jobTitle2}
                </h4>
              ) : (
                <h4>{experience.jobTitle}</h4>
              )}

              <h5>
                <i className="pr-2 fa-regular fa-building"></i>
                {experience.companyName}
              </h5>
              {experience.location && (
                <p>
                  <i className="pr-2 fa-solid fa-location-dot"></i>
                  {experience.location}
                </p>
              )}

              <p>
                <i className="pr-2 fa-regular fa-calendar"></i>
                {experience.duration}
              </p>
              <details
                open
                className={`${experience.print ? "print:hidden" : ""}`}
              >
                <summary className="flex cursor-pointer">
                  <h6 className="transition-all hover:font-normal ">
                    Short job Description:
                  </h6>
                </summary>
                <ul className="pl-5 list-disc">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </details>

              {experience.website && (
                <div className={`hover-btn`}>
                  <i className="pr-2 fa-solid fa-globe"></i>
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.websiteName}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
};

export default WorkExperience;
