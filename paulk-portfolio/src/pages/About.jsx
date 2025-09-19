import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";

const About = () => {
    return(
        <div className="bg-background">
            {/* SECTION 1 */}
            <div className="bg-primary w-full h-fit">
                <Header/>
                <div className="w-full h-[60vh] flex-col-center justify-center">
                    <div className="w-[90%] lg:w-[78%] h-fit flex flex-col items-center sm:flex-row justify-evenly flex-wrap mb-32 mt-8">
                        <p className="h-fit w-full sm:w-1/2 lg:w-fit sm:pr-4 font-bold text-3xl text-background text-center sm:text-left">| Get to know <span className="headerSpan text-soft-alert"> about us </span></p>
                        <p className="h-fit text-sm sm:text-md sm:w-1/2 lg:w-110 w-full mt-4 sm:mt-0 text-left flex-row-center text-bg-dark brightness-90">Our results are measured in your success, real growth, higher traffic, and more customers backed by proven numbers!</p>
                    </div>
                </div>

            </div>
            {/* SECTION 2 */}
            <div className="sm:w-1/2 w-[75%]  sm:h-87 h-70 bg-primary m-auto sm:translate-y-[-9.2rem] -translate-y-[6rem] rounded-2xl bg-[url('/aboutIntroTransformed.png')] bg-cover bg-center md:bg-[center_-25px] bg-no-repeat"></div>


            {/* SECTION3 */}
            <div className="w-[90vw] h-fit md:w-[80vw] lg:w-[65vw] md:h-54 pt-8 m-auto text-text text-left sm:text-center -translate-y-10">
                <p className="text-xl sm:text-2xl ">From building stunning and secure websites, to running targeted Google Ads that bring real customers</p>
                <p className="w-[90%] sm:w-2/3 text-md m-auto mt-4 text-text-muted text-left">We help businesses turn their online presence into a growth machine so you can focus on what you do best !</p>
            </div>

           {/* SECTION4 */}
            <div className="h-fit w-[90vw] m-auto flex flex-row items-center justify-center flex-wrap lg:flex-nowrap gap-10 lg:gap-0 ">
                {/* img div */}
                <div className="sm:w-1/3 min-w-[300px] h-[20rem] lg:translate-x-40 rounded-2xl bg-soft-alert bg-[url('/aboutIntroTransformed.png')] bg-cover bg-[center] bg-no-repeat"></div>
                {/*  services div */}
                <div className="w-[95%] sm:w-[80%] h-full bg-background shadow-xl flex-row-center justify-start sm:justify-end min-w-[300px]">
                    <div className="h-fit w-full lg:w-4/5">
                        <p className="h-fit w-full font-bold text-3xl text-primary flex-row-center justify-start gap-2 pl-8 ">| Our <span className="headerSpan"> services </span></p>
                        <div className="w-ful h-fit min-h-100 sm:h-7/8 flex flex-col items-left justify-evenly pl-[8vw]">
                            <div>
                                <h3>Web Design & Development</h3>
                                <p className="text-text-muted">We Build Appealing, responsive websites that grow your business.</p>
                            </div>

                            <div>
                                <h3>Digital marketting</h3>
                                <p className="text-text-muted">Promote your brand effectively to boost sales and visibility.</p>
                            </div>

                            <div>
                                <h3>Google ADs management</h3>
                                <p className="text-text-muted">Running targeted ads that attract more customers fast.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <br /><br /><br /><br />

            {/* SECTION 5 */}
            <div className="h-fit w-full">
                {/* Header caption */}
                <div>
                    <p className="header">| Why work <span className="headerSpan">with Us </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[90%] md:w-[70%] lg:w-[50%] text-md text-left sm:text-center">We’ve managed to offer seamless business solutions country-wide. Here's why you should partner with us__</p>
                </div>

                <br/>
                <br/>

                {/* key selling points */}
                <div className="h-fit">
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Quility services within your budget</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Fast, Appealing, secure & Scalable websites</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Great marketting skills to promote your business</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Friendly customers support</p>
                </div>
            </div>

            <br /><br /><br /><br />

            {/* SECTION 6 */}
            <div className="w-full h-fit flex-row-center justify-center flex-wrap gap-10 sm:gap-5">
                <div className="w-1/4 min-w-75 sm:min-w-62 md:min-w-75 lg:min-w-80 h-fit shadow-2xl pt-2 md:mr-10 flex-col-center">
                    <div className="w-60 h-60 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-[url('/vission.png')] bg-contain bg-no-repeat bg-center bg-soft-alert shadow-2xl"></div>
                    <div className="w-60 h-60 translate-y-[-10px] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-[url('/mission.webp')] bg-cover bg-no-repeat bg-center shadow-2xl"></div>
                </div>
                <div className=" w-[90%] sm:w-1/2 h-fit md:h-118 flex-col-center justify-evenly gap-10">
                    <div className="w-full h-fit">
                        <h2 className="missionVission">Our <br /> Vission</h2>
                        <p className="text-md text-left text-text-muted">To become the go-to partner for businesses that want both cutting-edge technology and effective digital marketing in one place — creating online experiences that inspire trust, drive sales, and fuel long-term growth.
                        </p>
                    </div>

                    <div className="w-full h-fit">
                        <h2 className="missionVission">Our <br /> Mission</h2>
                        <p className="text-md text-left text-text-muted">To design and develop websites that are not only fast and reliable but also built to convert. By combining full-stack development with smart Google Ads strategies, we help businesses attract the right audience and turn clicks into loyal customers.</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />

            {/* SECTION 7 */}
            <div>
                {/* heading */}
                <div>
                    <p className="header">| Our<span className="headerSpan"> team </span></p>
                    <p className="m-auto mt-4 text-text-muted w-[90%] md:w-[70%] lg:w-[50%] text-md text-left sm:text-center">Behind every successful project is a dedicated team. We bring together creativity, technical expertise, and marketing insight to ensure your business not only looks good online but also grows steadily with real results.</p>
                </div>
                      <br /><br /><br />
                {/*Team div */}
                <div className="w-[95%] md:w-[85%] lg:w-2/3 h-fit m-auto flex-row-center justify-evenly flex-wrap gap-4">
                    <TeamCard memberName="Gretchen Paul" memberDesc="Managing director"/>
                    <TeamCard memberName="Bruno Marks" memberDesc="Our CEO"/>
                    <TeamCard memberName="Fave Mwangi" memberDesc="Senior HR"/>
                </div>
            </div>

            <br /><br />

              {/* FINAL SECTION */}
              <div className="w-full h-fit">
                <p className="w-full text-center">Let’s build it, launch it, and grow it together &nbsp;&nbsp;&nbsp;&nbsp; <button className="btn-primary">Book a Free Consultation</button></p>
              </div>

              <br /><br /><br />

              <Footer/>
        </div>
    )
}

export default About