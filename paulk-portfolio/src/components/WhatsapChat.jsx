import React from "react";

const WhatsapChart = ()=>{
    return(
        <div>
            <a
                href={`https://wa.me/254115154402?text=${encodeURIComponent("Hello, Welcome to bizNutritia!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 w-14 h-14 rounded-full shadow-lg"
                >
                <img src="/whatsapp-icon.png" alt="Chat on WhatsApp" className="w-full h-full" />
                </a>

        </div>
    )
}

export default WhatsapChart