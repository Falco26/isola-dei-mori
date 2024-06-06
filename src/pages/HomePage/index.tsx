import { useEffect } from "react";
import { homeCarouselDescription } from "../../api/mocks";
import { ApartmentsCarousel } from "../../components/ApartmentsCarousel";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import { TextSection } from "../../components/TextSection";
import { Button } from "../../components/Button";
import { initFadeInAnimation } from "../../animation";
import { Header } from "../../components/Header";
import { apartmentResponse, videoLink } from "../../api/responses";

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
    initFadeInAnimation(".fade-in");
  });
  return (
    <>
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle="Prenota ora"
      />
      <HeroHeader title="" imgSrc={videoLink} className="fade-in" isVideo />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">Immergiti nella vera Sardegna</h1>
            <div className="description-first-home ">
              <span className="fade-in">
                Il complesso residenziale dell’Isola dei Mori è situato in
                località Calasapone, sulla costa occidentale dell’Isola di
                Sant’Antioco. Immersi nei tipici profumi della macchia
                mediterranea e circondati da un gradito silenzio e dalla
                musicalità dei movimenti del mare, si possono ammirare
                meravigliosi tramonti.
              </span>
              <span className="fade-in">
                Il complesso è pienamente con vista sul meraviglioso mare di
                Calasapone, è stato ricavato da una grande villa circondata da
                giardino e suddiviso in sette unità abitative indipendenti che
                distano solo un chilometro dalla bellissima spiaggia di
                Calasapone e dalle sue scogliere; inoltre pochi minuti in auto,
                lo separano dalle pittoresche insenature di Cala Lunga, Cala
                della Signora, Co’ de Quaddus e Maladroxia e dalla cittadina di
                Sant’Antioco.
              </span>
            </div>
          </div>
          <Stack className="button-group">
            <Button
              buttonTitle="Prenota ora"
              icon="ArrowForwardIosRounded"
              fontSize="md"
              className="button-home-book fade-in"
            />
          </Stack>
        </div>

        <div
          className="apartments-carousel "
          style={{ backgroundColor: "#f0ebe5" }}
          id="ref-carousel"
        >
          <Stack flexDirection="column">
            <Stack
              flex={1}
              justifycontent="flex-start"
              alignitems="flex-start"
              flexDirection="column"
              className="carousel-in fade-in"
            >
              <TextSection
                title={homeCarouselDescription.title}
                subtitle={homeCarouselDescription.subtitle}
              />

              <ApartmentsCarousel apartmentList={apartmentResponse} />
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
