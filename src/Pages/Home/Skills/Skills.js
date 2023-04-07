import React from "react";
import {} from "./Skills.css";
import { Slide } from "react-reveal";

const Skills = () => {
  return (
    <div className="px-2 my-10">
      <div className="container mx-auto">
        <h2 className="section-title2 text-xl md:text-2xl lg:text-3xl my-4 font-semibold mb-8">
          Skills
        </h2>
        {/* Skills Container*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h6 className="text-xl font-semibold text-[#555555]">HTML</h6>
              <div className="progress-number">70%</div>
            </div>
            <div className="progress-bar">
              <Slide left>
                <span className="progress" style={{ width: "70%" }}></span>
              </Slide>
            </div>
          </div>
          {/* Skill */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
