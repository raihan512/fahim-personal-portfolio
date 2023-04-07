import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import ExperienceEducation from "./ExperienceEducation/ExperienceEducation";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import HomeCertificates from "./HomeCertificates/HomeCertificates";
import HomeAcheivements from "./HomeAcheivements/HomeAcheivements";
import HomeContact from "./HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <ExperienceEducation></ExperienceEducation>
      <Skills></Skills>
      <Projects></Projects>
      <HomeCertificates></HomeCertificates>
      <HomeAcheivements></HomeAcheivements>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
