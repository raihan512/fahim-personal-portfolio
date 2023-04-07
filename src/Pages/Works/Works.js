import React, { useState } from "react";
import Work from "./Work/Work";
import Fade from "react-reveal/Fade";

const Works = () => {
  const [works, setWorks] = useState([]);
  fetch("https://qfahim-server.vercel.app/works")
    .then((res) => res.json())
    .then((data) => setWorks(data));
  return (
    <section className="px-2">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mt-10 mb-14">
          <h2 className="text-2xl lg:text-4xl font-semibold uppercase sm:w-4/12 text-center border-b-2 border-[#E33324]">
            Works
          </h2>
        </div>
        {/* Project Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {works.map((workItem) => (
            <Work key={workItem.id} workItem={workItem}></Work>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
