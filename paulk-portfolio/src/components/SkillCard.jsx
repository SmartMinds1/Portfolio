import React from "react";

const SkillCard = ({cardTitle, cardDes, icon}) => {

    return(
      <div className="bg-background shadow-xl w-50 h-80 p-5 rounded-2xl flex-col-center justify-start hover:shadow-2xl transition-all duration-400 cursor-pointer">
        <div className="mb-4 text-3xl text-secondary">{icon}</div>
        <p className="text-2xl mb-4 font-bold text-center text-primary">{cardTitle}</p>
        <p className="text-md text-text-muted">{cardDes}</p>
      </div>
    );

}

export default SkillCard