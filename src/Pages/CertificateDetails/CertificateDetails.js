import React from "react";
import { useLoaderData } from "react-router-dom";

const CertificateDetails = () => {
  const certificateDetails = useLoaderData();
  const { title, img } = certificateDetails;
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
          <img src={img} className="md:w-6/12 mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CertificateDetails;
