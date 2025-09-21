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

      <br /><br /> <br/>

      <section className="py-16 px-6 md:px-12 bg-background">

        {/* landing section */}
        <div>
            <p className="header text-primary">| Our Work in <span className="headerSpan"> Action </span></p>
            <p className="m-auto mt-4 text-text-muted w-[95%] md:w-[70%] lg:w-[50%] text-md text-center">Real projects, real results. Explore how we’ve helped clients grow
              through smart design and digital strategy. </p>
        </div>

        <br /><br /><br /><br />
        
        {/* Accessing all case studies dynamically */}
        <div className="grid gap-8 md:grid-cols-2 w-full m-auto">
          {case_studies.map((project, index) => (
            <div key={index} className="rounded-2xl bg-background shadow-lg hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <button onClick={()=> {setShowModal(true); setProjectCase(project.link);}} className="inline-block mt-4 px-5 py-2 bg-accent text-background rounded-xl shadow blue-shadow"> View Details <FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/> </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <br /><br /><br />

      <Footer/>

      {/* A modal to show every project's additional details */}
      <Modal isOpen={showModal} onClose={() => {setShowModal(false)}}>
            <CaseStudyDetails project={projectCase} onClose={() => {setShowModal(false)}}/>
      </Modal>     
  </div>
  );
}
