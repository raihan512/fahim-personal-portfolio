import React from "react";
import { useLoaderData } from "react-router-dom";

const AcheivementDetails = () => {
  const acheivementDetails = useLoaderData();
  const { title, thumb, desc } = acheivementDetails;
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
          <img src={thumb} className="md:w-6/12 mx-auto" alt="" />
          <p className="text-lg text-[#555555] mt-5 text-center">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default AcheivementDetails;
