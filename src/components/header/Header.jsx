import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("bg-black bg-opacity-40");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const controlNavBar = () => {
    //console.log(window.scrollY);
    if (window.scrollY > 250) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hidden -translate-y-60 ");
      } else {
        setShow(" bg-black");
      }
    } else {
      setShow("bg-black bg-opacity-40");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <>
      <header
        className={`w-screen fixed top-0 left-0 flex${
          mobileMenu ? "-col bg-slate-900" : `-col ${show}`
        } items-center justify-around  z-20 `}
      >
        {/* <header className="w-screen z-10 absolute items-center justify-around   flex-col bg-black bg-opacity-50  "> */}
        <div
          className={`${
            mobileMenu ? "" : "w-screen flex flex-row justify-between"
          }`}
        >
          <div
            className={`flex flex-row items-center justify-between max-md:w-screen `}
          >
            <img
              src={logo}
              onClick={() => navigate("/")}
              className=" w-48 ml-11 hover:cursor-pointer h-24 mx-11 max-md:mx-4 transition-all duration-500"
            />
            <div className=" md:hidden flex text-white mr-16 space-x-9 top-0 flex-row items-start">
              <HiOutlineSearch onClick={openSearch} />
              {mobileMenu ? (
                <VscChromeClose onClick={() => setMobileMenu(false)} />
              ) : (
                <SlMenu onClick={openMobileMenu} />
              )}
            </div>
          </div>
          <ul
            className={` text-xl flex${
              mobileMenu
                ? "-col flex w-screen items-start ml-4 space-y-4"
                : "-row flex  items-center max-md:hidden space-x-4 mr-3 md:space-x-8 "
            }  `}
          >
            {/* <ul className=" flex-col flex justify-start items-start w-screen "> */}
            <li
              className="menuItem  text-white py-2 hover:cursor-pointer px-4 md:w-7/9"
              onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>
            <li
              className={`menuItem hover:cursor-pointer   text-white ${
                mobileMenu ? "px-4" : "px-4"
              } `}
              onClick={() => navigationHandler("tv")}
            >
              TV Shows
            </li>
            <li
              className={`menuItem  max-md:hidden ${
                mobileMenu ? "hidden" : ""
              }  w-12 h-12 text-white flex justify-center items-center `}
            >
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
        </div>
        {showSearch && (
          <div className="show bg-white flex flex-row justify-between">
            <input
              className="h-10 ml-4 w-screen md:h-12 md:pl-6 text-base md:text-lg text-black placeholder-gray-400"
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            {/* <div> */}
            <VscChromeClose
              className="  mt-3 mr-9 font-black h-5 w-7"
              onClick={() => setShowSearch(false)}
            />
            {/* </div> */}
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
//  <ul
//           className={`flex${
//             mobileMenu ? "-col flex w-screen" : "-row flex max-md:hidden"
//           }  justify-start items-center space-x-4 md:space-x-8 lg:space-x-12`}
//         ></ul>
