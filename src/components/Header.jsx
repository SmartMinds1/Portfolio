import React from "react";
import { Link } from "react-router-dom";


const Header = ()=> {
    return(
       <div className="w-full h-24 bg-transparent flex flex-row items-center justify-evenly">
            <p className="text-background"> <i>smart</i><span className="text-accent text-2xl font-bold">ADs</span></p>
            <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-background text-sm">
                <li> <Link to="/">home</Link> </li>
                <li> <Link to="about">about</Link></li>
                <li>skills</li>
                <li> <Link to="contact">contact</Link></li>
            </ul>
            <button className="btn-primary text-text bg-soft-alert m-0">Call Now</button>
       </div>
    )
}

export default Header
