import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const WorkDetails = () => {
  const workDetails = useLoaderData();
  const { title, images, duration, location, link, desc } = workDetails;
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="mb-5">
              <img
                src={images[0]?.img}
                className="mb-3 px-5 mx-auto max-w-[400px]"
                alt=""
              />
              <p className="text-xs md:text-md text-center">
                {images[0]?.caption}
              </p>
            </div>
            <div className="mb-5">
              <img
                src={images[1]?.img}
                className="mb-3 px-5 w-full mx-auto"
                alt=""
              />
              <p className="text-xs md:text-md text-center">
                {images[1]?.caption}
              </p>
            </div>
          </div>
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-[#6D6D6D] mb-3">
            {duration}
          </h3>
          <div className="flex flex-wrap mb-3">
            <Link to={link}>
              <h4 className="text-md md:text-lg font-semibold text-blue-800 underline mr-1">
                {title}
              </h4>
            </Link>
            <h4 className="text-md md:text-lg font-semibold text-[#6D6D6D]">
              {location}
            </h4>
          </div>
          <p className="text-md md:text-lg text-[#555555] mt-5">{desc[0]}</p>
          <p className="text-md md:text-lg text-[#555555] mt-5">{desc[1]}</p>
          <p className="text-md md:text-lg text-[#555555] mt-5">{desc[2]}</p>
          {/* Rest Image Gallery */}
          <div className="flex flex-wrap justify-evenly">
            {images[2]?.img && (
              <div>
                <img src={images[2]?.img} className="mt-5 h-96 mb-2" alt="" />
                <p className="text-xs md:text-md text-[#6d6d6d]">
                  {images[2]?.caption}
                </p>
              </div>
            )}
            {images[3]?.img && (
              <div>
                <img src={images[3]?.img} className="mt-5 h-96 mb-2" alt="" />
                <p className="text-xs md:text-md text-[#6d6d6d]">
                  {images[3]?.caption}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
