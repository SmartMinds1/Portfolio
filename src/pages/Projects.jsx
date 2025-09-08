import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
    return(
        <div className="bg-background">
            {/* Header */}
            <div className="w-full h-24 bg-background flex flex-row items-center justify-evenly">
                <div className="w-40 flex flex-row items-end justify-center">
                <div className="w-10 h-10 bg-[url('/bigStarBlack.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                <p className="text-primary text-2xl font-bold">bizN<span className="text-secondary text-2xl font-light">utritia</span></p>
                </div>
                <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-text text-sm headerLink">
                    <li> <Link to="/">home</Link> </li>
                    <li> <Link to="about">about</Link></li>
                    <li> <Link to="services">services</Link></li>
                    <li> <Link to="projects">projects</Link></li>
                    <li> <Link to="contact">contact</Link></li>
                    <li> <Link to="pricing">pricing</Link></li>
                </ul>
                <button className="btn-primary text-background bg-soft-alert m-0 rounded-3xl">Call Now</button>
            </div>

            <br /><br />

            <div className="w-full h-fit">
                <div>
                    <p className="header text-primary">| Hotel booking<span className="headerSpan"> system </span></p>
                    <p className="w-1/2 text-md m-auto mt-6 text-text-muted text-center">Here's a Hotel booking system with real results. A successful project offering seamless user experience </p>
                </div>
                <div className="w-[65%] h-fit m-auto flex flex-row justify-center items-center  pt-10 pb-10">
                    <div className="w-200 m-auto h-200 bg-[url('/smartyGrandHomeCroped.png')] bg-contain bg-center bg-no-repeat "></div>
                </div>
            </div>
             

            <br /><br /><br /><br /><br />

           {/*  SECTION2 */}
            <div className="w-full h-fit bg-primary">
            <br /><br /><br />
                <div>
                    <p className="header text-background">| Micro-finance<span className="headerSpan"> system </span></p>
                    <p className="w-1/2 text-md m-auto mt-6 text-bg-dark text-center">Below is a loan application system. It offers a wide range of loan lending services to different clients. Completed on time and within budget </p>
                </div>

                <br />
                  
                  <div className="w-[65%] h-fit m-auto flex flex-row justify-center items-center  pt-10 pb-10">
                    <div className="w-220 m-auto h-130 bg-[url('/microFinanceUpload.png')] bg-contain bg-center bg-no-repeat "></div>
                  </div>

                  <br /><br /><br />
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

             <Footer/>

        </div>
    );
}

export default Projects;