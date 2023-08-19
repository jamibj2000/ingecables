import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Wrapper from "./CarouselleComponents/Wrapper/Index";
// import Title from "./CarouselleComponents/Title/Index";
// import Subtitle from "./CarouselleComponents/Subtitle/Index";

import bogliasco from "./Images/c5dbbf60596666f3e5f3636be3b8d8d5.emcocables-slider-3.webp";
import countyClare from "./Images/cz05100-01-thumbnail-1080x1080-70.jpg";
import craterRock from "./Images/carousel/obreros.png";
import giauPass from "./Images/carousel/teclesmanuales.png";
import ingecables from "./Images/carousel/winchaEle.png";

// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
// const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
// const craterRock = "https://i.imgur.com/8DYumaY.jpg";
// const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
// const ingecables = "https://i.imgur.com/8IuucQZ.jpg";

export default function Carouselle() {
  return (
    <HeroSlider
      height={"75vh"}
      // autoplay
      // controller={{
      //   initialSlide: 1,
      //   slidingDuration: 500,
      //   slidingDelay: 10,
      //   onSliding: (nextSlide) =>
      //     console.debug("onSliding(nextSlide): ", nextSlide),
      //   onBeforeSliding: (previousSlide, nextSlide) =>
      //     console.debug(
      //       "onBeforeSliding(previousSlide, nextSlide): ",
      //       previousSlide,
      //       nextSlide
      //     ),
      //   onAfterSliding: (nextSlide) =>
      //     console.debug("onAfterSliding(nextSlide): ", nextSlide)
      // }}
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
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
        // shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: giauPass
        }}

        
      />

      <Slide
        // shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        // shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        // shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: ingecables
        }}
      />

      <Slide
        // shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: craterRock
        }}
      />
      <MenuNav />
    </HeroSlider>
  );
}



// import BasicSlider from "./components/BasicSlider/BasicSlider";
// import VerticalSlider from "./components/VerticalSlider/VerticalSlider";
// import ZoomSlider from "./components/ZoomSlider/ZoomSlider";
// import SlidesChildrenSlider from "./components/SlidesChildrenSlider/SlidesChildrenSlider";
// import BlendModeSlider from "./components/BlendModeSlider/BlendModeSlider";
// import NavbarSlider from "./components/NavbarSlider/NavbarSlider";
// import ButtonsSlider from "./components/ButtonsSlider/ButtonsSlider";
// import AutoplayButtonSlider from "./components/AutoplayButtonSlider/AutoplayButtonSlider";

// export Cx = () => {
//   return (
//     <div
//       style={{
//         color: "#FFF"
//       }}
//     >
//       <BasicSlider />
//       <VerticalSlider />
//       <ZoomSlider />
//       <SlidesChildrenSlider />
//       <BlendModeSlider />
//       <NavbarSlider />
//       <ButtonsSlider />
//       <AutoplayButtonSlider />
//     </div>
//   );
// };
