import React from 'react'
import "./FloatingIcon.css";
import ws2 from "./ws2.png";

const WhatsappButton = () => {
    const handleIconClick = () => {
        window.open('http://www.wa.link/b32221'); // Abrir enlace en una nueva ventana/tab
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