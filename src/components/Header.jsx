import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars, 
    faTimes,
    faHouse, 
    faUser, 
    faGears, 
    faBriefcase, 
    faEnvelope, 
    faTags, 
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";

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
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>home</NavLink> </li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>about</NavLink> </li>
                    <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>services</NavLink> </li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>projects</NavLink> </li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>contact</NavLink> </li>
                    <li><NavLink to="/pricing" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>pricing</NavLink> </li>
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
            <div className="bg-primary absolute top-16 left-0 w-full h-[65vh] shadow-2xl flex-col-center z-50">
                <ul className="pb-8 bg-background p text-sm flex-col-start justify-evenly w-[95%] h-full mobileList">
                    <li> <Link to="/" className="w-full"> <FontAwesomeIcon icon={faHouse} className="mobileNavIcon"/> home <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link> </li>
                    <li> <Link to="/about" className="w-full"> <FontAwesomeIcon icon={faUser} className="mobileNavIcon"/> about <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/services" className="w-full"> <FontAwesomeIcon icon={faGears} className="mobileNavIcon"/> services <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/projects" className="w-full"> <FontAwesomeIcon icon={faBriefcase} className="mobileNavIcon"/> projects <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/contact" className="w-full"> <FontAwesomeIcon icon={faEnvelope} className="mobileNavIcon"/> contact <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/pricing" className="w-full"> <FontAwesomeIcon icon={faTags} className="mobileNavIcon"/> pricing <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                </ul>
            </div>
        )} 

      </>
    )
}

export default Header
