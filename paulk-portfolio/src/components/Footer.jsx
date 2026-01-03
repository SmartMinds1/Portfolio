import React from "react";
import { Link, NavLink } from "react-router-dom";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import WhatsapChart from "./WhatsapChat";

const Footer = ()=> {
    return(
       <div className="w-full h-90vh bg-primary flex flex-col items-center justify-between">
        <div className="flex-row-center flex-wrap justify-center lg:justify-evenly w-full h-fit pb-12 pt-8 bg-primary">
            {/* logo div */}
            <div className=" w-full lg:w-70 h-fit flex-row-center lg:flex-col-start flex-wrap lg:justify-start justify-evenly gap-2 p-2">
                <div className="mb-6 sm:mb-0"> 
                    <div className="w-40 flex flex-row items-end justify-center">
                       <div className="w-10 h-10 bg-[url('/bigStarWhite.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                       <p className="text-background text-2xl font-extrabold">bizN<span className="text-accent text-2xl font-light">utritia</span></p>
                    </div>
                    <p className="w-[90%] text-md text-bg-dark text-sm mt-4 pl-4">Ideas that grow, connections that scale.</p>
                </div>
                <button className="btn-primary text-background bg-accent mt-0 lg:mt-12 blue-shadow">Call Now</button>
            </div>

           {/* links div */}
            <div className="w-full lg:w-2/3 h-fit flex flex-col justify-evenly">
                <div className="w-[95%] sm:w-[100%] h-fit m-auto flex-row-start flex-wrap justify-evenly gap-4 pt-6">
                    <div  className="footerList">
                        <p className="font-bold text-lg">Pages</p>
                        <ul className="text-bg-dark flex flex-col justify-between gap-2 footerLink">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>home</NavLink> </li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>about</NavLink> </li>
                            <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>services</NavLink> </li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>contact</NavLink> </li>
                            <li><NavLink to="/pricing" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>pricing</NavLink> </li>
                        </ul>
                    </div>

                    <div  className="footerList">
                        <p className="font-bold text-lg">support</p>
                        <ul className="text-bg-dark flex flex-col justify-between gap-2 footerLink">
                            <li>google ADs community</li>
                            <li>support@biznutritia</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div  className="footerList sm:pt-0 sm:pl-0 pl-[10%] pt-6">
                        <p className="font-bold text-lg">Let's connect</p>
                        <ul className="footerList gap-6 w-fit sm:w-100 text-bg-dark footerLink">
                            <li><FontAwesomeIcon icon={faMobileAlt} className="text-xl text-background mr-3" /> +254 115 154 402  </li>
                            <li><FontAwesomeIcon icon={faEnvelope} className="text-xl text-background mr-3" /> biznutritia@gmail.com  </li>
                            <li className="flex-row-start pl-1 gap-1"><FontAwesomeIcon icon={faLocationDot} className="text-xl text-background mr-3" /> <span> Twiga towers, 6th floor, Room 606, Murang'a Road, Opp Meridian Court Hotel, Nairobi Kenya </span> </li>
                        </ul>
                    </div>
                 
                </div>
                <br />
                {/* Socials div */}
                <div className="w-full h-fit flex items-center justify-center sm:justify-start md:pl-[4%] lg:pl-0 mt-6">
                    <Socials/>
                </div>
            </div>
        </div>
        
        <WhatsapChart/>


        {/* footer copyright */}
         <div className="flex-row-center flex-wrap w-full h-fit pt-4 pb-4 gap-2 sm:gap-0 text-bg-dark bg-[#1d1d25] text-xs">
            <div className="w-full sm:w-[55%] sm:h-full h-1/2 flex-row-center justify-center sm:justify-end">
                <p>&copy; 2025 biznutritia.com</p>
            </div>
            <div className="w-full sm:w-[45%] h-1/2 sm:h-full flex-row-center justify-evenly">  
                <p className="text-[#7aacfd] border-b-1 border-text-muted">Terms of service</p>
                <p className="text-[#7aacfd] border-b-1 border-text-muted">Privacy policy</p>
            </div>
        </div>
       </div>
    )
}

export default Footer
