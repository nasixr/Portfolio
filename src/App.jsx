import NavBar from "./Components/NavBar";
import Expertise from "./Containers/Expertise";
import Home from "./Containers/Home";

export default function App() {
  return (
    <div className={"font-shantell min-h-screen"}>
      <NavBar/>
      <Home />
      <Expertise/>
    </div>
  )
}