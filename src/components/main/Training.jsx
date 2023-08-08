import React from "react";

const Training = () => {
  const courses = [
    {
      title: "The Ultimate React Course 2023: React, Redux & More",
      platform: "Udemy by Jonas Schmedtmann",
      date: "07.2023",
    },
    {
      title: "JavaScript + React - from zero to the result",
      platform: "Udemy by Ivan Petrychenko",
      date: "02.2023",
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
    },
    {
      title: "Java Script",
      platform: "Grasshopper by Google",
      date: "07.2022",
    },
    {
      title: "HTML, CSS, JS. Professional website layout.",
      platform: "HTML Academy",
      date: "12.2019",
    },
    {
      title: "Basics of digital marketing",
      platform: "Digital workshop by Google",
      date: "10.2019",
    },
    {
      title: "Mounting Technician Photovoltaic Systems.",
      platform: "EcoProjekt i CW Lundberg",
      date: "08.2021",
    },
    {
      title:
        "Thanks for the special conscientiousness and commitment to everyday work",
      platform: "Piotr Tokarski President GREEN SMART ENERGY sp. k.",
      date: "11.2021",
    },
  ];

  return (
    <section id="courses" className="select-none break-before-auto">
      <details open>
        <summary className="flex w-full cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-emerald-950/30">
            Training, courses, certificates
          </h3>
        </summary>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className=" md:last:col-span-2">
              <h4>{course.title}</h4>
              <h5>{course.platform}</h5>
              <p>
                <i className="pr-2 fa-regular fa-calendar"></i>
                {course.date}
              </p>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
};

export default Training;
