import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faHomeAlt, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
/* import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; */

const Contact = ()=> {

    return(
        <div>

            {/* CONTACT HEAD */}
            <div className="w-full h-24 bg-background flex flex-row items-center justify-evenly">
                <p className="text-text"> <i>smart</i><span className="text-secondary text-2xl font-bold">ADs</span></p>
                <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-text text-sm">
                    <li> <Link to="/">home</Link> </li>
                    <li> <Link to="about">about</Link></li>
                    <li>skills</li>
                    <li> <Link to="contact">contact</Link></li>
                </ul>
                <button className="btn-primary text-text bg-soft-alert m-0">Call Now</button>
            </div>
        

            {/* SECTION 1 */}
            <div className="w-full h-[85vh] bg-background">
                <div className="h-[40vh] w-full flex items-center justify-center">
                    <div className="w-full">
                        <p className="header">| Connect <span className="headerSpan">with Us </span></p>
                        <p className="w-1/2 text-md m-auto mt-4 text-text text-center">We’ve managed to offer seamless business solutions country-wide. Here's why you should partner with us__</p>
                    </div>
                </div>
               
               {/* contacts div */}
               <div className="w-[80vw] m-auto h-fit flex flex-row items-center justify-center flex-wrap-reverse gap-4">
                    {/* visit div */}
                    <div className="w-140 m-auto h-40 flex flex-row items-center justify-evenly">
                        <div className=" contactIconBox rounded-full bg-secondary"> <FontAwesomeIcon icon={faHomeAlt} className="contactIcon text-background"></FontAwesomeIcon> </div>
                        <p className="text-primary"> Visit Us : </p>
                        <p className="text-text ml-1 text-sm"> Twiga towers, 6th floor, Room 606, Murang'a Road, <br /> Opp Meridian Court Hotel, <br /> Nairobi Kenya </p>
                    </div>
                
                    {/* call Email div */}
                    <div className=" w-100">
                        <div className="callEmailBox">
                            <div className=" contactIconBox bg-background"> <FontAwesomeIcon icon={faPhoneFlip} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Call Us : <span className="text-primary">+254 115 154 402</span> </p>
                        </div>
                        <div className="callEmailBox">
                            <div className="contactIconBox bg-background"> <FontAwesomeIcon icon={faEnvelope} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Email Us : <span className="text-primary">smartadsdigital@gmail.com</span> </p>
                        </div>
                    </div>
                </div>      
            </div>


            {/* SECTION 2 */}
            <div className="h-[100vh] w-full bg-primary">
                <div className="w-full h-30">
                    <p className="header text-left pl-[20vw] pt-12 text-background">| Send us <span className="headerSpan text-accent">a message </span></p>
                </div>
            </div>

        </div>
    );
}

export default Contact;