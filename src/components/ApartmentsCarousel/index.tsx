import { memo, useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Apartment } from "../../api/types";
import { HouseCard } from "../HouseCard";
import "./style.css";
import { Stack } from "../Stack";
import { calculateItemsPerSlide, groupApartmentsBySlide } from "../../utils";
import { Icon } from "../Icon/Index";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";
import { apartmentActions } from "../../features/apartments/reducer";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

type Props = {
  apartmentList: Apartment[];
};

export const ApartmentsCarousel = memo(({ apartmentList }: Props) => {
  const { i18n } = useTranslation();

  const [itemsPerSlide, setItemsPerSlide] = useState(
    calculateItemsPerSlide(window.innerWidth)
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(calculateItemsPerSlide(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupedApartments = groupApartmentsBySlide(
    apartmentList,
    itemsPerSlide
  );

  return (
    <ResponsiveCarousel
      showArrows={true}
      swipeable={true}
      emulateTouch
      centerSlidePercentage={30}
      transitionTime={500} // Set animation speed to 500 milliseconds
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <div className="custom-carousel-arrow-prev" style={{ zIndex: 2 }}>
          <button
            onClick={onClickHandler}
            className="button-81"
            disabled={!hasPrev}
          >
            <Icon
              iconName="ArrowBackIosRounded"
              iconColor={theme.colors.black}
              iconSize={30}
            />
          </button>
        </div>
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <div className="custom-carousel-arrow-next" style={{ zIndex: 2 }}>
          <button
            onClick={onClickHandler}
            className="button-81"
            disabled={!hasNext}
          >
            <Icon
              iconName="ArrowForwardIosRounded"
              iconColor={theme.colors.black}
              iconSize={30}
            />
          </button>
        </div>
      )}
    >
      {groupedApartments?.map((apartmentGroup, index) => (
        <Stack
          key={index}
          justifycontent="flex-start"
          paddingvertical={100}
          gap={50}
          className="carousel-container"
        >
          {apartmentGroup?.map((apartment, innerIndex) => (
            <HouseCard
              key={innerIndex}
              houseName={
                i18n.language === "it"
                  ? apartment.appartmentTypeIT
                  : apartment.appartmentTypeEN
              }
              wifi={apartment.hasWifi}
              singleBeds={apartment.singleBed}
              doubleBeds={apartment.doubleBed}
              sofaBeds={apartment.sofaBed}
              laundry={apartment.hasAirConditioning}
              imageSrc={apartment.photos[1].url}
              onClick={() => {
                dispatch(apartmentActions.setCurrentApartment(apartment));
                navigate(`/${apartment.appartmentTypeIT.toLowerCase()}`);
              }}
            />
          ))}
        </Stack>
      ))}
    </ResponsiveCarousel>
  );
});
