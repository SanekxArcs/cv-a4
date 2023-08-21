import React from "react";

const Education = () => {
  const educationData = [
    {
      institution:
        'National Technikal University of Ukraine "Igor Sikorsky Kyiv Politechnic Institute"',
      specialization: "Electrikal Engineering and Electrotechnics",
    },
    {
      institution: "Kyiv College of Energy Politechnic Institute",
      specialization:
        "Maintenance of automated power equipment in power plants",
    },
  ];

  return (
    <section id="education" className="break-before-auto">
      <details open>
        <summary className="flex w-full cursor-pointer">
          <h3 className="w-full mb-5 border-b border-emerald-950/30">
            <i class="fa-solid fa-graduation-cap pr-2"></i>
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
