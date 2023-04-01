import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import {} from "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;
  const menuItems = (
    <>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        About
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Work
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Leadership
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Projects
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Certificates
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Acheivements
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to=""
      >
        Contact
      </Link>
    </>
  );
  return (
    <header className={`${classes} z-40 sticky p-2`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to=""
              className="header-logo font-semibold text-2xl lg:text-4xl text-white"
            >
              QFahim
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">{menuItems}</div>
          {/* Mobile Menu */}
          <div className="block md:hidden relative">
            <AiOutlineMenu
              className="mobile-menu text-2xl text-white cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
            {mobileMenu && (
              <div className="absolute top-8 -right-2 flex flex-col bg-white w-screen py-2 px-8">
                {menuItems}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
