import React from "react";
import {} from "./Skills.css";

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
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">HTML</h6>
            <div className="relative">
              <div className="progress-bar">
                <span className="progress-number">90%</span>
                <span className="progress" style={{ width: "90%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              JAVASCRIPT
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">80%</span>
                <span className="progress" style={{ width: "80%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">CSS</h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">55%</span>
                <span className="progress" style={{ width: "55%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              JQUERY
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">60%</span>
                <span className="progress" style={{ width: "60%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              ANGULAR JS
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">70%</span>
                <span className="progress" style={{ width: "70%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              WORDPRESS
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">78%</span>
                <span className="progress" style={{ width: "78%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              ILLUSTRATOR
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">95%</span>
                <span className="progress" style={{ width: "95%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              AFTER EFFECTS
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">99%</span>
                <span className="progress" style={{ width: "99%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
          <div>
            <h6 className="text-xl font-semibold mb-3 text-[#555555]">
              PHOTOSHOP
            </h6>
            <div className="relative">
              <div className="progress-bar relative">
                <span className="progress-number">85%</span>
                <span className="progress" style={{ width: "85%" }}></span>
              </div>
            </div>
          </div>
          {/* Skill */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
