import React, { useRef } from "react";
import About from "../about/About"
import Building from "../building/Building"
import Cards from "../cards/Cards"
import Department from "../department/Department"
import Development from "../development/Development"
import Engineering from "../engineering/Engineering"
import Equipment from "../equipment/Equipment"
import Footer from "../footer/Footer"
import Intro from "../intro/Intro"
import 'animate.css';
import useVisible from "../../hooks/useVisible";

const Home = () => {

    const elemRef = useRef();
    const isVisible = useVisible(elemRef);

  return (
    <React.Fragment>
        <Intro />
        <About />
        <div ref={elemRef}>{isVisible && <Department />}</div>
        <Equipment />
        <Development />
        <Cards />
        <Engineering />
        <Building />
        <Footer />
    </React.Fragment>
  )
}

export default Home
