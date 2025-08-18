import React from "react";
import { Link } from "react-router-dom";

const Contact = ()=> {

    return(
        <div>

            {/* CONTACT HEAD */}
            <div className="w-full h-24 bg-transparent flex flex-row items-center justify-evenly">
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
            <div className="h-[40vh] w-full flex items-center justify-center">
                <div className="w-full">
                    <p className="header">| Connect <span className="headerSpan">with Us </span></p>
                    <p className="w-1/2 text-md m-auto mt-4 text-primary text-center">We’ve managed to offer seamless business solutions country-wide. Here's why you should partner with us__</p>
                </div>
            </div>

            <div className=" w-20 h-20 rounded-[60%_40%_30%_70% / 60%_30%_70%_40%] bg-blue-400 "></div>

        </div>
    );
}

export default Contact;