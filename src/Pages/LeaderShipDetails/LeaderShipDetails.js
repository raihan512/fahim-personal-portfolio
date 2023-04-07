import React from "react";
import { useLoaderData } from "react-router-dom";

const LeaderShipDetails = () => {
  const leaderShipDetails = useLoaderData();
  const { title, images, desc } = leaderShipDetails;
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
          <img src={images[0]} className="mb-5 mx-auto" alt="" />
          {images.length > 2 && (
            <div>
              <div className="grid md:grid-cols-3 gap-5 mb-5">
                <img src={images[1]} className="md:h-56 lg:h-80" alt="" />
                <img src={images[2]} className="md:h-56 lg:h-80" alt="" />
                <img src={images[3]} className="md:h-56 lg:h-80" alt="" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <img src={images[4]} className="" alt="" />
                <img src={images[5]} className="" alt="" />
                <img src={images[6]} className="" alt="" />
                <img src={images[7]} className="" alt="" />
              </div>
            </div>
          )}

          <p className="text-lg text-[#555555] mt-5">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default LeaderShipDetails;
