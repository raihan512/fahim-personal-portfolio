import React, { useState } from "react";
import LeaderShipItem from "./LeaderShipItem/LeaderShipItem";
import Fade from "react-reveal/Fade";

const LeaderShip = () => {
  const [leadership, setLeadership] = useState([]);
  console.log(leadership);

  fetch("https://qfahim-server.vercel.app/leadership")
    .then((res) => res.json())
    .then((data) => setLeadership(data));
  return (
    <section className="px-2 my-6 md:my-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase text-center border-b-2 border-[#E33324]">
            LeaderShip
          </h2>
        </div>
        {/* Content */}
        <div className="md:w-8/12 mx-auto gap-8">
          <div className="grid grid-cols-2 gap-8">
            {leadership.map((leaderShipSingle) => (
              <LeaderShipItem
                key={leaderShipSingle.id}
                leaderShipSingle={leaderShipSingle}
              ></LeaderShipItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
