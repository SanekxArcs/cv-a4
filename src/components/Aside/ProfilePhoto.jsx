import React from "react";
import myPhoto from "../../assets/ProfilePhoto.webp";
import { motion } from "framer-motion"

const ProfilePhoto = ({imageRef}) => {
  return (
    <>
    
    <motion.a
     className="relative" href="https://o-d.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img
        ref={imageRef}
        className="z-10 w-32 h-32 mx-auto my-2 rounded-full  md:h-52 md:w-52 md:my-12"
        src={myPhoto}
        alt="Oleksandr Dzisiak photo"
      />
      </motion.a>
    </>
  );
};

export default ProfilePhoto;
