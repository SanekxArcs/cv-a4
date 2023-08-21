import React from "react";
import { motion } from "framer-motion";
const Contacts = () => {
  return (
    <>
      <motion.div className="break-before-auto">
        <details open>
          <summary className="flex cursor-pointer marker:hidden">
            <h3 className="pointer-events-none select-none">
              <i class="fa-regular fa-address-card pr-2"></i>Contacts
            </h3>
          </summary>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li className="text-sm liContacts lg:text-base hover-btn">
              <i className="fa-solid fa-at"></i>
              <a href="mailto:oleksandr.dzisiak@gmail.com">
                oleksandr.dzisiak@gmail.com
              </a>
            </li>
            <li className="liContacts hover-btn">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+48 735 145 620">+48 735 145 620</a>
            </li>
            <li className="liContacts hover-btn">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+380 961 016 968">+380 961 016 968</a>
            </li>
            <li className="liContacts hover-btn">
              <i className="fa-solid fa-location-dot"></i>
              <a
                href="https://goo.gl/maps/FBqjq7pZKCouV9hr6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poland, Warsaw
              </a>
            </li>
          </ul>
        </details>
      </motion.div>
    </>
  );
};

export default Contacts;
