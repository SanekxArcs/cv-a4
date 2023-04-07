import React from "react";

const Links = () => {
  return (
    <>
      <div>
        <h3>Links</h3>
        <ul className="flex flex-col gap-1">
          <li className={`liContacts hover-btn`}>
            <i className="fa-brands fa-github"></i>
            <a
              href="https://github.com/SanekxArcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
          <li className={`liContacts hover-btn`}>
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/od-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={`liContacts hover-btn`}>
            <i className="fa-brands fa-telegram"></i>
            <a
              href="https://t.me/Sanekx_Arcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </li>
          <li className={`liContacts hover-btn`}>
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://wa.me/qr/DISE7CCEVP5JJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsUp
            </a>
          </li>
          <li className={`liContacts hover-btn`}>
            <i className="fa-brands fa-facebook-messenger"></i>
            <a
              href="https://m.me/sanekx.arcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta Messenger
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Links;
