import React from "react";
import NavImage from "/public/NavBar.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function NavMenu({ visibility }) {
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
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Resume</a>
        <a href="#">About me</a>
        <a href="#">Contact</a>
      </div>
      <div className={"flex justify-between mt-5"}>
        <FaTwitter color="white" size={60} className={"mr-4"} />
        <FaLinkedin color="white" size={60} className={"mr-4"} />
        <FaInstagram color="white" size={60} />
      </div>
    </div>
  );
}
