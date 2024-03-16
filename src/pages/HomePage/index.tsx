import { useEffect } from "react";
import { apartments, homeCarouselDescription } from "../../api/mocks";
import { ApartmentsCarousel } from "../../components/ApartmentsCarousel";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import { TextSection } from "../../components/TextSection";

gsap.registerPlugin(ScrollTrigger);

// const fadeInAnimation = (className: string) => {
//   gsap.from(className, {
//     y: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: className,
//       start: "top 90%", // Adjusted the start value
//       end: "top 10%", // Adjusted the end value
//       scrub: true,
//       onEnter: () => {
//         gsap.to(className, {
//           y: 0,
//           opacity: 1,
//           duration: 4,
//           ease: "power3.out",
//           visibility: "visible",
//         });
//       },
//       onLeave: () => {
//         gsap.to(className, {
//           y: -10,
//           opacity: 0.5, // Adjust opacity as needed during leaving
//           duration: 1,
//           ease: "power3.out",
//           visibility: "visible",
//         });
//       },
//     },
//   });
// };

export const HomePage = () => {
  useEffect(() => {
    fadeInAnimation(".carousel-in");
  });
  return (
    <>
      <HeroHeader
        title=""
        imgSrc="http://www.isoladeimori.it/idm/images/slide/struttura2.jpg?1709153506378"
      />
      <div
        className="apartments-carousel"
        style={{ backgroundColor: "#f0ebe5" }}
      >
        <Stack flexDirection="column">
          <Stack
            flex={1}
            justifycontent="flex-start"
            alignitems="flex-start"
            flexDirection="column"
            className="carousel-in"
          >
            <TextSection
              title={homeCarouselDescription.title}
              subtitle={homeCarouselDescription.subtitle}
            />

            <ApartmentsCarousel apartmentList={apartments} />
          </Stack>
        </Stack>
      </div>
    </>
  );
};
