import WhiteHeader from "../components/WhiteHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHomeAlt, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import FAQcard from "../components/FAQcard";
import Footer from "../components/Footer";

import React, {useState, useEffect} from "react";
import axios from "axios";
import Alert from "../components/Alert";
import GenModal from "../components/GenModal";

const Contact = ()=> {
      //states for input fields and feedback message from the API
      const[formData, setFormData] = useState({username:"", email:"", message:""});
      const[responseMessage, setResponseMessage] = useState("");
      const [showModal, setShowModal] = useState(false);

      //The handle change function sets the formdata with the user inputs
      const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      //handleSubmit sends the user inputs to the database
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting user message", formData);

          try {
              const response = await axios.post("http://localhost:5000/api/messages", formData);
              setResponseMessage(response.data.message);
              setFormData({username:"", email:"", message:""});
              }
              
          catch(error){
            setResponseMessage("ERROR! sending the message, Kindly try again later!");
          }
      }


      // Show modal only when responseMessage changes and is not empty
      useEffect(() => {
        if (responseMessage) {
           setShowModal(true);
        }
      }, [responseMessage]);

    return(
        <div className="bg-background">

           {/* CONTACT HEAD */}
            <WhiteHeader/>
        
            {/* SECTION 1 */}
            <div className="w-full h-fit lg:pb-[6vh] bg-background">
                <div className="h-[40vh] w-full flex items-center justify-center">
                    <div className="w-full">
                        <p className="header">| Connect <span className="headerSpan">with Us </span></p>
                        <p className="m-auto mt-4 text-text-muted w-[90%] md:w-[70%] lg:w-[50%] text-md text-center">Whether you need a new website, a marketing strategy, or both, We’d love to hear from you today!</p>
                    </div>
                </div>
               
               {/* contacts div */}
               <div className="w-[80vw] m-auto h-fit flex flex-row items-center justify-center flex-wrap-reverse gap-4">
                    {/* visit div */}
                    <div className="w-140 m-auto h-fit sm:h-40 flex sm:flex-row flex-col items-center justify-evenly gap-4 sm:gap-0">
                        <div className=" contactIconBox rounded-full bg-secondary shadow-[#89B0AE]"> <FontAwesomeIcon icon={faHomeAlt} className="contactIcon text-background"></FontAwesomeIcon> </div>
                        <p className="text-text"> Visit Us : </p>
                        <p className="text-text-muted ml-1 text-sm"> Twiga towers, 6th floor, Room 606, Murang'a Road, <br /> Opp Meridian Court Hotel, <br /> Nairobi Kenya </p>
                    </div>
                
                    {/* call Email div */}
                    <div className=" w-[95vw] sm:w-100">
                        <div className="callEmailBox">
                            <div className=" contactIconBox bg-background"> <FontAwesomeIcon icon={faPhoneFlip} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Call Us : <span className="text-text-muted">+254 115 154 402</span> </p>
                        </div>
                        <div className="callEmailBox">
                            <div className="contactIconBox bg-background"> <FontAwesomeIcon icon={faEnvelope} className="contactIcon"></FontAwesomeIcon></div>
                            <p>Email Us : <span className="text-text-muted">biznutritia@gmail.com</span> </p>
                        </div>
                    </div>
                </div>      
            </div>


            {/* SECTION 2 */}
            <div className="h-fit lg:h-[95vh] w-full bg-primary mt-16 md:p-2">
                <div className="w-full h-30">
                    <p className="header text-left pl-2 sm:pl-[8vw] pt-12 text-background w-[100%]">| Send us <span className="headerSpan text-soft-alert">a message </span></p>
                </div>

                {/* chart Form Box */}
                <div className="w-full flex md:flex-row flex-col flex-wrap items-center justify-evenly gap-8 lg:gap-0">
                      {/* chartForm */}
                      <form onSubmit={handleSubmit}>
                        <div className="w-[95%] sm:w-140 h-fit lg:h-110 bg-background p-4 md:p-8 rounded-xl">
                            <div className="w-full flex flex-col sm:flex-row gap-4">
                              <input 
                                className="w-full sm:w-[40%] shadow-md h-12 p-4"
                                type="text"
                                placeholder="Your name"
                                name="username"
                                id="username"
                                autoComplete="on"
                                maxLength="30"
                                minLength="3"
                                required
                                value={formData.username}
                                onChange={handleChange}
                              />
                              <input
                                className="w-full sm:w-[60%] shadow-md h-12 p-4" 
                                type="email"
                                name="email"
                                autoComplete="on"
                                id="email"
                                maxLength="40"
                                required
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>

                            <textarea 
                              className="shadow-md w-[100%] h-60 resize-none p-4 mt-10 "
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              placeholder="Your message"
                            />
                            
                            <button className="btn-primary text-background bg-accent mt-4 w-40 blue-shadow">send now</button>
                        </div>
                      </form>

                      {/* Form caption */}
                      <div className="w-fit sm:scale-none sm:w-[25rem] h-[70vh] flex flex-col items-center justify-evenly">
                              <div class=" w-64 h-64 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[url('/CasualConversation.webp')] bg-cover bg-[center] bg-no-repeat bg-soft-alert"></div>
                              <p className=" w-[80%] text-center text-bg-dark">Fill out the form, and we'll get back to you within<span className="text-background font-bold text-xl"> 24 hours.</span> </p>
                      </div>
                </div>
            </div>


            <br /><br /><br /><br />

            {/* SECTION 4 */} 
            <div className="w-full h-fit">
                <p className="header">| Have questions? <span className="headerSpan">You’re not alone.</span></p>
                <p className="m-auto mt-4 text-text-muted w-[90%] md:w-[70%] lg:w-[50%] text-md text-center">We’ve answered frequently asked questions by clients. If you don’t see your question here, feel free to reach out.</p>
            </div>
            
              <br /><br />              
            
            <div className="h-fit">
                {/* All the faqs */}
                <FAQcard 
                  faqTitle="How much do you charge for a website?"
                  faqAns="Our pricing depends on the complexity of your project. Simple landing pages cost less than full e-commerce platforms. After a free consultation, we shall give you a break-down, no-surprise quote."
                  />
                <FAQcard 
                  faqTitle="Do you only build websites, or you also handle marketing?"
                  faqAns="We do both. We can design, build, and promote your website."
                  />
                <FAQcard 
                  faqTitle="Can I hire you just for Google Ads management?"
                  faqAns="Absolutely! Some clients already have a website and only need Ads management. We can audit your site and campaigns, then set up and optimize ads to bring in targeted traffic."
                  />
                <FAQcard 
                  faqTitle="How long does it take to finish a project?"
                  faqAns="Small websites (like landing pages) can take 1–2 weeks. Larger websites (e-commerce, custom apps) usually take 1-2 months. Ad campaigns can be launched in as little as 3–5 days once everything is set up."
                  />
                <FAQcard 
                  faqTitle="Will I be able to update my website after you build it?"
                  faqAns="Yes! We design websites so they’re easy to update. We also provide a quick walkthrough or documentation so you can manage content on your own — no coding required."
                  />
                <FAQcard 
                  faqTitle="Do you work with international clients?"
                  faqAns="Yes. We work with clients from anywhere in the world. We can communicate via email, Zoom, or WhatsApp, and We accept international payments."
                  />
                <FAQcard 
                  faqTitle="How do you make sure my Ads budget is well spent?"
                  faqAns="We set up detailed conversion tracking so we know exactly where every dollar goes. We regularly test, monitor, and optimize your campaigns to make sure your budget brings maximum return."
                  />
                <FAQcard 
                  faqTitle="What if I don’t know where to start, website first or Ads?"
                  faqAns="Don’t worry. During our consultation, We'll analyze your business and recommend the best starting point. Sometimes it’s building a high-converting site first, sometimes it’s running ads with a landing page — it depends on your goals."
                  />
              </div>

             <br /><br /><br />

            {/* FINAL SECTION */}
            <div className="w-full h-fit">
                <p className="w-[90%] lg:w-[70%] gap-6 m-auto text-center text-text-muted flex flex-row-center justify-evenly flex-wrap ">Ready to take your business online the smart way?<button className="btn-primary mt-3">Get started</button></p>
            </div>


    {/*  Displaying the response messsage using a pop up modal */}  
              <GenModal isOpen={showModal} onClose={() => {
                    setShowModal(false); 
                    setResponseMessage("");//reset so that to trigger useEffect on the second time
                  }}>

                  <Alert onClose={() => {
                    setShowModal(false); 
                    setResponseMessage("");
                  }}
                  >
                    <p className="responseMessage">{responseMessage}</p>
                  </Alert>
              </GenModal>

            <br /><br /><br /><br /><br /><br />

            <Footer/>
        </div>
    );
}

export default Contact;