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
        <div className="w-[97%] h-12 m-auto flex-row-end justify-between sm:h-14">
            <div className="w-40 flex-row-end justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[url('/bigStarBlack.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                <p className="text-primary text-xl sm:text-2xl font-extrabold">bizN<span className="text-accent text-xl sm:text-2xl font-light">utritia</span></p>
            </div>
            
            <div className="sm:block hidden  w-[55%] md:w-[50%] lg:w-[40%]">
                <ul className="text-primary text-sm headerLink flex-row-center justify-evenly w-full h-fit">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>home</NavLink> </li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>about</NavLink> </li>
                    <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>services</NavLink> </li>
                    <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>case-studies</NavLink> </li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>contact</NavLink> </li>
                    <li><NavLink to="/pricing" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>pricing</NavLink> </li>
                </ul>
            </div>

            <button className="hidden sm:block text-background bg-soft-alert m-0 rounded-3xl w-20 md:w-28 h-10 btnHover translate-y-3 soft-shadow">Call Now</button>
            
            {/* Mobile menu button */}
            <div className="mobile-menu-button sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FontAwesomeIcon icon={faTimes} className="text-2xl text-soft-alert"/> : <FontAwesomeIcon icon={faBars} className="text-2xl text-soft-alert"/>}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="bg-background absolute top-20 left-0 w-full h-[65vh] shadow-2xl flex-col-center z-50">
                <ul className="pb-8 bg-background p text-sm flex-col-start justify-evenly w-[95%] h-full mobileList rounded-lg shadow-xl">
                    <li> <Link to="/" className="w-full"> <FontAwesomeIcon icon={faHouse} className="mobileNavIcon"/> home <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link> </li>
                    <li> <Link to="/about" className="w-full"> <FontAwesomeIcon icon={faUser} className="mobileNavIcon"/> about <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/services" className="w-full"> <FontAwesomeIcon icon={faGears} className="mobileNavIcon"/> services <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/case-studies" className="w-full"> <FontAwesomeIcon icon={faBriefcase} className="mobileNavIcon"/> case-studies <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/contact" className="w-full"> <FontAwesomeIcon icon={faEnvelope} className="mobileNavIcon"/> contact <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                    <li> <Link to="/pricing" className="w-full"> <FontAwesomeIcon icon={faTags} className="mobileNavIcon"/> pricing <FontAwesomeIcon icon={faAngleRight} className="navAngleIcon"/> </Link></li>
                </ul>
            </div>
        )} 

      </>
    )
}

export default Header
