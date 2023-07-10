const workExperienceData = [
  {
    jobTitle: "Frontend developer | Electrical engineer",
    companyName: "Solar Sense Krzysztof Gutter",
    location: "Warsaw",
    duration: "03.2022 – Now",
    description: [
      "Create design and landing-page solarsense.pl",
      "The project is currently underway for the development of a corporate website and e-commerce platform",
      "A calculation tool is currently being developed",
      "The execution of 3D visualization projects PV"
    ],
    website: "https://solarsense.pl/"
  },
  {
    jobTitle: "Frontend developer",
    companyName: "Best Solution Eco Sp. z o. o.",
    location: "Warsaw",
    duration: "07.2022 – 03.2023",
    description: [
      "Maintaining and updating the website to ensure proper and efficient functioning",
      "Fixing bugs and adding new features",
      "Ensuring compatibility with various web browsers and devices",
      "Monitoring website traffic and analyzing data",
      "Making updates and changes based on data analysis",
      "Troubleshooting issues that arise",
      "Providing technical support to users",
      "Contributing to the development of new features and improvements to enhance the user experience"
    ],
    website: "http://bestsolution.eco/"
  },
  {
    jobTitle: "Electrician to Electrical Engineer",
    companyName: "BANKIER GROUP sp. z o.o. GREEN SMART ENERGY sp. k.",
    location: "Poland",
    duration: "02.2020 – 06.2022",
    description: [
      "As an electrician, I specialize in the installation and maintenance of various electrical systems in the company. I am responsible for repairing any faults that may occur and, if necessary, rebuilding the existing electrical installation system. Working in close collaboration with other team members, I am committed to ensuring the proper functioning of all electrical devices and equipment. With my extensive experience in the field, I have developed a keen eye for detail and a strong sense of professionalism. I am highly skilled in monitoring the proper operation of electrical devices and am committed to delivering top-quality work that meets the highest industry standards."
    ],
    website: "https://gse.info.pl/"
  },
  {
    jobTitle: "Trainee Frontend Developer to Junior",
    companyName: "A&A Web and App solutions",
    location: "Ukraine, Kiev",
    duration: "01.2019 – 11.2020",
    description: [
      "Use HTML, CSS, and JavaScript to build websites",
      "Use CSS preprocessors such as SASS or LESS to write more efficient CSS code",
      "Test and debug website across multiple browsers and devices",
      "Optimize website for performance and SEO",
      "Work closely with back-end developers to ensure seamless integration of frontend and back-end functionality",
      "Eight projects were made, which includes an online store, a forum, a landing pages, and a business card sites"
    ],
    website: "https://web.archive.org/web/20220530091720/https://a8a.com.ua/"
  },
  {
    jobTitle: "IT Support to Department Manager",
    companyName: "Dnipropetrovsk Opera and Ballet Theatre",
    location: "Ukraine, Dnipro",
    duration: "01.2018 – 12.2018",
    description: [
      "As an experienced professional, I have developed skills in the organization and management of meetings, as well as in logistics and warehouse work. I am adept at organizing documentation, procuring office supplies, and optimizing company costs through favorable leasing contracts. I have experience servicing company fleets and purchasing office equipment, and ensuring smooth circulation of incoming and outgoing mail. Additionally, I am skilled in organizing business trips, managing the schedules of the management, and managing the company's archives.",
      "Create new and maintenance of the main website of the theater."
    ],
    website: "https://web.archive.org/web/20210620145435/https://www.opera-ballet.com.ua/"
  },
  {
    jobTitle: "Warehouseman to Department Manager",
    companyName: "AKS!",
    location: "Ukraine, Kiev",
    duration: "01.2018 – 12.2018",
    description: [
      "As an experienced professional, I have developed skills in the organization and management of meetings, as well as in logistics and warehouse work. I am adept at organizing documentation, procuring office supplies, and optimizing company costs through favorable leasing contracts. I have experience servicing company fleets and purchasing office equipment, and ensuring smooth circulation of incoming and outgoing mail. Additionally, I am skilled in organizing business trips, managing the schedules of the management, and managing the company's archives.",
      "As Warehouseman:",
      "Accepting deliveries of goods",
      "Planning the use of storage space and deployment goods",
      "Distribution of goods in the warehouse",
      "Preparation of orders for retail and/or wholesale customers",
      "Checking stock levels",
      "Operation of storage facilities",
      "Loading orders to delivery trucks",
      "Activities related to the shipment of goods",
      "Checking the compliance of goods prepared for shipment with invoices"
    ],
    website: "http:///"
  },
  {
    jobTitle: "Employee of the desalination plant department",
    companyName: "Khmelnitsk nuclear power plant",
    location: "Ukraine, Netishyn",
    duration: "01.2018 – 12.2018",
    description: [
      "Hardware monitoring",
      "Performing water treatment works",
      "Performing other prescribed work instructions"
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="work" className="cursor-default break-before-auto">
      <details open className="flex flex-col gap-5">
        <summary className="flex cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-emerald-950/30">
            Work experience
          </h3>
        </summary>

        <div className="flex flex-col gap-5">
          {workExperienceData.map((experience, index) => (
            <div key={index} className="break-before-auto">
              <h4>{experience.jobTitle}</h4>
              <h5>
                <i className="pr-2 fa-regular fa-building"></i>
                {experience.companyName}
              </h5>
              <p>
                <i className="pr-2 fa-solid fa-location-dot"></i>
                {experience.location}
              </p>
              <p>
                <i className="pr-2 fa-regular fa-calendar"></i>
                {experience.duration}
              </p>
              <details open className="">
                <summary className="flex cursor-pointer">
                  <h6 className="transition-all hover:font-normal">
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
                  <a href={experience.website} target="_blank" rel="noopener noreferrer">
                    {experience.website}
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
