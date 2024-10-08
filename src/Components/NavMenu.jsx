import React from "react";
import NavImage from "/public/NavBar.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const handleVisibility = () => {
    setNavMenuVisibility(!visibility);
  };
  return (
    <div
      className={`flex flex-col items-center justify-center py-8 ${
        !visibility && "hidden"
      }`}
      style={{
        backgroundImage: `url(${NavImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src="/public/WhiteLogo.png" alt="Logo" className={"h-16 mb-4"} />

      <div className="flex flex-col items-center space-y-4 mt-4 text-white text-2xl">
        <button onClick={handleVisibility}>
          <a href="#home">Home</a>
        </button>
        <button onClick={handleVisibility}>
          <a href="#Portfolio">Portfolio</a>
        </button>

        <button onClick={handleVisibility}>
          <a href="#">Resume</a>
        </button>

        <button onClick={handleVisibility}>
          <a href="#aboutme">About me</a>
        </button>

        <button onClick={handleVisibility}>
          <a href="#contact">Contact</a>
        </button>
      </div>
      <div className={"flex justify-between mt-5"}>
        <FaTwitter
          color="white"
          size={60}
          className={"mr-4 cursor-pointer"}
          onClick={() => (window.location.href = "http://twitter.com/nasixrA")}
        />
        <FaLinkedin
          color="white"
          size={60}
          className={"mr-4 cursor-pointer"}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/nasixr/")
          }
        />
        <FaInstagram
          color="white"
          size={60}
          className="cursor-pointer"
          onClick={() => (window.location.href = "http://instagram.com/nasixr")}
        />
      </div>
    </div>
  );
}
