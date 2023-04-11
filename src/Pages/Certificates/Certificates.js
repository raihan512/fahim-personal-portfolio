import React, { useState } from "react";
import CertificateItem from "./CertificateItem/CertificateItem";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  fetch("https://qfahim-server-raihan512.vercel.app/certificates")
    .then((res) => res.json())
    .then((data) => setCertificates(data));
  return (
    <section className="px-2 my-6 md:my-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase text-center">
            My Certificates
          </h2>
        </div>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {certificates.map((certificate) => (
          <CertificateItem
            key={certificate.id}
            certificate={certificate}
          ></CertificateItem>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
