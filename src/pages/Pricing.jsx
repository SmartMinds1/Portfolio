import React from "react";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
import { Link } from "react-router-dom";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; */

const Pricing = () => {
    const basic = ["item1","item2", "item last"];
    return(
        <div className="bg-background">
             {/*HEADER */}
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

             {/* SECTION1 */}
             <div>
                <p className="header">| Select Your <span className="text-secondary">best plan </span></p>
                <p className="w-1/2 text-md m-auto mt-4 text-text-muted text-center">Our results are measured in your success—real growth, higher traffic</p>
             </div>

             <br /><br />

            <div className="w-[80%] h-fit m-auto flex flex-row items-center justify-evenly gap-4">
                <PricingCard packageName="Basic" packagePrice="100" packageDes="Unlock your business today with our affordable basic plan" cta="Get started" basicFeatures={basic}/>
                <PricingCard packageName="Pro" packagePrice="150" packageDes="Get extra features to seamlessly manage your business" cta="Start with pro"/>
                <PricingCard packageName="Enterprise" packagePrice="200" packageDes="Explore incredible features with our premium enterprise plan" cta="Go Endterprise"/>
            </div>

            <br /><br /><br /><br /><br />

             <Footer/>
        </div>
    );
}

export default Pricing;