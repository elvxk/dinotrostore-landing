import { useState } from "react";
import { Link } from "react-scroll";
import Theme from "./Theme";
import sign from "../assets/dnts1.webp";
import mascot from "../assets/dnts.webp";
import logo from "../assets/logocolor.webp";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [bgNav, setBgNav] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 1) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={`py-2 z-20 fixed w-full flex flex-col justify-between transition-all ${
          bgNav ? "bg-[#0E101C]" : ""
        }`}
      >
        <div className="container flex justify-between items-center px-4 mx-auto">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={750}
            className="flex justify-start items-start hover:scale-[105%] transition-all"
          >
            <img draggable="false" src={logo} alt="logo" className="h-[30px]" />
          </Link>
          <div className="justify-center py-2 gap-10 font-single text-xl hidden lg:flex items-center text-white dark:text-black">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={750}
              className="cursor-pointer hover:scale-105 transition-all hover:text-green-500"
            >
              HOME
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={750}
              className="cursor-pointer hover:scale-105 transition-all hover:text-green-500"
            >
              ABOUT
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={750}
              className="cursor-pointer hover:scale-105 transition-all hover:text-green-500"
            >
              SERVICES
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={750}
              className="cursor-pointer hover:scale-105 transition-all hover:text-green-500"
            >
              CONTACT
            </Link>
            {/* <div className="hover:scale-105 hover:rotate-12 transition-all items-center flex justify-center">
              <Theme />
            </div> */}
          </div>
          <div className="flex gap-2 items-center justify-between lg:hidden">
            {/* <div className="hover:scale-105 hover:rotate-12 transition-all">
              <Theme />
            </div> */}
            <div className="flex justify-center items-center gap-4 ">
              <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" w-11 h-11 p-3 rounded-xl hover:scale-105 bg-cpink"
              >
                <div
                  className={`bg-white dark:bg-black h-1 w-full transition-all rounded-full ${
                    menuOpened ? "rotate-45 translate-y-0.5" : ""
                  }`}
                />
                <div
                  className={`bg-white dark:bg-black my-1 h-1 w-full transition-all rounded-full ${
                    menuOpened ? "hidden" : ""
                  }`}
                />
                <div
                  className={`bg-white dark:bg-black h-1 w-full transition-all rounded-full ${
                    menuOpened ? "-rotate-45 -translate-y-0.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`menunav z-10 w-full lg:hidden fixed top-0 right-0 bottom-0 bg-[#0E101C] dark:bg-white transition-all ease-in-out duration-00 overflow-hidden flex flex-col ${
          menuOpened ? "h-screen" : "h-0"
        }`}
      >
        <div className="font-single flex-1 text-3xl transition-all text-white dark:text-black flex items-center justify-center flex-col gap-8 px-12">
          <img
            onClick={() => setMenuOpened(!menuOpened)}
            src={sign}
            alt="dinotrostore"
            className="aspect-auto h-[80px] mb-14 hover:scale-95 transition-all cursor-pointer"
          />
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={750}
            onClick={() => setMenuOpened(!menuOpened)}
            className="cursor-pointer hover:scale-110 transition-all hover:text-green-500"
          >
            HOME
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={750}
            onClick={() => setMenuOpened(!menuOpened)}
            className="cursor-pointer hover:scale-110 transition-all hover:text-green-500"
          >
            ABOUT
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={750}
            onClick={() => setMenuOpened(!menuOpened)}
            className="cursor-pointer hover:scale-110 transition-all hover:text-green-500"
          >
            SERVICES
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={750}
            onClick={() => setMenuOpened(!menuOpened)}
            className="cursor-pointer hover:scale-110 transition-all hover:text-green-500"
          >
            CONTACT
          </Link>
          <a
            href="https://dinotrostore.com"
            target="_blank"
            className="flex flex-col pt-20 justify-center items-center cursor-pointer hover:scale-95 transition-all"
          >
            <img
              src={mascot}
              alt="mascot"
              className="h-[70px] aspect-square -mb-4"
            />
            <h1 className="text-sm font-manrope text-green-500">
              www.dinotrostore.com
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
