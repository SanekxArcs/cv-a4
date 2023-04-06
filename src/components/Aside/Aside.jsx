import React from "react";

const Aside = () => {
  return (
    <>
      <aside className="flex flex-col gap-5 px-5">
        <img
          ref={imageRef}
          className="h-32 w-32 my-2 md:h-52 md:w-52 mx-auto animate-fadeIn animate-duration-500 md:my-12"
          src={myPhoto}
          alt="Oleksandr Dzisiak photo"
        />

        <div ref={contactsRef} className={animation}>
          <details open className="">
            <summary className="flex cursor-pointer marker:hidden">
              <h3 className={h3}>Contacts</h3>
            </summary>
            <ul className={` flex flex-col items-start justify-start gap-2`}>
              <li className={`${liContacts} text-sm lg:text-base`}>
                <i className="fa-solid fa-at"></i>
                <a href="mailto:oleksandr.dzisiak@gmail.com">
                  oleksandr.dzisiak@gmail.com
                </a>
              </li>
              <li className={liContacts}>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+48 735 145 620">+48 735 145 620</a>
              </li>
              <li className={liContacts}>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+380 961 016 968">+380 961 016 968</a>
              </li>
              <li className={liContacts}>
                <i className="fa-solid fa-location-dot"></i>
                <a
                  href="https://goo.gl/maps/FBqjq7pZKCouV9hr6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Poland
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div>
          <h3 className={h3}>Tech Skills</h3>
          <ul className="flex flex-wrap gap-2">
            <li className={liTechSkills}>HTML5</li>
            <li className={liTechSkills}>CSS3</li>
            <li className={liTechSkills}>Tailwind CSS</li>
            <li className={liTechSkills}>SCSS</li>
            <li className={liTechSkills}>Bootstrap</li>
            <li className={liTechSkills}>JavaScript</li>
            <li className={liTechSkills}>TypeScript</li>
            <li className={liTechSkills}>jQuery</li>
            <li className={liTechSkills}>ReactJS</li>
            <li className={liTechSkills}>React Router</li>
            <li className={liTechSkills}>Redux</li>
            <li className={liTechSkills}>Gatsby</li>
            <li className={liTechSkills}>Vite</li>
            <li className={liTechSkills}>Git/GitHub</li>
            <li className={liTechSkills}>WebPack</li>
            <li className={liTechSkills}>Netlify</li>
            <li className={liTechSkills}>Vercel</li>
            <li className={liTechSkills}>CMS platforms</li>
            <li className={liTechSkills}>REST</li>
            <li className={liTechSkills}>Ajax</li>
            <li className={liTechSkills}>Figma</li>
            <li className={liTechSkills}>AI</li>
            <li className={liTechSkills}>Photoshop</li>
            <li className={liTechSkills}>Lightroom</li>
            <li className={liTechSkills}>Framer Motion</li>
          </ul>
        </div>

        <div className="select-none">
          <h3 className={h3}>Soft Skills</h3>
          <ul className="flex flex-col gap-1 select-none">
            <li className="select-none">Communication</li>
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Adaptability</li>
            <li>Time management</li>
            <li>Creativity</li>
            <li>Leadership skills</li>
          </ul>
        </div>

        <div>
          <h3 className={h3}>Languages</h3>
          <ul className="flex flex-col gap-1">
            <li className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <clipPath id="svgIDa">
                  <circle cx="256" cy="256" r="256"></circle>
                </clipPath>
                <g clipPath="url(#svgIDa)">
                  <path
                    fill="#eee"
                    d="m0 0l8 16l-8 15v16l32 65l-32 64v32l32 48l-32 48v32l32 64l-32 65v47l16-8l15 8h16l65-32l64 32h32l48-32l48 32h32l64-32l65 32h47l-8-15l8-16v-16l-32-65l32-64v-32l-32-48l32-48v-32l-32-64l32-65V0l-15 8l-16-8h-16l-65 32l-64-32h-32l-48 32l-48-32h-32l-64 32L47 0H0z"
                  ></path>
                  <path
                    fill="#0052b4"
                    d="m47 0l129 129V0Zm289 0v129L465 0ZM0 47v129h129Zm512 0L383 176h129ZM0 336v129l129-129Zm383 0l129 129V336Zm-47 47v129h129zm-160 0L47 512h129Z"
                  ></path>
                  <path
                    fill="#d80027"
                    d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"
                  ></path>
                  <path
                    fill="#d80027"
                    d="m336 336l176 176v-31L367 336Zm0-160L512 0h-31L336 145Zm-160 0L0 0v31l145 145zm0 160L0 512h31l145-145Z"
                  ></path>
                </g>
              </svg>
              English - B1
            </li>
            <li className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <mask id="circleFlagsPl0">
                  <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                </mask>
                <g mask="url(#circleFlagsPl0)">
                  <path
                    fill="#d80027"
                    d="m0 256l256.4-44.3L512 256v256H0z"
                  ></path>
                  <path fill="#eee" d="M0 0h512v256H0z"></path>
                </g>
              </svg>
              Poland - C1
            </li>
            <li className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <mask id="circleFlagsUa0">
                  <circle cx="256" cy="256" r="256" fill="#fff"></circle>
                </mask>
                <g mask="url(#circleFlagsUa0)">
                  <path
                    fill="#ffda44"
                    d="m0 256l258-39.4L512 256v256H0z"
                  ></path>
                  <path fill="#338af3" d="M0 0h512v256H0z"></path>
                </g>
              </svg>
              Ukrainian - Native
            </li>
          </ul>
        </div>

        <div>
          <h3 className={h3}>Links</h3>
          <ul className="flex flex-col gap-1">
            <li className={liContacts}>
              <i className="fa-brands fa-github"></i>
              <a
                href="https://github.com/SanekxArcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </li>
            <li className={liContacts}>
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/od-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className={liContacts}>
              <i className="fa-brands fa-telegram"></i>
              <a
                href="https://t.me/Sanekx_Arcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
            <li className={liContacts}>
              <i className="fa-brands fa-linkedin"></i>
              <a
                href="https://wa.me/qr/DISE7CCEVP5JJ1"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsUp
              </a>
            </li>
            <li className={liContacts}>
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

        <div>
          <h3 className={h3}>Interests</h3>
          <ul className="flex flex-col gap-1">
            <li>Development</li>
            <li>3D Modeling</li>
            <li>Snowboarding</li>
            <li>Tennis</li>
            <li>Racing</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h3 className={h3}>VCARD</h3>
          <a
            href="https://qr-coge-vcard-generator.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${hover} max-w-56 max-h-56 mix-blend-multiply`}
              src={qrCodePng}
              alt=""
            />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Aside;
