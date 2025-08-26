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
                      <div className="w-58 h-80 bg-accent shadow-2xl rotate-30 rounded-2xl">
                         <div className="w-58 h-80 bg-[#89b0aed8] -rotate-30 -translate-x-18 rounded-2xl shadow-2xl p-4">
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

        <br /><br /><br />

            {/*  SECTION 2 */}
            <div className="w-[80vw] m-auto h-[100vh]">
                <div>
                    <p className="header">| Modern  <span className="headerSpan">Websites </span></p>
                    <p className="w-4/5 text-md m-auto mt-4 text-text text-center">Your website is the first impression your customers get of your business. I design and develop websites that are fast, responsive, and optimized for both user experience and conversions</p>
                </div>

                <br /><br />

                <div className="flex flex-row items-center justify-center gap-12">
                    {/*  image div */}
                    <div className="w-1/3 h-[65vh] shadow-2xl rounded-2xl bg-[url('/modernWebsites.png')] bg-cover bg-no-repeat"></div>

                    <div className="w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8">
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> Custom website design (built for your brand)</li>
                            <li className="list-disc ml-6"> Responsive design</li>
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> High-performance speed optimization</li>
                            <li className="list-disc ml-6"> Secure and scalable back-end development</li>
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> E-commerce setup (if needed)</li>
                            <li className="list-disc ml-6"> SEO-friendly structure for better search visibility</li>
                        </ul>
                        <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text">Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>
                    </div>
                </div>
            </div>

        <br /><br /><br />

            {/*  SECTION 3 */}
            <div className="w-full m-auto h-[100vh] p-4 pl-[20vh] pr-[20vh]">
                <div>
                    <p className="header">| Google Ads  <span className="headerSpan">Management </span></p>
                    <p className="w-4/5 text-md m-auto mt-4 text-text text-center">I set up and manage Google Ads campaigns that attract the right people at the right time, ensuring every click has the potential to become a customer</p>
                </div>

                <br /><br />

                <div className="flex flex-row items-center justify-center gap-12">
                    <div className="w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8">
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> Display Ads (build awareness with visual banners)</li>
                            <li className="list-disc ml-6"> Search Ads </li>
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> YouTube Ads (reach audiences with engaging video campaigns)</li>
                            <li className="list-disc ml-6"> Conversion tracking setup</li>
                        </ul>
                        <br /> <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text">You’ll know exactly where your money goes and you’ll see real, measurable results like more leads, sales, or signups.</p>
                    </div>

                    {/*  image div */}
                    <div className="w-1/3 h-[65vh] shadow-2xl rounded-2xl bg-[url('/googleAds.png')] bg-cover bg-[45%] bg-no-repeat"></div>
                </div>
            </div>

            <br /> <br /> <br />

        


           {/*  SECTION 4 */}
            <div className="w-[80vw] m-auto h-[100vh]">
                <div>
                    <p className="header">| Analytics &  <span className="headerSpan">Optimization </span></p>
                    <p className="w-4/5 text-md m-auto mt-4 text-text text-center">Your website is the first impression your customers get of your business. I design and develop websites that are fast, responsive, and optimized for both user experience and conversions</p>
                </div>

                <br /><br />

                <div className="flex flex-row items-center justify-center gap-12">
                    {/*  image div */}
                    <div className="w-1/3 h-[65vh] shadow-2xl rounded-2xl bg-[url('/analytics.png')] bg-cover bg-[70%] bg-no-repeat"></div>

                    <div className="w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8">
                        <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> Google Analytics (GA4) setup & reporting</li>
                            <li className="list-disc ml-6"> Custom conversion tracking (sales, signups, calls, etc.) </li>
                            <li> <FontAwesomeIcon icon={faCheck} className="text-secondary"/> Performance dashboards for easy monitoring </li>
                            <li className="list-disc ml-6"> Ongoing optimization (continuous tweaks to improve results) </li>
                        </ul>
                        <br /> <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text">Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>
                    </div>
                </div>
            </div>

        <br /><br /><br /><br /><br />

             

        </div>
    );

}

export default Services