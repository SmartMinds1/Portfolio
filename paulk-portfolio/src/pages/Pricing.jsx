import React from "react";
import Footer from "../components/Footer";
import WhiteHeader from "../components/WhiteHeader";
import PricingCard from "../components/PricingCard";
import { basicPlan, enterprisePlan, proPlan } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BusinessCard from "../components/BusinessCard";


const Pricing = () => {

    return(
        <div className="bg-background">
             {/*HEADER */}
            <WhiteHeader/>

            <br /><br /><br /><br /><br /> <br/>

             {/* SECTION1 */}
             <div>
                <p className="header">| Select Your <span className="text-secondary">best plan </span></p>
                <p className="m-auto mt-4 text-text-muted w-[90%] md:w-[70%] lg:w-[50%] text-md text-center">Our results are measured in your success, real growth & higher traffic</p>
             </div>

             <br /><br />
             

            <div className="w-[98%] sm:w-[80%] h-fit m-auto flex-row-center flex-wrap justify-evenly gap-4">
                <PricingCard packageName="Basic" packagePrice="200" packageDes="Kickstart your online presence with essential tools" cta="Get started">
                    {basicPlan.map((basic)=>(
                            <ul className=" h-fit text-sm">
                                <li key={basic.id} className="mb-3 flex-row-start">
                                <FontAwesomeIcon icon={faCheck} className="text-soft-alert text-sm mr-2 mt-0.5"/> {basic.plan}
                                </li>
                            </ul>
                    ))}
                </PricingCard>

                <PricingCard packageName="Pro" packagePrice="300" packageDes="Scale your business with advanced marketing and web solutions." cta="Start with pro">
                    {proPlan.map((pro)=>(
                            <ul className=" h-fit text-sm">
                                <li key={pro.id} className="mb-3 flex-row-start">
                                <FontAwesomeIcon icon={faCheck} className="text-soft-alert text-sm mr-2 mt-0.5"/> {pro.plan}
                                </li>
                            </ul>
                        ))}
                </PricingCard>
                    <PricingCard packageName="Enterprise" packagePrice="400" packageDes="Full-service digital growth tailored for established brands." cta="Go Enterprise">
                    {enterprisePlan.map((enterprise)=>(
                            <ul className=" h-fit text-sm">
                                <li key={enterprise.id} className="mb-3 flex-row-start">
                                <FontAwesomeIcon icon={faCheck} className="text-soft-alert text-sm mr-2 mt-0.5"/> {enterprise.plan}
                                </li>
                            </ul>
                        ))}
                </PricingCard>
            </div>

            <br /><br /><br /><br /><br />

            {/* This si my business card Sample */}
             <div className="hidden w-full h-[70vh] bg-primary">
                <BusinessCard/>
             </div>

            <br /><br /><br /><br /><br />

             <Footer/>
        </div>
    );
}

export default Pricing;