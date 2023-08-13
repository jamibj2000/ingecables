import { useEffect, useRef, useState } from "react";
import imageB from "./Images/jdax.png";
import { data } from './data';
import "./carousel.css";
import image1 from "./imgs/angular.jpeg";
import image2 from "./imgs/jquery.jpeg";
import image3 from "./imgs/node-chat.jpeg";
import image4 from "./imgs/php-login.jpeg";
import image5 from "./imgs/redux_angular.jpg";

function ControlledCarousel() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ]

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }

  }, [currentIndex]);

  useEffect(() => {
    // setInterval(() => {
    //   scrollToImage('next')
    //   // goToSlide(currentIndex)
    // }, 3300);
  }, [])
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex])
  
  
  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      } else {
        setCurrentIndex(curr => curr = 0);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  return (
    <>
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul className="w-100 p-0 m-0" style={{ display: "flow" }} ref={listRef}>
            {
              images.map((item, index) => {
                return <li key={index}>
                  <img src={item} width={"100%"} alt=". . ."/>
                </li>
              })
            }
          </ul>
        </div>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
    </div >

    </>
  );
}

export default ControlledCarousel;