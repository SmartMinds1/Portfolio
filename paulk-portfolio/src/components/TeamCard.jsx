import React from "react";

const TeamCard = ({memberName, memberDesc, teamImg}) => {
    return(
        <div className="w-fit h-fit flex flex-col gap-2 items-center">
            <div style={{ backgroundImage: `url(${teamImg})`}} className="shadow-xl bg-background w-50 h-60 p-5 rounded-2xl flex flex-col items-center justify-between hover:scale-105 transition-all duration-400 bg-cover bg-center"></div>
            <div className="w-full p-2 text-center">
              <h3 className="">{memberName}</h3>
              <p className="text-sm text-primary">{memberDesc}</p>
            </div>
        </div>
       )
    }

export default TeamCard