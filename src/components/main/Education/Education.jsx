import React from "react";

const Education = () => {
  const educationData = [
    {
      institution: "Vinnytsia National Technical University",
      specialization: "Master's degree in radio engineering",
    },
    {
      institution: "Netishyn School №3",
      specialization: "Physical and Mathematical",
    },
  ];

  return (
    <section id="education" className="break-before-auto">
      <details open>
        <summary className="flex w-full cursor-pointer">
          <h3 className="w-full mb-5 border-b border-blue-950/30">
            Education
          </h3>
        </summary>
        <div className="flex flex-col gap-5">
          {educationData.map((education, index) => (
            <div key={index}>
              <h4>{education.institution}</h4>
              <p>
                <span className="text-lg font-medium">Specialization: </span>
                {education.specialization}
              </p>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
};

export default Education;
