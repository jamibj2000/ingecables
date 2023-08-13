import React, { useEffect } from 'react'
import "./Card.css";

const Card = ({className, imageSource, textButton, handleClick, endpoint }) => {
  return (
    <>
        <div onClick={() => handleClick(endpoint)} className={`${className}`} >
          <section className='card-image-container'>
            <img draggable="false" src = { imageSource } className="card-image" alt="Carta 1" />
          </section>
          <div className='card-button'>
            {textButton}
          </div>
        </div>
    </>
  )
}

export default Card