import React from "react";
import SVGComponent from "./QrCode";

const Vcard = () => {
  return (
    <>
      <div className="hidden break-before-auto print:block">
        <h3>
          <i class="fa-solid fa-qrcode pr-2"></i>VCARD
        </h3>
        <a
          className="cursor-pointer"
          href="https://qr-coge-vcard-generator.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGComponent />
        </a>
      </div>
    </>
  );
};

export default Vcard;
