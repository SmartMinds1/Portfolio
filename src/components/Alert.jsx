import React from "react";

const Alert = ({children, onClose})=>{

    return(
        <div className="min-w[270px] md:min-w[350px] max-w-[25%] h-[25vh] bg-background m-auto flex-col-center justify-evenly z-40 text-center">
           <div>
               <p className="w-[80%] text-center m-auto"> {children} </p>
           </div>
            <button className="w-[4rem] h-[2rem] border-none rounded-2xl bg-soft-alert text-background hover:brightness-90 transition-all duration-200 cursor-pointer" onClick={onClose} >OK</button>
        </div>
    );
}
export default Alert
