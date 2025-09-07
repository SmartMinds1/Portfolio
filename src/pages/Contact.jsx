import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHomeAlt, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import FAQcard from "../components/FAQcard";
import Footer from "../components/Footer";
/* import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; */

const Contact = ()=> {

    return(
        <div>

            {/* CONTACT HEAD */}
            <div className="w-full h-24 bg-background flex flex-row items-center justify-evenly">
                <div className="w-40 flex flex-row items-end justify-center">
                  <div className="w-10 h-10 bg-[url('/bigStarBlack.png')] bg-contain bg-no-repeat bg-center rotate-270"></div>
                  <p className="text-primary text-2xl font-bold">bizN<span className="text-secondary text-2xl font-light">utritia</span></p>
                </div>
                <ul className="flex flex-row items-center justify-evenly w-1/3 h-12 text-text text-sm">
                    <li> <Link to="/">home</Link> </li>
                    <li> <Link to="about">about</Link></li>
                    <li> <Link to="services">services</Link></li>
                    <li> <Link to="projects">projects</Link></li>
                    <li> <Link to="contact">contact</Link></li>
                    <li> <Link to="pricing">pricing</Link></li>
                </ul>
                <button className="btn-primary text-background bg-soft-alert m-0 rounded-3xl">Call Now</button>
            </div>
        
            {/* SECTION 1 */}
            <div className="w-full h-[85vh] bg-background">
                <div className="h-[40vh] w-full flex items-center justify-center">
                    <div className="w-full">
                        <p className="header">| Connect <span className="headerSpan">with Us </span></p>
                        <p className="w-1/2 text-md m-auto mt-4 text-text-muted text-center">Whether you need a new website, a marketing strategy, or both — I’d love to hear from you today!</p>
                    </div>
                </div>
               
               {/* contacts div */}
               <div className="w-[80vw] m-auto h-fit flex flex-row items-center justify-center flex-wrap-reverse gap-4">
                    {/* visit div */}
                    <div className="w-140 m-auto h-40 flex flex-row items-center justify-evenly">
                        <div className=" contactIconBox rounded-full bg-secondary"> <FontAwesomeIcon icon={faHomeAlt} className="contactIcon text-background"></FontAwesomeIcon> </div>
                        <p className="text-text"> Visit Us : </p>
                        <p className="text-text-muted ml-1 text-sm"> Twiga towers, 6th floor, Room 606, Murang'a Road, <br /> Opp Meridian Court Hotel, <br /> Nairobi Kenya </p>
                    </div>
                
                    {/* call Email div */}
                    <div className=" w-100">
                        <div className="callEmailBox">
                            <div className=" contactIconBox bg-background"> <FontAwesomeIcon icon={faPhoneFlip} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Call Us : <span className="text-text-muted">+254 115 154 402</span> </p>
                        </div>
                        <div className="callEmailBox">
                            <div className="contactIconBox bg-background"> <FontAwesomeIcon icon={faEnvelope} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Email Us : <span className="text-text-muted">smartadsdigital@gmail.com</span> </p>
                        </div>
                    </div>
                </div>      
            </div>


            {/* SECTION 2 */}
            <div className="h-[95vh] w-full bg-primary">
                <div className="w-full h-30">
                    <p className="header text-left pl-[8vw] pt-12 text-background">| Send us <span className="headerSpan text-soft-alert">a message </span></p>
                </div>

                {/* chart Form Box */}
                <div className="w-full flex flex-row flex-wrap items-center justify-evenly">
                      {/* chartForm */}
                        <div className="w-140 h-110 bg-background p-8 rounded-xl">
                            <input 
                              className="w-[40%] shadow-md h-12 p-4"
                              type="text"
                              placeholder="full name"
                              autoComplete="on"
                             />
                            <input
                              className="w-[60%] shadow-md h-12 p-4" 
                              type="text"
                              placeholder="email"
                              autoComplete="on"
                             />

                            <textarea 
                              className="shadow-md resize-none p-4 mt-10 "
                              name="" 
                              id="" 
                              cols="48" 
                              rows="8"
                              placeholder="Your message"
                            />
                            
                            <button className="btn-primary text-background bg-accent mt-4 w-40">send now</button>
                        </div>

                      {/* Form caption */}
                        <div className="w-1/3 h-[70vh] flex flex-col items-center justify-evenly">
                               <div class="w-64 h-64 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[url('/CasualConversation.webp')] bg-cover bg-[center] bg-no-repeat bg-soft-alert"></div>
                               <p className=" w-2/3 text-center text-bg-dark">Fill out the form, and I’ll get back to you within<span className="text-secondary font-bold text-xl"> 24 hours.</span> </p>
                        </div>
                </div>
            </div>


            <br /><br /><br /><br />

            {/* SECTION 4 */} 
            <div className="w-full h-fit">
                <p className="header">| Have questions? <span className="headerSpan">You’re not alone.</span></p>
                <p className="w-1/2 text-md m-auto mt-4 text-primary text-center">We’ve answered frequently asked questions by clients. If you don’t see your question here, feel free to reach out.</p>
            </div>
              <br /><br />              
              <div>
              {/* All the faqs */}
              <FAQcard 
                faqTitle="How much do you charge for a website?"
                faqAns="Our pricing depends on the complexity of your project. Simple landing pages cost less than full e-commerce platforms. After a free consultation, I’ll give you a clear, no-surprise quote."
                />
              <FAQcard 
                faqTitle="Do you only build websites, or you also handle marketing?"
                faqAns="We do both. I’m a full-stack developer and a certified Google Ads specialist, so we can design, build, and promote your website."
                />
              <FAQcard 
                faqTitle="Can I hire you just for Google Ads management?"
                faqAns="Absolutely! Some clients already have a website and only need Ads management. We can audit your site and campaigns, then set up and optimize ads to bring in targeted traffic."
                />
              <FAQcard 
                faqTitle="How long does it take to finish a project?"
                faqAns="Small websites (like landing pages) can take 1–2 weeks. Larger websites (e-commerce, custom apps) usually take 4–6 weeks. Ad campaigns can be launched in as little as 3–5 days once everything is set up."
                />
              <FAQcard 
                faqTitle="Will I be able to update my website after you build it?"
                faqAns="Yes! I design websites so they’re easy to update. I’ll also provide a quick walkthrough or documentation so you can manage content on your own — no coding required."
                />
              <FAQcard 
                faqTitle="Do you work with international clients?"
                faqAns="Yes. I work with clients from anywhere in the world. We can communicate via email, Zoom, or WhatsApp, and I accept international payments."
                />
              <FAQcard 
                faqTitle="How do you make sure my Ads budget is well spent?"
                faqAns="I set up detailed conversion tracking so we know exactly where every dollar goes. I regularly test, monitor, and optimize your campaigns to make sure your budget brings maximum return."
                />
              <FAQcard 
                faqTitle="What if I don’t know where to start, website first or Ads?"
                faqAns="Don’t worry. During our consultation, I’ll analyze your business and recommend the best starting point. Sometimes it’s building a high-converting site first, sometimes it’s running ads with a landing page — it depends on your goals."
                />

              </div>

             <br /><br /><br />

            {/* FINAL SECTION */}
            <div className="w-full h-fit">
                <p className="w-full text-center text-text-muted">Ready to take your business online the smart way? &nbsp;&nbsp; <button className="btn-primary">Get started</button></p>
            </div>

            <br /><br /><br /><br /><br /><br />

            <Footer/>
        </div>
    );
}

export default Contact;