import { useEffect } from "react";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../HomePage/style.css";
import "./style.css";
import { Button } from "../../components/Button";
import { initFadeInAnimation } from "../../animation";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { selectAllContent } from "../../features/apartments/selectors";
import { TextImage } from "../../components/TextImage";
import { aboutUsContent } from "../../constants/constants";
import { useTranslation } from "react-i18next";
import { DescriptionCard } from "../../components/DescriptionCard";
import { imagesResponse } from "../../api/responses";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  useEffect(() => {
    initFadeInAnimation(".fade-in");
  }, []);
  const content = useSelector(selectAllContent);
  const { i18n, t } = useTranslation();

  return (
    <>
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle={t("book-now")}
      />
      <HeroHeader
        title="Chi siamo"
        imgSrc={content?.[2]?.url || imagesResponse[4].url}
        className="fade-in"
      />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">{t("about-us-title")}</h1>
            <div className="description-first-home ">
              <span className="fade-in">{t("about-us-1")}</span>
              <span className="fade-in">{t("about-us-2")}</span>
              <span className="fade-in">{t("about-us-3")}</span>
            </div>
          </div>
          <Stack className="button-group">
            <Button
              buttonTitle={t("discover-btn")}
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
        <Stack
          flexDirection="column"
          gap={50}
          paddingvertical={50}
          className="second-about"
          flex={1}
        >
          {aboutUsContent.map((_, index) => {
            return (
              <TextImage
                description={t(
                  `about-us-content.content-${index + 1}-description`
                )}
                title={t(`about-us-content.content-${index + 1}-title`)}
                imageSrc={content?.[index]?.url || imagesResponse[4].url}
                direction={index % 2 === 0 ? "row" : "reverse"}
                key={index}
              />
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};
