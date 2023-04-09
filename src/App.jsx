import { useState } from "react";
import { useInView } from "react-intersection-observer";

import Aside from "./components/Aside/Aside";
import Header from "./components/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

function App() {
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
      <div className="grid sm:grid-cols-3 grid-cols-1 print:mt-10 ">
        <Aside imageRef={imageRef}/>
        <Main nameRef={nameRef}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
