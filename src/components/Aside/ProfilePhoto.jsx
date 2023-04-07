import React from "react";
import myPhoto from "../../assets/ProfilePhoto.webp";

const ProfilePhoto = ({imageRef}) => {
  return (
    <>
      <img
        ref={imageRef}
        className="w-32 h-32 mx-auto my-2 rounded-full md:h-52 md:w-52 animate-fadeInLeft animate-duration-500 md:my-12"
        src={myPhoto}
        alt="Oleksandr Dzisiak photo"
      />
    </>
  );
};

export default ProfilePhoto;
