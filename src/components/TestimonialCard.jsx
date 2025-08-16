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

        for (let i = 0; i < fullStars; i++) {
            stars.push(
            <FontAwesomeIcon
                key={`full-${i}`}
                icon={faStarSolid}
                className="mr-1 text-secondary"
            />
            );
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(
            <FontAwesomeIcon
                key={`empty-${i}`}
                icon={faStar}
                className="text-text"
            />
            );
        }

  return stars;
};

    return(
    <div className="h-fit w-[70vw] m-auto flex flex-row items-center justify-evenly mt-16 shadow-xl p-2 rounded-xl">
        <div
            className="w-60 h-60 rounded-full bg-top bg-cover"
            style={{ backgroundImage: `url(${rateImg})` }}
        ></div>

        <div className="w-160 h-fit">
            <div className="w-140 h-20 m-auto flex items-center gap-2">
                {/* lets now render the stars */}
                 {renderStars()}
                <p>{cardRating}/5</p>
                <h2 className="ml-[10vw] text-text font-bold">{rateName}</h2>
            </div>
            <div className="w-140 h-28 m-auto p-4">
                <p><FontAwesomeIcon icon={faQuoteLeft} className="text-sm ml-2 mr-2 text-soft-alert"/> {rateMessage} <FontAwesomeIcon icon={faQuoteRight} className="quotestext-sm ml-2 mr-2 text-soft-alert" /></p>
            </div>
            <div className="w-140 h-16 m-auto flex items-center justify-center gap-2">
                <FontAwesomeIcon onClick={goBack} icon={faArrowLeft} className="p-2 bg-background text-text rounded-full shadow-xl cursor-pointer hover:brightness-95 transition-all duration-400"/>
                <FontAwesomeIcon onClick={goForward} icon={faArrowRight} className="p-2 bg-background text-text rounded-full shadow-xl cursor-pointer hover:brightness-95 transition-all duration-400"/>
            </div>
        </div>
      </div>
    );
}

export default TestimonialCard