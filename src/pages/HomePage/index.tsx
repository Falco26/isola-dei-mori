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
import { useSelector } from "react-redux";
import {
  selectAllApartments,
  selectVideoContent,
} from "../../features/apartments/selectors";
import { useTranslation } from "react-i18next";
import { ScrollToTop } from "../../components/ScrollToTop";

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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    initFadeInAnimation(".fade-in");
  });
  const videoLink = useSelector(selectVideoContent);
  const apartments = useSelector(selectAllApartments);
  return (
    <>
      <ScrollToTop />
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle="Prenota ora"
      />
      <HeroHeader
        title=""
        imgSrc={
          videoLink ||
          "http://www.isoladeimori.it/idm/images/slide/struttura2.jpg?1709153506378"
        }
        isVideo
      />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">Immergiti nella vera Sardegna</h1>
            <div className="description-first-home ">
              <span className="fade-in">{t("home-1")}</span>
              <span className="fade-in">{t("home-2")}</span>
            </div>
          </div>
          <Stack className="button-group">
            <Button
              buttonTitle="Prenota ora"
              icon="ArrowForwardIosRounded"
              fontSize="md"
              className="button-home-book fade-in"
              onClick={() =>
                window.open(
                  "https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
                )
              }
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
                title={t("home-carousel-title")}
                subtitle={t("home-carousel-description")}
              />

              <ApartmentsCarousel apartmentList={apartments} />
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
