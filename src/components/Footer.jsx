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
            <p className="text-background text-xl">biz<span className="text-accent text-2xl font-bold">Nutritia</span></p>
              <p className="w-full text-md text-bg-dark text-sm mt-4">Ideas that grow, connections that scale.</p>
              <button className="btn-primary text-text bg-accent">Call Now</button>
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
                        <ul className="footerList gap-3 w-100 text-bg-dark">
                            <li><FontAwesomeIcon icon={faPhone} className="text-xl text-accent" /> +254 115 154 402  </li>
                            <li><FontAwesomeIcon icon={faEnvelope} className="text-xl text-accent" /> smartadsdigital@gmail.com  </li>
                            <li><FontAwesomeIcon icon={faLocationDot} className="text-xl text-accent" />Twiga towers, 6th floor, Room 606, Murang'a Road, <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Opp Meridian Court Hotel, Nairobi Kenya  </li>
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
        <div className="flex flex-row items-center justify-end gap-[15vw] pr-4 w-full h-1/5 bg-[#c7fffc28] text-bg-dark text-sm">
            <p>&copy; 2025 smartADs solutions</p>
            <p className="text-accent">Terms of service</p>
            <p className="text-accent mr-8">Privacy policy</p>
        </div>
       </div>
    )
}

export default Footer
