import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProjectItem = () => {
  const projectDetails = useLoaderData();
  const { title, desc, images, linkName, link } = projectDetails;
  return (
    <section className="px-2 my-6 md:my-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase text-center">
            {title}
          </h2>
        </div>
        {/* Content */}
        <div>
          <div className="flex justify-center flex-wrap">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={i}
                className="w-6/12 mx-auto p-2 "
              />
            ))}
          </div>
          <p className="text-xl font-semibold text-[#555555] mt-5">{desc}</p>
          <h5 className="mt-5 mb-3 text-lg font-semibold border-b-2 border-[#555555]">
            Links
          </h5>
          <ul className="">
            <li>
              <Link
                className="font-semibold text-black text-base hover:text-[#E33324] hover:pl-1 transition-all"
                to={`${link[0]}`}
              >
                {" "}
                {linkName[0]}{" "}
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-black text-base hover:text-[#E33324] hover:pl-1 transition-all"
                to={`${link[1]}`}
              >
                {" "}
                {linkName[1]}{" "}
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-black text-base hover:text-[#E33324] hover:pl-1 transition-all"
                to={`${link[2]}`}
              >
                {" "}
                {linkName[2]}{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
