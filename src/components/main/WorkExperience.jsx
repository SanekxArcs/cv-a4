const workExperienceData = [
  {
    jobTitle: "Intern Photo Editor",
    jobTitle2: "Real Estate Photo Editor",
    companyName: "Soft House Group Ukraine",
    location: "Vinnytsia, Ukraine",
    duration: "06.2017 – Now",
    description: [
      "Starting as an intern during my studies, I had the opportunity to pursue my passion for photo editing and secured a position as a Junior Retoucher / Photo Editor. Throughout my tenure, I acquired a multitude of skills in photo editing, resulting in improved speed and quality of my work. Starting from approximately 10 photos per day, I achieved a personal record of 97 photos per day. My accomplishments were reflected in the company's statistics, and I was recognized as Employee of the Month on five occasions within 16 months of work. This recognition led to my promotion to the position of Middle Retoucher and Junior Video Montager in 2019. During this time, I also had the opportunity to train new team members, some of whom I continue to collaborate with to this day.",
      "Proficiency in Adobe Photoshop and Lightroom.",
      'Adherence to deadlines and a responsible work approach.',
      'Passion for the craft and a desire for continuous growth.',
      'High-quality retouching skills and ability to handle repetitive tasks.',
      'Experience with "catalog shoots" and product photography for e-commerce.',
      'Experience in editing photos for social media and online stores.',
      'Experience in executing tasks based on technical briefs.',
      "Understanding of composition and color theory.",
      "Attention to detail and ability to work quickly and efficiently.",
    ],
    website: "https://softhousegroup.com/",
    websiteName: "softhousegroup.com",
    print: false,
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="cursor-default break-before-auto">
      <details open className="flex flex-col gap-5">
        <summary className="flex cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-blue-950/30">
            Work experience
          </h3>
        </summary>

        <div className="flex flex-col gap-5">
          {workExperienceData.map((experience, index) => (
            <div key={index} className="break-before-auto">
              {experience.jobTitle2 ? (
                <h4>
                  <span className="text-sm font-light ">from </span>
                  {experience.jobTitle}
                  <span className="text-sm font-light "> to </span>
                  {experience.jobTitle2}
                </h4>
              ) : (
                <h4>
                  {experience.jobTitle}
                </h4>
              )}

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
              <details open className={`${experience.print ? "print:hidden" : ""}`}>
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
