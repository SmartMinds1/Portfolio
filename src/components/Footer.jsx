import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faLocationPin, faMailBulk, faMapLocation, faMapLocationDot, faMessage, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = ()=> {
    return(
       <div className="w-full h-90 bg-primary flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-evenly w-full h-4/5">
            {/* logo div */}
            <div className="w-1/4 h-full flex flex-col items-start justify-center pl-26">
                <div className="w-40 flex flex-row items-end justify-center">
                  <div className="w-10 h-10 bg-[url('/bigStarWhite.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                  <p className="text-background text-2xl font-extrabold">bizN<span className="text-accent text-2xl font-light">utritia</span></p>
                </div>
                <p className="w-full text-md text-bg-dark text-sm mt-4">Ideas that grow, connections that scale.</p>
                <button className="btn-primary text-background bg-accent">Call Now</button>
            </div>

           {/* links div */}
            <div className="w-2/3 h-full flex flex-col justify-evenly">
                <div className="w-full h-fit m-auto flex flex-row items-start justify-between pt-6">
                    <div  className="footerList">
                        <p className="font-bold text-lg">Pages</p>
                        <ul className="text-bg-dark flex flex-col justify-between gap-2">
                            <li> <Link to="/"></Link> home</li>
                            <li>about</li>
                            <li>services</li>
                            <li>contact</li>
                        </ul>
                    </div>

                    <div  className="footerList">
                        <p className="font-bold text-lg">support</p>
                        <ul className="text-bg-dark flex flex-col justify-between gap-2">
                            <li>google ADs community</li>
                            <li>smartADsupport</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div  className="footerList">
                        <p className="font-bold text-lg">Let's connect</p>
                        <ul className="footerList gap-6 w-100 text-bg-dark">
                            <li><FontAwesomeIcon icon={faPhone} className="text-xl text-background mr-3" /> +254 115 154 402  </li>
                            <li><FontAwesomeIcon icon={faEnvelope} className="text-xl text-background mr-3" /> smartadsdigital@gmail.com  </li>
                            <li><FontAwesomeIcon icon={faLocationDot} className="text-xl text-background mr-3" />Twiga towers, 6th floor, Room 606, Murang'a Road, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Opp Meridian Court Hotel, Nairobi Kenya  </li>
                        </ul>
                    </div>
                 
                </div>

                {/* Socials div */}
                <div className="w-full h-1/3  flex items-center justify-start pl-[18%]">
                    <Socials/>
                </div>
            </div>
        </div>

        {/* footer copyright */}
        <div className="flex flex-row items-center justify-end gap-[15vw] pr-4 w-full h-1/5 bg-[#1d1d25] text-bg-dark text-sm">
            <p>&copy; 2025 smartADs solutions</p>
            <p className="text-[#7aacfd]">Terms of service</p>
            <p className="text-[#7aacfd] mr-8">Privacy policy</p>
        </div>
       </div>
    )
}

export default Footer
