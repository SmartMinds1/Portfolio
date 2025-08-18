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
            <div className="w-full h-[60vh] bg-primary flex flex-col items-center justify-between">
                <Header/>
                <div className="w-full h-fit flex flex-row items-center justify-center flex-wrap mb-32">
                    <p className="h-full w-1/3 font-bold text-3xl text-background flex flex-row items-center justify-center gap-2">| Get to know <span className="headerSpan text-accent"> about us </span></p>
                    <p className="h-full w-1/3 text-left flex items-center text-background brightness-90">Our results are measured in your success—real growth, higher traffic, and more customers backed by proven numbers!</p>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className="w-2/4 h-87 bg-primary m-auto translate-y-[-6rem] rounded-2xl bg-[url('/aboutIntroTransformed.png')] bg-cover bg-[center_-30px]">
                <p className="text-background bg-primary w-1/3 text-2xl p-4 h-24"></p>
            </div>

            {/* SECTION3 */}
            <div className="w-[60vw] h-50 pt-8 m-auto text-text text-center translate-y-[-40px]">
                <p className="text-2xl ">From building stunning and secure websites to running targeted Google Ads that bring real customers</p>
                <p className="w-2/3 text-md m-auto mt-4 text-primary text-left">I help businesses turn their online presence into a growth machine—so you can focus on what you do best !</p>
            </div>

           {/* SECTION4 */}
            <div className="h-100 w-[90vw] m-auto flex flex-row items-center justify-center">
                {/* img div */}
                <div className="w-1/3 h-4/5 translate-x-40 rounded-2xl bg-soft-alert bg-[url('/aboutIntroTransformed.png')] bg-cover bg-[center] bg-no-repeat"></div>
                {/*  services div */}
                <div className="w-2/3 h-full bg-background shadow-xl flex flex-row items-center justify-end">
                    <div className="w-4/5 h-full">
                        <p className="h-fit w-full font-bold text-3xl text-primary flex flex-row items-center justify-start gap-2 pl-8 ">| Our <span className="headerSpan"> services </span></p>
                        <div className="w-full h-7/8 flex flex-col items-left justify-evenly pl-[8vw]">
                            <div>
                                <h3>Web Design & Development</h3>
                                <p className="text-[#636363]">We Build Appealing, responsive websites that grow your business.</p>
                            </div>

                            <div>
                                <h3>Digital marketting</h3>
                                <p className="text-[#636363]">Promote your brand effectively to boost sales and visibility.</p>
                            </div>

                            <div>
                                <h3>Google ADs management</h3>
                                <p className="text-[#636363]">Running targeted ads that attract more customers fast.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <br /><br /><br /><br />

            {/* SECTION 5 */}
            <div>
                {/* Header caption */}
                <div>
                    <p className="header">| Why work <span className="headerSpan">with Us </span></p>
                    <p className="w-1/2 text-md m-auto mt-4 text-primary text-center">We’ve managed to offer seamless business solutions country-wide. Here's why you should partner with us__</p>
                </div>

                <br/>
                <br/>
                {/* key selling points */}
                <div>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Quility services within your budget</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Fast, Appealing, secure & Scalable websites</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Great marketting skills to promote your business</p>
                    <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>Friendly customers support</p>
                </div>
            </div>

            <br /><br /><br /><br />

            {/* SECTION 6 */}
            <div className="w-full h-fit flex flex-row items-center justify-center">
                <div className="w-1/4 h-fit shadow-2xl pt-2 mr-10 flex flex-col items-center">
                    <div className="w-60 h-60 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-[url('/vission.png')] bg-contain bg-no-repeat bg-center bg-soft-alert shadow-2xl"></div>
                    <div className="w-60 h-60 translate-y-[-10px] [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-[url('/mission.webp')] bg-cover bg-no-repeat bg-center shadow-2xl"></div>
                </div>
                <div className="w-1/2 h-118 flex flex-col items-center justify-evenly gap-10">
                    <div className="w-full h-fit">
                        <h2 className="missionVission">Our <br /> Vission</h2>
                        <p className="text-md text-left">To become the go-to partner for businesses that want both cutting-edge technology and effective digital marketing in one place — creating online experiences that inspire trust, drive sales, and fuel long-term growth.
                        </p>
                    </div>

                    <div className="w-full h-fit">
                        <h2 className="missionVission">Our <br /> Mission</h2>
                        <p className="text-md text-left">To design and develop websites that are not only fast and reliable but also built to convert. By combining full-stack development with smart Google Ads strategies, I help businesses attract the right audience and turn clicks into loyal customers.</p>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />

            {/* SECTION 7 */}
            <div>
                {/* heading */}
                <div>
                    <p className="header">| Our<span className="headerSpan"> team </span></p>
                    <p className="w-1/2 text-md m-auto mt-4 text-primary text-center">Behind every successful project is a dedicated team. We bring together creativity, technical expertise, and marketing insight to ensure your business not only looks good online but also grows steadily with real results.</p>
                </div>
                      <br /><br /><br />
                {/*Team div */}
                <div className="w-2/3 h-fit m-auto flex flex-row items-center justify-evenly gap-4">
                    <TeamCard memberName="Gretchen Paul" memberDesc="Managing director"/>
                    <TeamCard memberName="Bruno Marks" memberDesc="Our CEO"/>
                    <TeamCard memberName="Fave Mwangi" memberDesc="Senior HR"/>
                </div>
            </div>

            <br /><br />

              {/* FINAL SECTION */}
              <div className="w-full h-fit">
                <p className="w-full text-center">Let’s build it, launch it, and grow it together___ <button className="btn-primary">Book a Free Consultation</button></p>
              </div>

              <br /><br /><br /><br /><br /><br />

              <Footer/>
        </div>
    )
}

export default About