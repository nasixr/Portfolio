import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className={"font-shantell min-h-screen"}>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<p>Not Found !</p>} />
      </Routes>
    </div>
  )
}