import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeSelectApartment } from "../../features/apartments/selectors";
import { HeroHeader } from "../../components/HeroHeader";
import { Stack } from "../../components/Stack";
import "./style.css";
import { ImageCarousel } from "../../components/ImageCarousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { initFadeInAnimation } from "../../animation";
import { Header } from "../../components/Header";
import { HouseServices } from "../../components/HouseServices";
import { useTranslation } from "react-i18next";
import { Text } from "../../components/Text";

gsap.registerPlugin(ScrollTrigger);

export const ApartmentPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true); // Add loading state

  const { id } = params;
  const apartment = useSelector(makeSelectApartment(id ?? "monolocali"));
  const imageCover = apartment?.photos[0].url;
  const imageList = apartment?.photos.slice(2, 9);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (apartment) {
      setLoading(false); // Data loaded, set loading to false
      initFadeInAnimation(".fade-in");
    }
  }, [apartment]);

  useEffect(() => {
    initFadeInAnimation(".fade-in");
  });

  if (loading)
    return (
      <div style={{ width: 10000, height: 10000, background: "#000" }}></div>
    );

  return (
    <>
      <Header
        buttonTitle={t("book-now")}
        navLink="https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
      />

      {apartment && (
        <Stack flexDirection="column">
          <HeroHeader
            title={
              i18n.language === "it"
                ? apartment?.appartmentTypeIT
                : apartment?.appartmentTypeEN
            }
            imgSrc={
              imageCover ||
              "http://www.isoladeimori.it/idm/images/slide/ingresso.jpg?1710616009801"
            }
            className="parallax"
          />
          <Stack className="main-content" flexDirection="column">
            <div className="first-content fade-in ">
              <div className="description-container">
                <span className="desctiption">
                  {i18n.language === "it"
                    ? apartment?.descriptionIT
                    : apartment?.descriptionEN}
                </span>
                <Stack flex={1} justifycontent="center" paddingvertical={20}>
                  <Button
                    buttonTitle={t("book-now")}
                    icon="ArrowForwardIos"
                    onClick={() =>
                      window.open(
                        "https://wubook.net/nneb/bk/?ep=8c0ed861&lang=it&c=EUR&f=29%2F03%2F2024&t=30%2F03%2F2024&o=2.0.0.0"
                      )
                    }
                  />
                </Stack>
              </div>
              <Stack gap={40} wrap className="image-wrap-width" flex={1}>
                <div className="image1-container">
                  <img
                    src={apartment?.photos[0]?.url}
                    alt="Apartment Front"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div className="image1-container">
                  <img
                    src={apartment?.photos[1]?.url}
                    alt="Apartment Front"
                    style={{ opacity: 1 }}
                  />
                </div>
              </Stack>
              <Stack
                flexDirection="column"
                alignitems="center"
                className="house-services"
                gap={40}
              >
                <Text fontSize="lg" bold>
                  {t("find")}
                </Text>
                <HouseServices
                  doubleBeds={apartment.doubleBed}
                  singleBeds={apartment.singleBed}
                  sofaBeds={apartment.sofaBed}
                  wifi={apartment.hasWifi}
                  hasAirConditioning={apartment.hasAirConditioning}
                />
              </Stack>
            </div>
            <div className="carousel-content ">
              {imageList && <ImageCarousel imageList={imageList} />}
            </div>
          </Stack>
        </Stack>
      )}
    </>
  );
};
