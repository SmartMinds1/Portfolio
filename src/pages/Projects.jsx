import React from "react";
import WhiteHeader from "../components/WhiteHeader";
import Footer from "../components/Footer";

const Projects = () => {
    return(
        <div className="bg-background">
            {/* Header */}
            <WhiteHeader/>

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