import React from "react";
import { Link } from "react-router-dom";
import {} from "./Project.css";

const Project = ({ projectItem }) => {
  const { id, title, thumb, year } = projectItem;
  return (
    <div className="text-center services-boxes p-4 mt-3" data-aos="zoom-in">
      <div className="service-number">{id}</div>
      <div className="services-boxes-icon">
        <img src={thumb} alt={title} />
      </div>
      <div className="mt-4">
        <h5 className="mb-0 truncate">{title}</h5>
        <p className="mb-3">{year}</p>
        <Link to={`/projects/project/${id}`} className="detail-link">
          Details <span className="mdi mdi-chevron-double-right"></span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
