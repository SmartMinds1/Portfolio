import React from "react";

const PricingCard = ({packageName, packagePrice, packageDes, cta, children}) => {
    return(
        <div className="w-fit h-fit flex flex-col gap-2 items-center">
            <div className="shadow-xl bg-background w-75 sm:w-80 h-130 p-5 rounded-2xl flex flex-col items-center justify-between hover:shadow-2xl transition-all duration-400">
              {/* first section */}
                  <div className="w-[100%] h-[40%] bg-[hsl(0,9%,96%)] rounded-2xl flex flex-col items-center justify-evenly p-2">
                    <h3 className="w-full text-xl">{packageName}</h3>
                    <p className="text-text-muted text-sm">{packageDes}</p>
                    <p className="font-bold text-2xl mt-6 w-full"> <span className="text-accent">$</span>{packagePrice} <span className="font-extralight text-lg">/service</span></p>
                  </div>

              {/* Features section */}
                  <div className="w-[100%] text-text-muted h-[55%]">
                    <p className="font-bold w-full mb-3">Features</p>
                    {children}
                  </div>
                  <button className="w-full h-10 bg-transparent text-primary border-1 border-accent shadow-lg rounded-2xl mt-4 hover:bg-accent duration-200 hover:text-background cursor-pointer mb-2">{cta}</button>
            </div>
        </div>
       )
    }

export default PricingCard