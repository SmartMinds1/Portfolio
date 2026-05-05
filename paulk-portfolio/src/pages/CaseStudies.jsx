import React, {useState} from "react";
import { case_studies } from "../../constants";
import Modal from "../components/Modal";
import CaseStudyDetails from "../components/CaseStudyDetails";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function CaseStudies() {

  //Setting up our feedback popUp
  const [showModal, setShowModal] = useState(false);
  const [projectCase, setProjectCase] = useState("");

  return (
  <div className="bg-background">
      {/* Header */}
      <WhiteHeader/>

      <br />

        {/* landing section */}
        <div className="mt-20">
            <p className="header text-primary">| Our Work in <span className="headerSpan"> Action </span></p>
            <p className="m-auto mt-4 text-text-muted w-[95%] md:w-[70%] lg:w-[50%] text-md text-center">Real projects, real results. Explore how We’ve helped clients grow
              through smart design and digital strategy. </p>
        </div>

        <br /><br />
        
        {/* Accessing all case studies dynamically */}
        <div className="w-full m-auto">
          {case_studies.map((project, index) => (
            <div key={index} className="w-full mb-10 md:mb-15 flex-col-center justify-center">
           
              <div className="flex-col-center justify-center">
                <h3 className="text-xl font-semibold text-gray-800 w-[80%] sm:w-[60%] text-center">{index+1}. 
                   <span className="text-accent"> {project.title.split("-")[0]}</span>
                   {"-"}
                   <span> {project.title.split("-")[1]}</span>
                </h3>
                <p className="mt-3 text-gray-600 font-light tracking-wide w-[90%] sm:w-[80%] lg:w-[60%] m-auto sm:text-center mb-6">{project.description}</p>
                {/* <button onClick={()=> {setShowModal(true); setProjectCase(project.link);}} className="inline-block mt-4 px-5 py-2 bg-accent text-background rounded-xl shadow blue-shadow"> View Details <FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/> </button> */}
              </div>

              <div className="overflow-hidden flex-col-center justify-center  bg-green-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-[1200px] h-auto text-text-muted text-sm object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <button onClick={()=> {setShowModal(true); setProjectCase(project.link);}} className="inline-block mt-5 mb-5 cursor-pointer px-5 py-2 bg-accent text-background rounded-xl shadow blue-shadow"> live site <FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/> </button>
            </div>
          ))}
        </div>
  

      <br /><br /><br />

      <Footer/>

      {/* A modal to show every project's additional details */}
      <Modal isOpen={showModal} onClose={() => {setShowModal(false)}}>
            <CaseStudyDetails project={projectCase} onClose={() => {setShowModal(false)}}/>
      </Modal>     
  </div>
  );
}
