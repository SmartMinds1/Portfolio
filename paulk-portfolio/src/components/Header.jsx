import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";

const Header = ()=> {
  //mobile menu control 
  const [isOpen, setIsOpen] = useState(false);
  
    return(
      <>
        <div className="w-[100%] h-12 m-auto flex-row-end justify-between sm:h-14 fixed top-0 left-0 z-50 p-2 pl-[1%] pr-[5%] bg-[#19192350] backdrop-blur-[5px]">
            <div className="w-40 flex-row-end justify-start">
                <div className="w-7 h-7 bg-[url('/bigStarWhite.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                <p className="text-background text-base sm:text-lg font-extrabold">bizN<span className="text-accent text-base sm:text-lg font-light">utritia</span></p>
            </div>
            
            <div className="sm:block hidden  w-[55%] md:w-[50%] lg:w-[40%]">
                <ul className="text-background text-xs tracking-wide headerLink flex-row-center justify-evenly w-full h-fit">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>home</NavLink> </li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>about</NavLink> </li>
                    <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>services</NavLink> </li>
                    <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>projects</NavLink> </li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>contact</NavLink> </li>
                    <li><NavLink to="/pricing" className={({ isActive }) => isActive ? "text-soft-alert" : ""}>pricing</NavLink> </li>
                </ul>
            </div>

            <button className="hidden sm:block text-background bg-soft-alert m-0 rounded-3xl w-20 md:w-28 h-10 btnHover soft-shadow">Call Now</button>
            
            {/* Mobile menu button */}
            <div className="mobile-menu-button sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FontAwesomeIcon icon={faTimes} className="text-2xl text-soft-alert"/> : <FontAwesomeIcon icon={faBars} className="text-2xl text-soft-alert"/>}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen}/>
      

      </>
    )
}

export default Header
