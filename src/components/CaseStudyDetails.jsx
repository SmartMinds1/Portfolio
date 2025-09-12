import React from "react";
import { projectData } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export default function CaseStudyDetails({project, onClose}) {

      if (!projectData[project]) {
        return <p className="text-center py-16 text-gray-600">Project not found.</p>;
      }

  return (
    <section className="py-16 px-6 md:px-20 bg-background w-[90vw] m-auto shadow-2xl">
         <div className="w-full h-8 bg-transparent text-right mb-6 fixed top-3 right-[7%] md:right-[6%]">
            <button onClick={onClose} className="bg-primary shadow-2xl w-6 h-6 rounded-full text-background hover:brightness-80 duration-300 cursor-pointer"> <FontAwesomeIcon icon={faTimes}/></button>
         </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{projectData[project].title}</h1>
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
            <h2 className="text-2xl font-semibold text-gray-800">The Client</h2>
            <p className="mt-3 text-gray-600">{projectData[project].client}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">The Problem</h2>
            <p className="mt-3 text-gray-600">{projectData[project].problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">The Solution</h2>
            <p className="mt-3 text-gray-600">{projectData[project].solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">The Results</h2>
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
            className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-300"
          >
            Start Your Project →
          </a>
        </div>
    </section>
  );
}
