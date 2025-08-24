import React from "react";
import Header from "../components/Header";

const Services = () => {
    return(
        <div className="bg-background">
            {/* SECTION 1 */}
            <div className="w-full h-[100vh] bg-primary flex flex-col items-center justify-between">
                <Header/>
                <div className="w-full h-7/8 flex flex-row items-center justify-center flex-wrap">
                   <div className="w-1/2 h-3/5">
                        <div className=" pl-4 border-l-1 border-background w-110">
                             <p className="h-full text-5xl text-background">Services Designed to Build & <span className=" text-accent headerSpan"> Grow Your Business </span></p>
                        </div>
                        <br /><br /><br />
                        <p className="text-sm text-background">Creating a powerful online presence by providing everything you need to succeed!</p>
                   </div>
                   <div className=" w-1/3 h-full flex flex-row items-center justify-center">
                      <div className="w-60 h-70 bg-accent shadow-2xl rotate-30 rounded-2xl">
                         <div className="w-60 h-70 bg-secondary -rotate-30 -translate-x-18 rounded-2xl shadow-2xl p-4">
                            <ul className="flex flex-col items-start justify-evenly h-full text-xl  list-disc p-4">
                                <li className="text-background">Web Development</li>
                                <li>Google Ads Management</li>
                                <li className="text-background">Analytics & Optimization</li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    );

}

export default Services