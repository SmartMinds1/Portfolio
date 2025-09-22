import React, { useRef, useState } from "react";
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

//GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"





const Home = () => {
        /* Index for looping testimonial cards */
        const[currentIndex, setCurrentIndex] = useState(0);

        /* An array of the testimoial cards Objects to be looped */
        const testimonialCards = [
            {rateName:"Halima Sahim", rateImg:Halima, rateMessage:"Working with BizNutritia was so smooth. They built me a clean website and even helped me run ads that brought in real customers. I didn’t expect results this fast, but they made it happen.", cardRating:"5"},
    
            {rateName:"Samuel Josh", rateImg:Juzman, rateMessage:"Honestly, I’m not a tech person, but BizNutritia explained everything in simple terms. They kept me updated at every stage, and the final project was even better than what I had in mind.", cardRating:"4"},
    
            {rateName:"Lucy Tasha", rateImg:Lauracia, rateMessage:"The project took a little longer than I expected, but the quality was solid. BizNutritia really put effort into making sure everything worked well in the end.", cardRating:"4"},
    
            {rateName:"David O. Rider", rateImg:Yuvala, rateMessage:"I loved how professional and reliable BizNutritia is. They listen first, then give solutions that actually work. My business has grown online, and I’ll definitely work with them again.", cardRating:"5"}
        ]
    
        /* Now lets create two functions to facilitate forward and backword movement */
        const navigateForward = ()=> {
            setCurrentIndex((prev)=> (prev+1) % testimonialCards.length);
        }
        const navigateBack = ()=> {
            setCurrentIndex((prev)=> ((prev-1)+testimonialCards.length) % testimonialCards.length);
        }
        



//Lets now add some taste by animating things on homepage
   // const scrollRef = useRef([]);
     //getting all the cards
      //const cards = gsap.utils.toArray(scrollRef.current.children);
    //animating each card
      //cards.forEach((card)=>{})

      const box1Ref = useRef(null);
      const box2Ref = useRef(null);
      const box3Ref = useRef(null);
      const circle1Ref = useRef(null);
      const circle2Ref = useRef(null);
      const circle3Ref = useRef(null);

    useGSAP(() => {
      gsap.fromTo(
        [box1Ref.current, box2Ref.current, box3Ref.current],// all boxes
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: box1Ref.current, // first box triggers all
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, []);

    useGSAP(() => {
      gsap.fromTo(
        [circle1Ref.current, circle2Ref.current, circle3Ref.current],// all circles
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: circle1Ref.current, // first circle triggers all
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, []);

    return(
        <div className="bg-background">
            {/* This is the home landing page section */}
            <div className="w-full bg-primary">
                    <div className="w-full h-screen bg-[url('/portfolioCOVER.png')] bg-cover sm:bg-bottom bg-[60%]" >
                        <div className="w-full h-screen bg-linear-to-r from-primary via-primary via-30% to-transparent">
                            <Header/>

            <br /><br />

                            <div className="w-full h-fit flex flex-row">
                                <div className="w-fit h-[90vh] flex flex-col items-start p-[5%] justify-start  sm:pl-[5%] sm:pt-[10%] pt-[13%] lg:pl-16 lg:pt-16">
                                    <p className="sm:text-6xl text-5xl w-full sm:w-150  text-background">Your <span className="text-soft-alert font-extralight sm:text-background sm:font-normal">best</span> <span className="text-soft-alert font-extralight">partner in <span className="sm:text-soft-alert sm:font-extralight text-background font-normal">every</span></span> business <br />solution </p>
                                    <br /><br />
                                    <p className="text-sm text-bg-dark sm:mt-4 md:mt-8 lg:mt-12">Creating a powerful online presence by providing everything you  <br /> need to succeed!</p>
                                    <button className="btn-primary mt-10 bg-secondary text-background cursor-pointer blue-shadow">Explore more <FontAwesomeIcon icon={faArrowRightLong} className="translate-y-0.5 animate-pulse"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <br />

            {/* This is the home page body section, SECTION1 */}
            <div className="w-[90vw] h-fit md:w-[80vw] lg:w-[65vw] md:h-54 pt-8 m-auto text-text text-left sm:text-center md:mt-4">
                <p className="text-xl sm:text-2xl ">From building stunning and secure websites, to running targeted Google Ads that bring real customers</p>
                <p className="w-[90%] sm:w-2/3 text-md m-auto mt-4 text-text-muted text-left">We help businesses turn their online presence into a growth machine—so you can focus on what you do best !</p>
            </div>

             {/* SECTION 2 OUR SERVICES CARDS */}
             <div className="w-full h-fit">
                 <div className="h-fit w-[90%] lg:w-2/3 m-auto flex-row-center flex-wrap justify-evenly gap-6 mt-12">
                    <div ref={box1Ref} className="w-fit h-fit">
                        <SkillCard cardTitle="Web Development/ Design" cardDes="Build beautiful, responsive websites that grow your business." icon={<FontAwesomeIcon icon={faLaptopCode}/>} />
                    </div>
                    <div ref={box2Ref} className="w-fit h-fit">
                        <SkillCard cardTitle="Google ADs Management " cardDes="Running targeted ads that attract more customers fast."  icon={<FontAwesomeIcon icon={faGoogle} />} />
                    </div>
                    <div ref={box3Ref} className="w-fit h-fit">
                         <SkillCard cardTitle="Marketting specialist" cardDes="Promote your brand effectively to boost sales and visibility." icon={<FontAwesomeIcon icon={faBullhorn} />} />
                    </div>
                 </div>
             </div>

             <br /><br /><br />

            {/* SECTION 3 */}
             <div className="W-full h-80 bg-[url('/woman-analyzing-data-digital-interface.jpg')] bg-top bg-cover lg:mt-4">
                <div className="w-full h-full bg-primary/80 flex items-center justify-center p-4">
                    <h1 className="text-2xl text-background w-fit m-auto text-left"> <span className="font-bold text-soft-alert">HERE FOR YOU!____</span> let's get everything up and running<span className="animate-pulse duration-300"> . . .</span></h1>
                </div>
             </div>

             <br /><br />  

            {/* SECTION 4 */}
             <div className="w-full h-fit md:mt-8">
                <p className="header">| Let client statistics <span className="headerSpan">speak for us </span></p>
                <p className="w-[90%]  md:w-1/2 text-md m-auto mt-4 text-text-muted text-left sm:text-center">Our results are measured in your success—real growth, higher traffic, and more customers backed by proven numbers!</p>
                <div className="w-2/3 m-auto h-fit flex flex-row items-center justify-evenly flex-wrap gap-4 mt-10">
                    <div ref={circle1Ref} className="w-fit h-fit">
                        <StatsBox statsNum="500+" statsDes="Clients"/>
                    </div>
                    <div ref={circle2Ref} className="w-fit h-fit">
                        <StatsBox statsNum="100+" statsDes="Businesses"/>
                    </div>
                    <div ref={circle3Ref} className="w-fit h-fit">
                        <StatsBox statsNum="50+" statsDes="Websites"/>
                    </div>
                </div>
             </div>

             <br /><br /><br />

            {/* SECTION 5 */}
             <div className="w-full h-fit md:mt-8">
                <p className="header">| Here's what our clients <span className="headerSpan">say about us </span></p>
                <p className="w-[90%]  md:w-1/2 text-md m-auto mt-4 text-text-muted text-left sm:text-center">We’re proud to let our happy clients do the talking, here’s what they have to say about working with us.</p>
                {/* Importing the testimonial card and inserting all ther required props */}
                <TestimonialCard rateImg={testimonialCards[currentIndex].rateImg} goForward={navigateForward} goBack={navigateBack} rateName={testimonialCards[currentIndex].rateName}  rateMessage={testimonialCards[currentIndex].rateMessage} cardRating={testimonialCards[currentIndex].cardRating} />
             </div>

             <br /><br /><br />

             <div>
                
             </div>
             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


             <div className="w-full bg-primary h-[90vh] flex flex-row">
                <div id="testCard" className="bg-red-200 w-fit h-fit">
                <SkillCard cardTitle="Web Development/ Design" cardDes="Build beautiful, responsive websites that grow your business." icon={<FontAwesomeIcon icon={faLaptopCode}/>} />
                </div>
                <div id="testCard" className="w-20 h-30 bg-green-500"></div>
                <div id="testCard" className="w-20 h-30 bg-accent"></div>
             </div>

             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

             

             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            {/* FOOTER SECTION */}
            <Footer/>

        </div>
)
}
  
export default Home