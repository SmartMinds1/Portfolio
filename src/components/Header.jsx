import { faDashcube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faDashboard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = ()=> {
  //mobile menu control 
  const [isOpen, setIsOpen] = useState(false);
  
    return(
        <>
            <div className="w-[95%] h-16 m-auto flex-row-center justify-between md:h-24">
                <div className="w-40 flex-row-end justify-center">
                    <div className="w-10 h-10 bg-[url('/bigStarWhite.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                    <p className="text-background text-2xl font-extrabold">bizN<span className="text-accent text-2xl font-light">utritia</span></p>
                </div>
                <div className="md:block hidden">
                    <ul className="text-background text-sm headerLink flex-row-center justify-evenly w-1/3 h-12">
                        <li> <Link to="/">home</Link> </li>
                        <li> <Link to="about">about</Link></li>
                        <li> <Link to="services">services</Link></li>
                        <li> <Link to="projects">projects</Link></li>
                        <li> <Link to="contact">contact</Link></li>
                        <li> <Link to="pricing">pricing</Link></li>
                    </ul>
                </div>
                <button className="hidden md:block btn-primary text-background bg-soft-alert m-0 rounded-3xl">Call Now</button>

                {/* Mobile menu button */}
                <div className="mobile-menu-button sm:hidden">
                   <button onClick={() => setIsOpen(!isOpen)}>
                       {isOpen ? <FontAwesomeIcon icon={faTimes} className="text-2xl text-soft-alert"/> : <FontAwesomeIcon icon={faBars} className="text-2xl text-soft-alert"/>}
                   </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="bg-primary absolute top-16 left-0 w-full h-[65vh] shadow-2xl flex-col-center">
                   <ul className="pb-8 bg-background p text-sm flex-col-start justify-evenly w-[95%] h-full mobileList">
                        <li> <Link to="/">home</Link> </li>
                        <li> <Link to="about">about</Link></li>
                        <li> <Link to="services">services</Link></li>
                        <li> <Link to="projects">projects</Link></li>
                        <li> <Link to="contact">contact</Link></li>
                        <li> <Link to="pricing">pricing</Link></li>
                    </ul>
                </div>
            )} 

        </>
    )
}

export default Header
