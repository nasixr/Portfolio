import NavBar from "./Components/NavBar";
import About from "./Containers/About";
import Expertise from "./Containers/Expertise";
import Home from "./Containers/Home";
import Portfolio from "./Containers/Portfolio";

export default function App() {
  return (
    <div className={"font-shantell min-h-screen"}>
      <NavBar/>
      <Home />
      <Expertise/>
      <About/>
      <Portfolio/>
    </div>
  )
}