import React from 'react'
import "./FloatingIcon.css";
import ws2 from "./ws2.png";

const WhatsappButton = () => {
    const handleIconClick = () => {
        // Whatsapp del "Ing" Edwin León +593 99 9667904
        window.open('https://wa.link/f3p6uz') 
    };
  return (
    <>
        <div className="floating-icon d-flex justify-content-center align-items-center">
            <div onClick={handleIconClick} className="image-container d-flex justify-content-center align-items-center">
                <img src={ws2} width="100%" alt="" />
            </div>
        </div>
    </>
  )
}

export default WhatsappButton