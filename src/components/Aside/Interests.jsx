import React from "react";

const Interests = () => {
  return (
    <>
      <div className="select-none break-before-auto print:hidden">
        <h3>Interests</h3>
        <ul className="flex flex-col gap-1">
          <li>Development</li>
          <li>3D Modeling</li>
          <li>Snowboarding</li>
          <li>Tennis</li>
          <li>Racing</li>
        </ul>
      </div>
    </>
  );
};

export default Interests;
