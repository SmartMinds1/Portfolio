import React from "react";
import { projectData } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faTimes } from "@fortawesome/free-solid-svg-icons";


export default function CaseStudyDetails({project, onClose}) {

      if (!projectData[project]) {
        return (
          <div className="py-16 px-6 md:px-20 bg-background w-[90vw] h-[100vh] m-auto shadow-2xl ">
              <div className="w-full h-8 bg-transparent text-right mb-6 fixed top-3 right-[7%] md:right-[6%]">
                 <button onClick={onClose} className="bg-primary shadow-2xl w-6 h-6 rounded-full text-background hover:brightness-80 duration-300 cursor-pointer"> <FontAwesomeIcon icon={faTimes}/></button>
              </div>
              <div className="flex-col-center justify-center w-full h-[80vh]">
                  <p className="text-center py-16 text-gray-600">This project will be <span className="text-accent font-bold"> COMMING SOON!</span> <span className="text-accent font-bold text-2xl animate-ping"> . . .</span></p>
              </div>
          </div>
        )
      }

  return (
    <section className="py-16 px-6 md:px-20 bg-background w-[90vw] m-auto shadow-2xl">
         <div className="w-full h-8 bg-transparent text-right mb-6 fixed top-3 right-[7%] md:right-[6%]">
            <button onClick={onClose} className="bg-primary shadow-2xl w-6 h-6 rounded-full text-background hover:brightness-80 duration-300 cursor-pointer"> <FontAwesomeIcon icon={faTimes}/></button>
         </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">{projectData[project].title}</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {projectData[project].description}
          </p>
        </div>

        <img
          src={projectData[project].image}
          alt={projectData[project].title}
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow mb-12"
        />

        <div className="space-y-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Client</h2>
            <p className="mt-3 text-gray-600">{projectData[project].client}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Problem</h2>
            <p className="mt-3 text-gray-600">{projectData[project].problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Solution</h2>
            <p className="mt-3 text-gray-600">{projectData[project].solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Results</h2>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-6">
              {projectData[project].results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <p className="italic text-gray-700">"{projectData[project].testimonial}"</p>
            <p className="mt-3 font-semibold text-gray-800">{projectData[project].author}</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700">
            Want results like this for your business?
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 px-6 py-3 bg-soft-alert text-white font-semibold rounded-xl shadow-2xl"
          >
            Start Your Project <span><FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/> </span>
          </a>
        </div>
    </section>
  );
}
