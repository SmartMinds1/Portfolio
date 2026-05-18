import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

//GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"

const Services = () => {
    //Lets now add some anims to ours services page
      useGSAP(() => {
        gsap.fromTo( '.service',
          { opacity: 0, x:150 },
          {
            opacity: 1,
            x: 0,
            delay: 0.3,
            duration:1,
            stagger: 0.3
          }
        );
      }, []);
    return(
        <div className="bg-background">
            {/* SECTION 1 */}
            <div className="bg-primary">
                {/* Header */}
                <Header/>

                <br />

                <div className=" h-fit lg:h-[94vh] w-full pb-4 flex-col-center justify-end mt-10 lg:mt-0">
                    <div className="sm:gap-8 w-full h-fit lg:mt-6 sm:mt-10 mt-6 md:h-[80vh] flex flex-col md:flex-row items-left md:items-center justify-center md:justify-start lg:justify-center flex-wrap">
                        <div className="w-full md:w-1/2 mb-4 pl-2 lg:ml-0 h-1/2 flex-col-start justify-between overflow-x-hidden">
                            <div className=" pl-4 border-l-1 border-background w-[70%] md:w-[100%] md:max-w-110 service">
                                <p className="h-full text-4xl md:text-5xl text-background sm:w-110 md:w-full font-bold">Services Designed to Build & <span className=" text-soft-alert headerSpan"> Scale Your Business </span></p>
                            </div>
                            <p className="text-sm text-bg-dark mt-4 w-{95%] lg:w-full p-2 service">Creating a powerful online presence by providing everything you need to succeed!</p>
                        </div>

                        <div className=" w-full md:w-1/3 h-full flex-row-center justify-center md:ml-4 lg:ml-0">
                            <div className="scale-80 sm:scale-90 md:scale-none w-58 h-80 bg-background shadow-2xl rotate-30 rounded-2xl">
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
                <br />
            </div>

        <br /><br /><br />

            {/*  SECTION 2 */}
            <div className="w-[95%] lg:w-[80vw] m-auto h-fit">
                <div>
                    <p className="header">| Modern  <span className="headerSpan">Websites </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[100%] md:w-[90%] lg:w-[80%] text-md text-left sm:text-center">Your website is the first impression your customers get of your business. We design and develop websites that are fast, responsive, and optimized for both user experience and conversions</p>
                </div>

                <br /><br />

                <div className="h-fit flex flex-col md:flex-row items-center justify-center md:gap-2 lg:gap-12">
                    {/*  image div */}
                    <div className="card-scale w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/modernWebsites.png')] bg-cover bg-no-repeat bg-center-top"></div>

                    <div className="w-[100%] sm:w-[1/2] md:w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8 flex flex-col gap-2 text-text-muted">
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> <span>Custom website design (built for your brand)</span></li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Responsive design </li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> High-performance speed optimization</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Secure and scalable back-end development</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> E-commerce setup (if needed)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> SEO-friendly structure for better search visibility</li>
                        </ul>
                        <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text-muted">Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>

                        <div className="w-full h-fit mt-8 flex flex-row items-center justify-start gap-2 ">
                            <button className="btn-primary bg-soft-alert text-white m-0">book now</button>
                            <button className="btn-primary border-1 border-soft-alert text-black bg-transparent m-0">get quote</button>
                        </div>
                    </div>
                </div>
            </div>

        <br /><br /><br />

            {/*  SECTION 3 */}
            <div className="w-[95%] lg:w-[80vw] m-auto h-fit"> {/* p-4 pl-[20vh] pr-[20vh] */}
                <div>
                    <p className="header">| Google Ads  <span className="headerSpan">Management </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[100%] md:w-[90%] lg:w-[80%] text-md text-left sm:text-center">We set up and manage Google Ads campaigns that attract the right people at the right time, ensuring every click has the potential to become a customer</p>
                </div>

                <br /><br />

                <div className="h-fit flex flex-col md:flex-row items-center justify-center md:gap-2 lg:gap-12">
                    {/*  image div */}
                    <div className="card-scale md:hidden w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/googleAds.png')] bg-[45%] bg-cover bg-no-repeat"></div>

                    <div className="w-[100%] sm:w-[1/2] md:w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8 flex flex-col gap-2 text-text-muted">
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Display Ads (build awareness with visual banners)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Search Ads</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> YouTube Ads (reach audiences with engaging video campaigns)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Conversion tracking setup</li>
                        </ul>
                        <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text-muted">You’ll know exactly where your money goes and you’ll see real, measurable results like more leads, sales, or signups.</p>

                        <div className="w-full h-fit mt-8 flex flex-row items-center justify-start gap-2 ">
                            <button className="btn-primary bg-soft-alert text-white m-0">book now</button>
                            <button className="btn-primary border-1 border-soft-alert text-black bg-transparent m-0">get quote</button>
                        </div>
                    </div>

                    {/* second image div which shows on medium devices */}
                    <div className="card-scale hidden md:block w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/googleAds.png')] bg-[45%] bg-cover bg-no-repeat"></div>
                </div>
            </div>

            <br /> <br /> <br />

        


           {/*  SECTION 4 */}
            <div className="w-[95%] lg:w-[80vw] m-auto h-fit">
                <div>
                    <p className="header">| Analytics &  <span className="headerSpan">Optimization </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[100%] md:w-[90%] lg:w-[80%] text-md text-left sm:text-center">Your website is the first impression your customers get of your business. We design and develop websites that are fast, responsive, and optimized for both user experience and conversions</p>
                </div>

                <br /><br />

                <div className="h-fit flex flex-col md:flex-row items-center justify-center md:gap-2 lg:gap-12">
                    {/*  image div */}
                    <div className="card-scale w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/analytics.png')] bg-cover bg-[70%] bg-no-repeat"></div>

                    <div className="w-[100%] sm:w-[1/2] md:w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8 flex flex-col gap-2 text-text-muted">
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Google Analytics (GA4) setup & reporting</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Custom conversion tracking (sales, signups, calls, etc.)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Performance dashboards for easy monitoring </li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Ongoing optimization (continuous tweaks to improve results) </li>
                        </ul>
                        <br />
                        <p className="text-2xl font-bold text-accent pb-2 pt-4">Client Benefit</p>
                        <p  className="text-text-muted">Instead of just “having a website,” you’ll have a sales tool that loads fast, looks professional, and guides visitors to take action.</p>


                        <div className="w-full h-fit mt-8 flex flex-row items-center justify-start gap-2 ">
                            <button className="btn-primary bg-soft-alert text-white m-0 ">book now</button>
                            <button className="btn-primary border-1 border-soft-alert text-black bg-transparent m-0">get quote</button>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br />

            {/*  SECTION 3 */}
            <div className="w-[95%] lg:w-[80vw] m-auto h-fit"> {/* p-4 pl-[20vh] pr-[20vh] */}
                <div>
                    <p className="header">| AI Solutions  <span className="headerSpan">Developement </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[100%] md:w-[90%] lg:w-[80%] text-md text-left sm:text-center">We build end-to-end predictive AI systems that integrate machine learning models into production-ready APIs and web applications.</p>
                </div>

                <br /><br />

                <div className="h-fit flex flex-col md:flex-row items-center justify-center md:gap-2 lg:gap-12">
                    {/*  image div */}
                    <div className="card-scale md:hidden w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/googleAds.png')] bg-[45%] bg-cover bg-no-repeat"></div>

                    <div className="w-[100%] sm:w-[1/2] md:w-4/7 h-fit p-4">
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">What’s Included</p>
                        <ul className="pl-8 flex flex-col gap-2 text-text-muted">
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> End-to-end machine learning system (from dataset to working prediction API)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Custom AI model training tailored to your business data (classification, prediction, or forecasting)</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Production-ready FastAPI microservice for real-time predictions</li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Seamless integration with your existing website, app, or backend system </li>
                            <li className="flex-row-start justify-start"> <FontAwesomeIcon icon={faCheck} className="serviceList"/> Clean data preprocessing pipeline (handling missing values, encoding, feature engineering)</li>
                        </ul>
                        <br />
                        <p className="text-2xl font-bold text-secondary pb-2 pt-4">Business Value</p>
                        <p  className="text-text-muted">
                            Instead of guessing decisions, your business will use data-driven predictions powered by AI. 
                            You’ll be able to turn raw data into actionable insights through a live system that responds in real time.
                        </p>

                        <div className="w-full h-fit mt-8 flex flex-row items-center justify-start gap-2 ">
                            <button className="btn-primary bg-soft-alert text-white m-0">book now</button>
                            <button className="btn-primary border-1 border-soft-alert text-black bg-transparent m-0">get quote</button>
                        </div>
                    </div>

                    {/* second image div which shows on medium devices */}
                    <div className="card-scale hidden md:block w-[95%] h-[86vh] sm:w-[65%]  md:w-[40%] lg:w-1/3 md:h-[25.8rem] shadow-2xl rounded-2xl bg-[url('/googleAds.png')] bg-[45%] bg-cover bg-no-repeat"></div>
                </div>
            </div>

            <br /><br /><br /><br /><br />
             
            <Footer/>
        </div>
    );

}

export default Services
