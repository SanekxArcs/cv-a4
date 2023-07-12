import React from "react";
import { motion } from "framer-motion";
const Contacts = () => {
  return (
    <>
      <motion.div className="break-before-auto">
        <details open>
          <summary className="flex cursor-pointer marker:hidden">
            <h3 className="pointer-events-none select-none">Contacts</h3>
          </summary>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li className="text-sm liContacts lg:text-base hover-btn">
              <i className="fa-solid fa-at"></i>
              <a href="mailto:lanovenko.shs@gmail.com">
                lanovenko.shs@gmail.com
              </a>
            </li>
            <li className="liContacts hover-btn">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+380961902577">+380 961 902 577</a>
            </li>
            <li className="liContacts hover-btn">
              <i className="fa-solid fa-location-dot"></i>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Ukraine
              </a>
            </li>
          </ul>
        </details>
      </motion.div>
    </>
  );
};

export default Contacts;
