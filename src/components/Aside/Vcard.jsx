import React from "react";
import qrcode from "./../../assets/qrcode (1).png"

const Vcard = () => {
  return (
    <>
      <div className=" break-before-auto print:block">
        <h3>VCARD</h3>
        <img
            className="mix-blend-darken bg-transparent ring-2 rounded-xl w-2/3"
            src={qrcode}
            alt="Vadym Lanovenko photo"
          />
      </div>
    </>
  );
};

export default Vcard;
