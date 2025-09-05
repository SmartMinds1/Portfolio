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
                    <p className="w-1/2 text-md m-auto mt-6 text-bg-dark text-center">Behind every successful project is a dedicated team. We bring together creativity, technical expertise, and marketing insight to ensure your business not only looks good online but also grows steadily with real results.</p>
                </div>
                  

                  <div className="w-fit h-fit m-auto flex flex-row gap-8 bg-primary pt-10 pb-10">
                    <img src="/smartyGrandHome.png" alt="" width="800" height="200"/>
                 {/*    <img src="/microFinanceUpload.png" alt="" width="1500" height="2400"/>
                    <img src="/microFinanceUpload.png" alt="" width="300" height="2400"/> */}

                  </div>

            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

             <Footer/>

        </div>
    );
}

export default Projects;