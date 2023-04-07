import React from "react";
import { Link } from "react-router-dom";

const Work = ({ workItem }) => {
  const { id, title, thumb, year } = workItem;
  return (
    <div className="rounded-md hover:shadow-xl transition-all border hover:border-[#E33324] ">
      <div className="p-5">
        <Link to={`work/${id}`}>
          <img src={thumb} alt="" />
          <h4 className="text-xl font-semibold mt-4">{title}</h4>
          <p className="text-md text-[#555555]">{year}</p>
        </Link>
      </div>
    </div>
  );
};

export default Work;
