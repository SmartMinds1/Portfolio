import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return(
        <div className="bg-background">
            {/* SECTION 1 */}
            <div className="w-full h-[100vh] bg-primary flex flex-col items-center justify-between">
                <Header/>
                <div className="w-full h-7/8 flex flex-row items-center justify-center flex-wrap">

                   <div className="w-1/2 h-3/5">
                        <div className=" pl-4 border-l-1 border-background w-110">
                             <p className="h-full text-5xl text-background">Services Designed to Build & <span className=" text-accent headerSpan"> Grow Your Business </span></p>
                        </div>
                        <br /><br /><br />
                        <p className="text-sm text-background">Creating a powerful online presence by providing everything you need to succeed!</p>
                   </div>

                   <div className=" w-1/3 h-full flex flex-row items-center justify-center">
                      <div className="w-60 h-70 bg-accent shadow-2xl rotate-30 rounded-2xl">
                         <div className="w-60 h-70 bg-secondary -rotate-30 -translate-x-18 rounded-2xl shadow-2xl p-4">
                            <ul className="flex flex-col items-start justify-evenly h-full text-xl  list-disc p-4">
                                <li className="text-background">Web Development</li>
                                <li >Google Ads Management</li>
                                <li className="text-background">Analytics & Optimization</li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
            
            <br />

            {/*  SECTION 2 */}
            <div className="w-[80vw] m-auto h-[100vh] flex flex-row items-center justify-center gap-12">
                  {/*  image div */}
                  <div className="w-1/3 h-[70vh] shadow-2xl rounded-2xl bg-[url('/modernWebsites.png')] bg-cover bg-no-repeat"></div>

                  <div className="w-4/7 h-fit p-4">
                    <p className="text-4xl font-bold text-primary pb-2">Modern Websites</p>
                    <p>Your website is the first impression your customers get of your business. I design and develop websites that are fast, responsive, and optimized for both user experience and conversions.</p>

                    <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                    <ul className="pl-8">
                        <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> Custom website design (built for your brand)</li>
                        <li className="list-disc ml-6"> Responsive design</li>
                        <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> High-performance speed optimization</li>
                        <li className="list-disc ml-6"> Secure and scalable back-end development</li>
                        <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> E-commerce setup (if needed)</li>
                        <li className="list-disc ml-6"> SEO-friendly structure for better search visibility</li>
                    </ul>

                    <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                    <p>Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>

                  </div>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

             {/* SECTION 3 */}
            <div className="w-[80vw] m-auto h-[100vh] flex flex-row items-center justify-center gap-12 ">
                {/* content div */}
                  <div className="w-4/7 h-fit p-4">
                    <p className="text-2xl font-bold text-primary pb-2">Google Ads Management</p>
                    <p>Your website is the first impression your customers get of your business. I design and develop websites that are fast, responsive, and optimized for both user experience and conversions.</p>

                    <p className="text-2xl font-bold text-primary pb-2 pt-4">What’s Included</p>
                    <ul className="list-disc pl-8">
                        <li>Custom website design (built for your brand, not a template clone)</li>
                        <li>Responsive design (works perfectly on desktop, tablet, and mobile)</li>
                        <li>High-performance speed optimization</li>
                        <li>Secure and scalable back-end development</li>
                        <li>E-commerce setup (if needed)</li>
                        <li>SEO-friendly structure for better search visibility</li>
                    </ul>

                    <p className="text-2xl font-bold text-primary pb-2 pt-4">Client Benefit</p>
                    <p>Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>

                  </div>

                {/* image div */}
                  <div className="w-1/3 h-[70vh] rounded-2xl bg-[url('/portfolioCOVER.png')]  bg-cover bg-right bg-no-repeat"></div>

            </div>



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {/*  SECTION 4 */}
                <div className="w-[80vw] m-auto h-[100vh] flex flex-row items-center justify-center gap-12">
                    <div className="w-1/3 bg-accent h-[70vh] shadow-2xl rounded-2xl"></div>
                    <div className="w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-primary pb-2">Modern Websites</p>
                        <p>Your website is the first impression your customers get of your business. I design and develop websites that are fast, responsive, and optimized for both user experience and conversions.</p>

                        <p className="text-2xl font-bold text-primary pb-2 pt-4">What’s Included</p>
                        <ul className="list-disc pl-8">
                            <li>Custom website design (built for your brand, not a template clone)</li>
                            <li>Responsive design (works perfectly on desktop, tablet, and mobile)</li>
                            <li>High-performance speed optimization</li>
                            <li>Secure and scalable back-end development</li>
                            <li>E-commerce setup (if needed)</li>
                            <li>SEO-friendly structure for better search visibility</li>
                        </ul>

                        <p className="text-2xl font-bold text-primary pb-2 pt-4">Client Benefit</p>
                        <p>Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>

                    </div>
                </div>


                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    );

}

export default Services