import React from "react";
import Typed from "react-typed";
import {} from "./Hero.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero h-screen bg-no-repeat  bg-cover bg-right bg-slate-900/70 -mt-14 px-2">
      <div className="container mx-auto pt-32 md:pt-40 lg:pt-56 text-white z-50">
        <div className="w-full md:w-10/12 lg:w-6/12">
          <Fade bottom>
            <h2 className="text-xl md:text-2xl mb-3">
              I am Quazi Fahim Mohammadullah
            </h2>
          </Fade>
          <Fade bottom>
            <div className="text-3xl md:text-4xl mb-5">
              I am a &nbsp;
              <span className="text-[#E33324] block md:inline">
                <Typed
                  strings={["Full Stack Developer", "Content Writer"]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </span>
            </div>
          </Fade>
          <Fade bottom>
            <p className="mb-8 text-md md:text-xl">
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
          </Fade>
          <Fade bottom>
            <button className="py-2 px-8 border hover:bg-[#E33324] hover:border-[#E33324] transition-all">
              <Link to="">RESUME</Link>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
