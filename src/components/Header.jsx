import React from "react";
import { Link } from "react-router-dom";


const Header = ()=> {
    return(
       <div className="w-full h-24 bg-transparent flex flex-row items-center justify-evenly">
            <div className="w-38 flex flex-row items-end justify-center">
                <div className="w-10 h-10 bg-[url('/bigStarWhite.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                <p className="text-background text-2xl font-extrabold">bizN<span className="text-accent text-2xl font-light">utritia</span></p>
            </div>
            <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-background text-sm">
                <li> <Link to="/">home</Link> </li>
                <li> <Link to="about">about</Link></li>
                <li> <Link to="services">services</Link></li>
                <li> <Link to="projects">projects</Link></li>
                <li> <Link to="contact">contact</Link></li>
                <li> <Link to="pricing">pricing</Link></li>
            </ul>
            <button className="btn-primary text-background bg-soft-alert m-0 rounded-3xl">Call Now</button>
       </div>
    )
}

export default Header
