import React from "react";
import { Link } from "react-router-dom";

const Acheivement = ({ achievementItem }) => {
  const { thumb, title, id, year } = achievementItem;
  return (
    <div data-aos="zoom-in">
      <Link to={`/acheivements/acheivement/${id}`}>
        <div>
          <div className="h-44 overflow-hidden">
            <img
              src={thumb}
              className="w-full hover:opacity-75 transition-all"
              alt=""
            />
          </div>
          <h5 className="truncate text-lg font-semibold mt-3">{title}</h5>
          <p>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default Acheivement;
