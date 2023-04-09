import React from "react";
import qrCodePng from "../../assets/qr-code.png";

const Vcard = () => {
  return (
    <>
      <div className="hidden md:block break-before-auto">
        <h3>VCARD</h3>
        <a
          href="https://qr-coge-vcard-generator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={`hover max-w-56 max-h-56 mix-blend-multiply`}
            src={qrCodePng}
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Vcard;
