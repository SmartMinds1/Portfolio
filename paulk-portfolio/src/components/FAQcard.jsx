import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const FAQcard = ({faqAns, faqTitle})=>{
    const [toggleIcon, setToggleIcon] = useState(false);

    return(
    <details className="w-[95%] sm:w-[80%] md:w-[65%] lg:w-[50%] m-auto rounded-sm p-2 pt-8 pb-8 mb-4  shadow-lg" open={toggleIcon}>
        <summary 
                className="h-fit w-full cursor-pointer list-none text-lg flex-row-start flex-nowrap gap-2 justify-between" 
                onClick={(e)=>{
                e.preventDefault();
                setToggleIcon(!toggleIcon);
                }}>    
               <FontAwesomeIcon icon={faCircleQuestion} className="text-2xl text-secondary translate-y-1 mr-2" /> {faqTitle}
                { toggleIcon ? <FontAwesomeIcon icon={faAngleUp} className="text-6 text-secondary float-right sm:mr-4 mt-1 " /> : <FontAwesomeIcon icon={faAngleDown} className="text-6 text-secondary float-right sm:mr-4 mt-1" /> }
        </summary>

        {toggleIcon && <p className="ml-[4vw] text-text-muted mt-4">{faqAns}</p>}

    </details>
    )
}

export default FAQcard