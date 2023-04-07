import React from "react";
import { Link } from "react-router-dom";

const CertificateItem = ({ certificate }) => {
  const { img, title, id, year } = certificate;
  return (
    <div data-aos="zoom-in">
      <Link to={`/certificates/certificate/${id}`}>
        <div>
          <img src={img} className="w-full hover:opacity-75" alt="" />
          <h5 className="truncate text-lg font-semibold mt-3">{title}</h5>
          <p>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default CertificateItem;
