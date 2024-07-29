import { useEffect } from "react";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../HomePage/style.css";
import "./style.css";
import { TextSection } from "../../components/TextSection";
import { Button } from "../../components/Button";
import { initFadeInAnimation } from "../../animation";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { selectAllContent } from "../../features/apartments/selectors";
import { aboutUsContent } from "../../constants/constants";
import { TextImage } from "../../components/TextImage";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export const Sustainability = () => {
  useEffect(() => {
    initFadeInAnimation(".fade-in");
  });
  const content = useSelector(selectAllContent);
  const { i18n, t } = useTranslation();

  return (
    <>
      <Header
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
        buttonTitle={t("book-now")}
      />
      <HeroHeader
        title={t("sus-title")}
        imgSrc={content[5]?.url}
        className="fade-in"
      />
      <Stack flexDirection="column">
        <div className="first-home">
          <div className="text-container-centered">
            <h1 className="fade-in">{t("sus-title")}</h1>
            <div className="description-first-home ">
              <span className="fade-in">{t("sus-1")}</span>
              <span className="fade-in">{t("sus-2")}</span>
              <span className="fade-in">{t("sus-3")}</span>
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
      </Stack>
    </>
  );
};
