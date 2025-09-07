import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
/* import { Link } from "react-router-dom"; */
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; */

const Projects = () => {
    return(
        <div className="bg-primary">

            {/* CONTACT HEAD */}
            <Header/>
        {/*     <div className="w-full h-24 bg-background flex flex-row items-center justify-evenly">
                <p className="text-primary text-xl font-bold">bizN<span className="text-secondary text-2xl font-light">utritia</span></p>
                <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-text text-sm">
                    <li> <Link to="/">home</Link> </li>
                    <li> <Link to="about">about</Link></li>
                    <li> <Link to="services">services</Link></li>
                    <li> <Link to="contact">contact</Link></li>
                </ul>
                <button className="btn-primary text-background bg-soft-alert m-0 rounded-3xl">Call Now</button>
            </div> */}

            <br /><br />

            <div className="w-full h-fit">
                <div>
                    <p className="header text-background">| Case<span className="headerSpan"> study </span></p>
                    <p className="w-1/2 text-md m-auto mt-6 text-bg-dark text-center">Here's a Hotel booking system with real results. A successful project offering seamless user experience </p>
                </div>
                  

                  <div className="w-[65%] h-fit m-auto flex flex-row justify-center items-center  pt-10 pb-10">
                    <div className="w-200 m-auto h-200 bg-[url('/smartyGrandHomeCroped.png')] bg-contain bg-center bg-no-repeat "></div>
                   {/*  <div className="w-65 m-auto h-150 bg-[url('/smartyGrandAbout.png')] bg-contain bg-center bg-no-repeat "></div>
                    <div className="w-55 m-auto h-150 bg-[url('/smartyGrandContact.png')] bg-contain bg-center bg-no-repeat "></div>
                    <div className="w-45 m-auto h-150 bg-[url('/smartyGrandReservation.png')] bg-contain bg-center bg-no-repeat "></div> */}
                  </div>

            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

             <Footer/>

        </div>
    );
}

export default Projects;