import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faWhatsapp,
    faFacebook,
    faXTwitter,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons';

const Socials = ()=>{
    return(
        <div className="socialNav">
            <div className="w-80 h-12 flex flex-row justify-evenly items-center list-none">
                <li>  <FontAwesomeIcon icon={faWhatsapp}  className="myIcons list-none"/> </li>
                <li>  <FontAwesomeIcon icon={faYoutube}   className="myIcons"/> </li>
                <li>  <FontAwesomeIcon icon={faXTwitter}  className="myIcons"/> </li>
                <li>  <FontAwesomeIcon icon={faFacebook}  className="myIcons"/> </li>
                <li>  <FontAwesomeIcon icon={faInstagram} className="myIcons"/> </li>
            </div>
        </div>
    );
}

export default Socials