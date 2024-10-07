import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import About from "./Containers/About";
import Expertise from "./Containers/Expertise";
import Home from "./Containers/Home";
import Portfolio from "./Containers/Portfolio";
import Footer from "./Containers/Footer";
import Contact from "./Containers/Contact";
import Skills from "./Containers/Skills";

export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false); // Correct state declaration

  return (
    <div className={"font-shantell min-h-screen"}>
      <NavBar visibility={navMenuVisibility} setVisibility={setNavMenuVisibility} />
      <NavMenu visibility={navMenuVisibility} setNavMenuVisibility={setNavMenuVisibility} />
      <Home />
      <Expertise />
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
