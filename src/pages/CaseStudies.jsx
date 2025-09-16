import React, {useState} from "react";
import { case_studies } from "../../constants";
import Modal from "../components/Modal";
import CaseStudyDetails from "../components/CaseStudyDetails";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";

export default function CaseStudies() {

  //Setting up our feedback popUp
  const [showModal, setShowModal] = useState(false);
  const [projectCase, setProjectCase] = useState("");

  return (
  <div className="bg-background">
      {/* Header */}
      <WhiteHeader/>

      <br /><br />

      <section className="py-16 px-6 md:px-12 bg-background">

        {/* landing section */}
        <div>
            <p className="header text-primary">| Our Work in <span className="headerSpan"> Action </span></p>
            <p className="w-1/2 text-md m-auto mt-6 text-text-muted text-center">Real projects, real results. Explore how we’ve helped clients grow
              through smart design and digital strategy. </p>
        </div>

        <br /><br /><br /><br />
        
        <div className="grid gap-8 md:grid-cols-2">
          {case_studies.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl bg-background shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
                <button onClick={()=> {setShowModal(true); setProjectCase(project.link);}} className="inline-block mt-4 px-5 py-2 bg-accent text-white rounded-xl shadow blue-shadow"> View Details → </button>
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
