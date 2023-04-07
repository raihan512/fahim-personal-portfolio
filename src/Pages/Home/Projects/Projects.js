import React, { useState } from "react";
import Project from "../../Shared/Project/Project";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const projectItem = projects[0];
  // console.log(projects[0]);
  //   Load Projects Data
  fetch("https://qfahim-server.vercel.app/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data));
  // Limit Showing Projects
  const limitedProjects = projects.slice(0, 3);

  return (
    <div className="px-2 my-10 mt-24">
      <div className="container mx-auto">
        <h2 className="section-title3 text-xl md:text-2xl lg:text-3xl my-4 font-semibold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {limitedProjects.map((projectItem) => (
            <>
              {projectItem.id === "1" && (
                <Fade left>
                  <Project
                    key={projectItem.id}
                    projectItem={projectItem}
                  ></Project>
                </Fade>
              )}
              {projectItem.id === "2" && (
                <Fade bottom>
                  <Project
                    key={projectItem.id}
                    projectItem={projectItem}
                  ></Project>
                </Fade>
              )}
              {projectItem.id === "3" && (
                <Fade right>
                  <Project
                    key={projectItem.id}
                    projectItem={projectItem}
                  ></Project>
                </Fade>
              )}
            </>
          ))}
        </div>
        <div className="flex justify-end">
          <Fade bottom>
            <button className="border border-[#E33324] text-[#E33324] py-2 px-8 mt-5 transition-all hover:bg-[#E33324] hover:text-white">
              <Link to="/projects" className="text-lg font-semibold">
                See All
              </Link>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
