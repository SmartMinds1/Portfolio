import React from "react";

const StatsBox = ({statsNum, statsDes}) => {
    return(
      <div className="bg-background mb-4 shadow-xl w-50 h-50 p-5 rounded-full flex flex-col items-center justify-evenly">
        <p className="text-2xl font-bold text-center text-secondary">{statsNum}</p>
        <p>{statsDes}</p>
      </div>
    );

}

export default StatsBox