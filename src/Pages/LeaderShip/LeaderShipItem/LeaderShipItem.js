import React from "react";
import { Link } from "react-router-dom";

const LeaderShipItem = ({ leaderShipSingle }) => {
  const { id, title, thumb, year } = leaderShipSingle;
  return (
    <div
      className="rounded-md hover:shadow-xl transition-all border hover:border-[#E33324] "
      data-aos="zoom-in"
    >
      <div className="p-5">
        <Link to={`leadership/${id}`}>
          <img src={thumb} className="transition-all hover:scale-75" alt="" />
          <h4 className="text-xl font-semibold mt-4">{title}</h4>
          <p className="text-md text-[#555555]">{year}</p>
        </Link>
      </div>
    </div>
  );
};

export default LeaderShipItem;
