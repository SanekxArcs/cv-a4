import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

function App() {
  const ref = useRef(null);
  let docTitle = document.title,
    langTitle = "Come back👏🏻";
    
  window.addEventListener("blur", () => {
    document.title = langTitle;
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  const [isOpen, setIsOpen] = useState(false);
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    threshold: 1,
  });
  const { ref: nameRef, inView: nameIsVisible } = useInView({
    threshold: 1,
  });

  const onClickHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header
        imageIsVisible={imageIsVisible}
        nameIsVisible={nameIsVisible}
        onClickHandle={onClickHandle}
        isOpen={isOpen}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 print:mt-10 "
      >
        <Aside imageRef={imageRef} />
        <Main nameRef={nameRef} />
      </motion.div>
      <Footer />
    </>
  );
}

export default App;
