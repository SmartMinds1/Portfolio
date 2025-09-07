import React from "react";

const SkillCard = ({cardTitle, cardDes}) => {

    return(
      <div className="bg-background shadow-xl w-50 h-80 p-5 rounded-2xl flex flex-col items-center justify-evenly hover:shadow-2xl transition-all duration-400 cursor-pointer">
        <p className="text-2xl font-bold text-center text-primary">{cardTitle}</p>
        <p className="text-md text-text-muted">{cardDes}</p>
      </div>
    );

}

export default SkillCard