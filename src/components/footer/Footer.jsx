import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-slate-950  items-center  py-10 relative">
      <div className=" items-center flex flex-col">
        <ul className="flex items-center text-white justify-center gap-3 mb-4 md:mb-6">
          <li className="text-xs  md:text-sm hover:text-pink cursor-pointer">
            Terms Of Use
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            Privacy-Policy
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            About
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            Blog
          </li>
          <li className="text-xs md:text-sm hover:text-pink cursor-pointer">
            FAQ
          </li>
        </ul>
        <p className="text-xs text-gray-500 opacity-50 text-center max-w-[800px] mb-4 md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 text-white h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaFacebookF />
          </div>
          <div className="w-12 text-white h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaInstagram />
          </div>
          <div className="w-12 text-white h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaTwitter />
          </div>
          <div className="w-12 text-white h-12 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all ease-in duration-300 hover:shadow-lg hover:text-pink">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
