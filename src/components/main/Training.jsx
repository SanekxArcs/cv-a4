import React from "react";

const Training = () => {
  const courses = [
    {
      title: "The Ultimate React Course 2023: React, Redux & More",
      platform: "Udemy by Jonas Schmedtmann",
      date: "07.2023",
      visibleOnCV: true,
    },
    {
      title: "JavaScript + React - from zero to the result",
      platform: "Udemy by Ivan Petrychenko",
      date: "02.2023",
      visibleOnCV: true,
    },
    {
      title: "The Complete JavaScript Course 2022: From Zero to Expert!",
      platform: "Udemy by Jonas Schmedtmann",
      date: "10.2022",
    },
    {
      title: "Build a responsive real-world website with HTML and CSS",
      platform: "Udemy by Jonas Schmedtmann",
      date: "09.2022",
      visibleOnCV: true,
    },
    {
      title: "Java Script",
      platform: "Grasshopper by Google",
      date: "07.2022",
      visibleOnCV: true,
    },
    {
      title: "HTML, CSS, JS. Professional website layout.",
      platform: "HTML Academy",
      date: "12.2019",
      visibleOnCV: true,
    },
    {
      title: "Basics of digital marketing",
      platform: "Digital workshop by Google",
      date: "10.2019",
      visibleOnCV: true,
    },
    {
      title: "Mounting Technician Photovoltaic Systems.",
      platform: "EcoProjekt i CW Lundberg",
      date: "08.2021",
      visibleOnCV: false,
    },
    {
      title:
        "Thanks for the special conscientiousness and commitment to everyday work",
      platform: "Piotr Tokarski President GREEN SMART ENERGY sp. k.",
      date: "11.2021",
      visibleOnCV: false,
    },
  ];

  return (
    <section id="courses" className="select-none break-before-auto">
      <details open>
        <summary className="flex w-full cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-emerald-950/30">
            <i class="fa-solid fa-certificate pr-2"></i>
            Training, courses, certificates
          </h3>
        </summary>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${
                course.visibleOnCV ? "" : "print:hidden"
              } md:last:col-span-2`}
            >
              <h4>{course.title}</h4>
              <h5>{course.platform}</h5>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
};

export default Training;
