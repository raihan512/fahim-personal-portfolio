import React, { useState } from "react";
import Acheivement from "./Acheivement/Acheivement";

const Acheivements = () => {
  const [achievements, setAceivements] = useState([]);
  fetch("https://qfahim-server.vercel.app/acheivements")
    .then((res) => res.json())
    .then((data) => setAceivements(data));
  return (
    <section className="px-2">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex justify-center mt-10 mb-14">
          <h2 className="text-2xl lg:text-4xl font-semibold uppercase sm:w-4/12 text-center border-b-2 border-[#E33324]">
            Achievements
          </h2>
        </div>
        {/* Project Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievements.map((achievementItem) => (
            <Acheivement
              key={achievementItem.id}
              achievementItem={achievementItem}
            ></Acheivement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acheivements;
