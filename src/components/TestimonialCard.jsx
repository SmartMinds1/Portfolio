import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faQuoteLeft, faQuoteRight, faStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({rateImg, rateMessage, rateName, cardRating, goForward, goBack})=> {

   /*To be able to render the rating stars nicely, we need the logic below */
   const renderStars = () => {
        const stars = [];
        const fullStars = parseInt(cardRating);
        const emptyStars = 5 - fullStars;

        //redering full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
            <FontAwesomeIcon
                key={`full-${i}`}
                icon={faStarSolid}
                className="mr-1 text-soft-alert"
            />
            );
        }
        
        //redering empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
            <FontAwesomeIcon
                key={`empty-${i}`}
                icon={faStar}
                className="text-bg-dark"
            />
            );
        }

        return stars;
    };

    return(
    <div className="h-fit md:w-[70vw] w-full m-auto flex-row-center justify-evenly flex-wrap mt-16 shadow-xl p-2 rounded-xl">
        {/* Image div */}
        <div className="w-60 h-60 rounded-full bg-top bg-cover" style={{ backgroundImage: `url(${rateImg})` }}> </div>
        <div className="w-[98%] md:w-160 h-fit mt-4">
            <div className="w-[80%] md:w-140 sm:h-20 h-fit m-auto flex-row-center flex-wrap-reverse  gap-2 mb-2">
                {/* lets now render the stars */}
                {renderStars()}
                <p className="mr-[15%] md:mr-0">{cardRating}/5</p>
                <h2 className="sm:ml-[10vw] text-text font-bold text-xl">{rateName}</h2>
            </div>

            {/* review message */}
            <div className="w-fit bg-[hsl(195,20%,96%)] md:w-140 md:h-28 h-fit m-auto p-4 text-text-muted rounded-xl">
                <p><FontAwesomeIcon icon={faQuoteLeft} className="text-sm ml-2 mr-2 text-secondary"/> {rateMessage} <FontAwesomeIcon icon={faQuoteRight} className="text-sm ml-2 mr-2 text-secondary" /></p>
            </div>

            {/* navigation icons */}
            <div className="w-[80%] md:w-140 h-16 m-auto flex items-center justify-center gap-2">
                <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} className="p-2 bg-background text-text rounded-full shadow-xl cursor-pointer hover:brightness-95 transition-all duration-400"/>
                <FontAwesomeIcon onClick={goForward} icon={faArrowRight} className="p-2 bg-background text-text rounded-full shadow-xl cursor-pointer hover:brightness-95 transition-all duration-400"/>
            </div>
        </div>
      </div>
    );
}

export default TestimonialCard