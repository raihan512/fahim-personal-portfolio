import React, { useState } from "react";
import CertificateItem from "../../Certificates/CertificateItem/CertificateItem";
import { Link } from "react-router-dom";

const HomeCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  //   Load Projects Data
  fetch("https://qfahim-server.vercel.app/certificates")
    .then((res) => res.json())
    .then((data) => setCertificates(data));
  // Limit Showing Projects
  const limitedCertificates = certificates.slice(0, 3);
  return (
    <div className="px-2 my-10 mt-24">
      <div className="container mx-auto">
        <h2 className="section-title3 text-xl md:text-2xl lg:text-3xl my-4 font-semibold mb-8 text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {limitedCertificates.map((certificate) => (
            <CertificateItem
              key={certificate.id}
              certificate={certificate}
            ></CertificateItem>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="border border-[#E33324] text-[#E33324] py-2 px-8 mt-5 transition-all hover:bg-[#E33324] hover:text-white">
            <Link to="/certificates" className="text-lg font-semibold">
              See All
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCertificates;
