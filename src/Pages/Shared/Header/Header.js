import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import {} from "./Header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuItems = (
    <>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="/works"
      >
        Work
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="/leaderships"
      >
        Leadership
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="projects"
      >
        Projects
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="certificates"
      >
        Certifications
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="/acheivements"
      >
        Acheivements
      </Link>
      <Link
        className="menu-items text-black font-semibold md:text-white text-sm lg:text-md xl:text-lg hover:text-base lg:hover:text-lg xl:hover:text-xl uppercase ml-2 lg:ml-5 border-t md:border-0 py-2 md:py-0 pl-4 md:pl-0 transition-all hover:text-[#E33324]"
        onClick={() => setMobileMenu(false)}
        to="contact"
      >
        Contact
      </Link>
    </>
  );
  return (
    <header className="z-40 sticky p-2 shadow-2xl bg-slate-950/75 top-0">
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
