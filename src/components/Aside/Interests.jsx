import React from "react";

const Interests = () => {
  return (
    <>
      <div className="pb-10 select-none break-before-auto print:hidden">
        <h3>
          <i class="fa-solid fa-circle-exclamation pr-2"></i>Interests
        </h3>
        <ul className="flex flex-col gap-1">
          <li>Self development</li>
          <li>3D Modeling</li>
          <li>Create a new thing</li>
          <li>Read books / blog about IT</li>
          <li>Tech</li>
        </ul>
      </div>
    </>
  );
};

export default Interests;
