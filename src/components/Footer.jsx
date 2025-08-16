import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = ()=> {
    return(
       <div className="w-full h-90 bg-primary flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-evenly w-full h-4/5">
            {/* logo div */}
            <div className="w-1/4 h-full flex flex-col items-start justify-center pl-26">
              <p className="text-2xl text-background w-full"> <i>smart</i><span className="text-3xl text-accent  font-bold">ADs</span></p>
              <p className="w-full text-md text-background text-sm mt-4">Your lifetime partner in business solutions</p>
              <button className="btn-primary text-text bg-accent">Call Now</button>
            </div>
           {/* links div */}
            <div className="w-2/3 h-full flex flex-col justify-evenly">
                <div className="w-3/4 h-2/3 m-auto flex flex-row items-start justify-evenly pt-6">
                    <ul className="footerList">
                        <p className="font-bold text-lg border-b-2 border-secondary">Pages</p>
                        <li> <Link to="/"></Link> home</li>
                        <li>about</li>
                        <li>skills</li>
                        <li>contact</li>
                        <li>services</li>
                    </ul>
                    <ul className="footerList">
                    <p className="font-bold text-lg border-b-2 border-secondary">Socials</p>
                        <li> <Link to="/"></Link>youtube</li>
                        <li>twitter</li>
                        <li>gitHub</li>
                        <li>linkedin</li>
                    </ul>
                    <ul className="footerList">
                    <p className="font-bold text-lg border-b-2 border-secondary">support</p>
                        <li>google ADs community</li>
                        <li>smartADsupport</li>
                        <li>FAQs</li>
                    </ul>
                    <ul className="footerList">
                    <p className="font-bold text-lg border-b-2 border-secondary">location</p>
                        <li>google ADs community</li>
                        <li>smartADsupport</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                {/* Socials div */}
                <div className="w-full h-1/3  flex items-center justify-end">
                    <Socials/>
                </div>
            </div>
        </div>

        {/* footer copyright */}
        <div className="flex flex-row items-center justify-end gap-[15vw] pr-4 w-full h-1/5 bg-[#c7fffc28] text-background text-sm">
            <p>&copy; 2025 smartADs solutions</p>
            <p className="text-accent">Terms of service</p>
            <p className="text-accent mr-8">Privacy policy</p>
        </div>
       </div>
    )
}

export default Footer
