import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Wrapper from "./CarouselleComponents/Wrapper/Index";
// import Title from "./CarouselleComponents/Title/Index";
// import Subtitle from "./CarouselleComponents/Subtitle/Index";

import bogliasco from "./Images/c5dbbf60596666f3e5f3636be3b8d8d5.emcocables-slider-3.webp";
import countyClare from "./Images/cz05100-01-thumbnail-1080x1080-70.jpg";
import craterRock from "./Images/galvanizado.jpg";
import giauPass from "./Images/ACCESORIOS.jpg";
import ingecables from "./Images/ACCESORIOS.jpg";

// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
// const ingecables = "https://i.imgur.com/8IuucQZ.jpg";

export default function Carouselle() {
  return (
    <HeroSlider
      height={"75vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 10,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        {/* <Wrapper>
          <Title>INGECABLES</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper> */}
      </Overlay>

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: ingecables
        }}
      />

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: craterRock
        }}
      />
      <MenuNav />
    </HeroSlider>
  );
}
