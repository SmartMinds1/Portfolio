import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; */

const Projects = () => {
    return(
        <div>
            <Header/>
               <div className="w-full h-fit bg-accent">
                    <div className="w-1/2 m-auto h-[120vh] bg-green-400"></div>
                    <div className="w-1/2 m-auto h-[120vh] bg-yellow-600"></div>
                    <div className="w-1/2 m-auto h-[120vh] bg-blue-400"></div>
               </div>
             <Footer/>
        </div>
    );
}

export default Projects;