import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";

//GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"

const SellingPoints = ({sellPoint})=>{
       //ref to each sellpoint
        const sellRef = useRef(null);
        
        useGSAP(() => {
           gsap.fromTo(
             sellRef.current,
             { opacity: 0, y: 100 },
             {
               opacity: 1,
               y: 0,
               duration: 1,
               stagger: 0.3,
               scrollTrigger: {
                 trigger: sellRef.current,
                 start: "top 90%",
                 toggleActions: "play none none reverse"
               }
             }
           );
         }, []);

    return(
    <div ref={sellRef} className="h-fit">
        <p className="whyUs"> <FontAwesomeIcon icon={faCheckCircle} className="whyCheckbox"></FontAwesomeIcon>{sellPoint}</p>
    </div>
    )
}

export default SellingPoints