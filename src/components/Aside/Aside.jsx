import React from "react";
import { motion } from "framer-motion";


import Contacts from "./Contacts";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills";
import Language from "./Language";
import Links from "./Links";
import Interests from "./Interests";
import ProfilePhoto from "./ProfilePhoto";
// import Vcard from "./Vcard";

const Aside = ({imageRef}) => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0.5, x: "-50vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={true}
        className="flex flex-col gap-5 px-5"
      >
        <ProfilePhoto imageRef={imageRef} />

        <Contacts />
        <TechSkills />
        <SoftSkills />
        <Language />
        <Links />
        <Interests />
        {/* <Vcard/> */}
      </motion.aside>
    </>
  );
};

export default Aside;
