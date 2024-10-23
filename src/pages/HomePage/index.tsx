import { memo, useEffect } from "react";
import { ApartmentsCarousel } from "../../components/ApartmentsCarousel";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import { TextSection } from "../../components/TextSection";
import { Button } from "../../components/Button";
import { initFadeInAnimation, initFadeOutAnimation } from "../../animation";
import { Header } from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllApartments,
  selectAllContent,
  selectError,
  selectIsLoading,
  selectReviews,
  selectVideoContent,
} from "../../features/apartments/selectors";
import { useTranslation } from "react-i18next";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Review } from "../../components/Review";
import { reviewsMock } from "../../api/mocks";
import { aboutUsContent } from "../../constants/constants";
import { TextImage } from "../../components/TextImage";
import { apartmentResponse, imagesResponse } from "../../api/responses";
import { Loading } from "../Loader";
import { apartmentActions } from "../../features/apartments/reducer";
import { Error } from "../Error";
//@ts-ignore

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

export const HomePage = memo(() => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isErrorAPI = useSelector(selectError);
  const videoLinkAPI = useSelector(selectVideoContent);
  const videoLink =
    videoLinkAPI ||
    "https://res.cloudinary.com/dcer0ek6h/video/upload/f_auto:video,q_auto/v1/Esterni/smfu7ur3j0bgmocelknd";
  const apartments = useSelector(selectAllApartments);
  const reviews = useSelector(selectReviews);
  const content = useSelector(selectAllContent);
  const reviewList = reviews ? reviews : reviewsMock;

  // Trigger the initApp action only on component mount
  useEffect(() => {
    dispatch(apartmentActions.initApp());
    initFadeInAnimation(".fade-in");
    initFadeOutAnimation(".fade-out");
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (isErrorAPI) return <Error />;

  return (
    <>
      <ScrollToTop />
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle={t("book-now")}
      />
      <HeroHeader title={t("main-title")} imgSrc={videoLink} isVideo />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">{t("home-title-1")}</h1>
            <div className="description-first-home ">
              <span className="fade-in">{t("home-1")}</span>
              <span className="fade-in">{t("home-2")}</span>
            </div>
          </div>
          <Stack className="button-group">
            <Button
              buttonTitle={t("book-now")}
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
          className="apartments-carousel"
          style={{ backgroundColor: "#f0ebe5" }}
          id="ref-carousel"
        >
          <Stack flexDirection="column" paddinghorizontal={60}>
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

              <ApartmentsCarousel
                apartmentList={apartments ?? apartmentResponse}
              />
            </Stack>
          </Stack>
        </div>
        <div className="rating-carousel">
          {reviewList?.map((review, index) => {
            return (
              <>
                <Review
                  description={
                    i18n.language === "it"
                      ? review.descrizioneIT
                      : review.descrizioneEN
                  }
                  title={
                    i18n.language === "it" ? review.titleIT : review.titleEN
                  }
                  rating={review.rating}
                  reviewSource={review.provider}
                  className="fade-in"
                  reviewLink={review.link}
                  key={review.id}
                />
                {index !== reviewList.length - 1 && (
                  <div className="line-gray-reviews" />
                )}
              </>
            );
          })}
        </div>

        <div>
          <Stack flexDirection="column" gap={30} className="second-about">
            {aboutUsContent?.map(
              ({ descriptionEN, descriptionIT, title }, index) => {
                return (
                  <TextImage
                    description={t(
                      `about-us-content.content-${index + 1}-description`
                    )}
                    title={t(`about-us-content.content-${index + 1}-title`)}
                    imageSrc={content?.[index]?.url || imagesResponse[3].url}
                    direction={index % 2 === 0 ? "row" : "reverse"}
                    key={title}
                  />
                );
              }
            )}
          </Stack>
        </div>
      </Stack>
    </>
  );
});
