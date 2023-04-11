import React, { useState } from "react";
import Project from "../Shared/Project/Project";
import Zoom from "react-reveal/Fade";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  //   Load Projects Data
  fetch("https://qfahim-server-raihan512.vercel.app/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data));
  return (
    <section className="px-2">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mt-10 mb-14">
          <h2 className="text-2xl lg:text-4xl font-semibold uppercase sm:w-4/12 text-center">
            All Projects
          </h2>
        </div>
        {/* Project Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((projectItem) => (
            <>
              <Project key={projectItem.id} projectItem={projectItem}></Project>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
