import React from "react";


import Contacts from "./Contacts";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import Language from "./Language";
import Links from "./Links";
import Interests from "./Interests";
import ProfilePhoto from "./ProfilePhoto";
import Vcard from "./Vcard";

const Aside = ({imageRef}) => {
  return (
    <>
        <aside className="flex flex-col gap-5 px-5">
          <ProfilePhoto imageRef={imageRef} />
          
          <Contacts/>
          <TechSkills/>
          <SoftSkills/>
          <Language/>
          <Links/>
          <Interests/>
          <Vcard/>
        </aside>
    </>
  );
};

export default Aside;
