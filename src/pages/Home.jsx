import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import StatsBox from "../components/StatsBox";
import TestimonialCard from "../components/TestimonialCard";

/* the following are the testimonial images on this page */
import Halima from "../assets/Halima.webp";
import Lauracia from "../assets/Lauracia.webp";
import Juzman from "../assets/Juzman.webp";
import Yuvala from "../assets/Yuvala.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faLaptopCode, faBullhorn} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
        /* Index for looping testimonial cards */
        const[currentIndex, setCurrentIndex] = useState(0);

        /* An array of the testimoial cards Objects to be looped */
        const testimonialCards = [
            {rateName:"Halima Sahim", rateImg:Halima, rateMessage:"I applied for a business loan and got approved within two days. The process was smooth, and the team was very helpful. Now my shop is running better than ever!", cardRating:"5"},
    
            {rateName:"Samuel Josh", rateImg:Juzman, rateMessage:"When I had an emergency at home, I applied for a loan and received the money the same day. It was fast, easy, and truly lifesaving.", cardRating:"4"},
    
            {rateName:"Lucy", rateImg:Lauracia, rateMessage:"Our chama received a group loan that helped us start a poultry project. The support and flexibility were amazing. Highly recommend them to other groups", cardRating:"1"},
    
            {rateName:"David O. Rider", rateImg:Yuvala, rateMessage:"Thanks to their asset finance option, I bought a motorbike for my delivery business. The repayment plan is affordable, and I’m earning daily", cardRating:"3"}
        ]
    
        /* Now lets craete two functions to facilitate forward and backword movement */
        const navigateForward = ()=> {
            setCurrentIndex((prev)=> (prev+1) % testimonialCards.length);
        }
        const navigateBack = ()=> {
            setCurrentIndex((prev)=> ((prev-1)+testimonialCards.length) % testimonialCards.length);
        }
        
    return(
        <div className="bg-background">
            {/* This is the home landing page section */}
            <div className="w-full bg-primary">
                    <div className="w-full h-screen bg-[url('/portfolioCOVER.png')] bg-cover sm:bg-bottom bg-[60%]" >
                        <div className="w-full h-screen bg-linear-to-r from-primary via-primary via-30% to-transparent">
                            <Header/>
                            <div className="w-full flex flex-row">
                                <div className="w-fit h-[85vh] flex flex-col items-start p-[5%] justify-start  sm:pl-16 sm:pt-16">
                                    <p className="sm:text-6xl text-5xl w-full sm:w-[50vw] text-background">Your best <span className="text-soft-alert font-extralight">partner in every</span> business <br />solution </p>
                                    <br /><br />
                                    <p className="text-sm text-bg-dark">Creating a powerful online presence by providing everything you  <br /> need to succeed!</p>
                                    <button className="btn-primary mt-10 bg-secondary text-background cursor-pointer">Explore more <FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <br /><br /><br />

            {/* This is the home page body section, SECTION1 */}
            <div className="hidden w-[60vw] h-50 pt-8 m-auto text-text text-center">
                <p className="text-2xl ">From building stunning and secure websites to running targeted Google Ads that bring real customers</p>
                <p className="w-2/3 text-md m-auto mt-4 text-text-muted text-left">I help businesses turn their online presence into a growth machine—so you can focus on what you do best !</p>
            </div>
            

             {/* SECTION 2 OUR SERVICES CARDS */}
             <div className="w-full h-fit hidden">
                 <div className="h-fit w-2/3 m-auto  flex flex-row items-center justify-evenly">
                    <SkillCard cardTitle="Web Developer/ Designer" cardDes="Build beautiful, responsive websites that grow your business." icon={<FontAwesomeIcon icon={faLaptopCode}/>} />
                    <SkillCard cardTitle="Google ADs Manager " cardDes="Running targeted ads that attract more customers fast."  icon={<FontAwesomeIcon icon={faGoogle} />} />
                    <SkillCard cardTitle="Marketting specialist" cardDes="Promote your brand effectively to boost sales and visibility." icon={<FontAwesomeIcon icon={faBullhorn} />} />
                 </div>
             </div>

             <br /><br /><br /><br />

            {/* SECTION 3 */}
             <div className="hidden W-full h-80 bg-[url('/woman-analyzing-data-digital-interface.jpg')] bg-top bg-cover">
                <div className="w-full h-full bg-primary/80 flex items-center justify-center">
                    <h1 className="text-2xl text-background"> <span className="font-bold text-soft-alert">HERE FOR YOU!____</span> let's get everything up and running<span className="animate-pulse duration-300"> . . .</span></h1>
                </div>
             </div>

             <br /><br /> <br /> <br />    

            {/* SECTION 4 */}
             <div className="w-full h-fit hidden">
                <p className="header">| Let client statistics <span className="headerSpan">speak for us </span></p>
                <p className="w-1/2 text-md m-auto mt-4 text-text-muted text-center">Our results are measured in your success—real growth, higher traffic, and more customers backed by proven numbers!</p>
                <div className="w-2/3 m-auto h-fit flex flex-row items-center justify-evenly flex-wrap gap-2 mt-10">
                    <StatsBox statsNum="500+" statsDes="Clients"/>
                    <StatsBox statsNum="100+" statsDes="Businesses"/>
                    <StatsBox statsNum="50+" statsDes="Websites"/>
                </div>
             </div>

             <br /><br /><br /><br />

            {/* SECTION 5 */}
             <div className="w-full h-fit hidden">
                <p className="header">| Here's what our clients <span className="headerSpan">say about us </span></p>
                <p className="w-1/2 text-md m-auto mt-4 text-text-muted text-center">We’re proud to let our happy clients do the talking—here’s what they have to say about working with us.</p>
                {/* Importing the testimonial card and inserting all ther required props */}
                <TestimonialCard rateImg={testimonialCards[currentIndex].rateImg} goForward={navigateForward} goBack={navigateBack} rateName={testimonialCards[currentIndex].rateName}  rateMessage={testimonialCards[currentIndex].rateMessage} cardRating={testimonialCards[currentIndex].cardRating} />
             </div>

             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* FOOTER SECTION */}
            <div className="hidden">
                <Footer/>
            </div>

        </div>
)
}
  
export default Home