import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./components/customHooks/useFollowPointer";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

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
    
    <Header imageIsVisible={imageIsVisible} nameIsVisible={nameIsVisible} onClickHandle={onClickHandle} isOpen={isOpen}/>
      
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 print:mt-10 ">
        <Aside imageRef={imageRef}/>
        <Main nameRef={nameRef}/>
      </motion.div>
      <Footer/>
      <motion.div
    ref={ref}
    className="w-5 h-5 bg-transparent rounded-full ring-2 ring-emerald-900 dark:ring-emerald-50"
    animate={{ x, y }}
    transition={{
      type: "spring",
      damping: 10,
      stiffness: 50,
      restDelta: 0.001
    }}></motion.div>
    </>
  );
}

export default App;
