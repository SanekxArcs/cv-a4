import React from "react";

const Training = () => {
  const courses = [
    {
      title:
        "Diploma Educational Computer training course and obtaining the qualification of Personal Computer Operator (PCO)",
      platform: "Grand",
      date: "30.04.2013",
      seialNumber: "№ 2301761",
    },
  ];

  return (
    <section id="courses" className="select-none break-before-auto">
      <details open>
        <summary className="flex w-full cursor-pointer ">
          <h3 className="w-full mb-5 border-b border-blue-950/30">
            Training, courses, certificates
          </h3>
        </summary>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className=" md:last:col-span-2">
              <h4>{course.title}</h4>
              <h5>{course.platform}</h5>
              <h6>{course.seialNumber}</h6>
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
