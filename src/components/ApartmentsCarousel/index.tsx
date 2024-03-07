// ApartmentsCarousel.tsx

import React, { useEffect, useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Apartment } from "../../api/endpoints";
import { HouseCard } from "../HouseCard";
import "./style.css";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { calculateItemsPerSlide, groupApartmentsBySlide } from "../../utils";
import { Icon } from "../Icon/Index";
import { theme } from "../../style/theme";

type Props = {
  apartmentList: Apartment[];
};

export const ApartmentsCarousel = ({ apartmentList }: Props) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(
    calculateItemsPerSlide(window.innerWidth)
  );

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
      {groupedApartments.map((apartmentGroup, index) => (
        <Stack
          key={index}
          justifycontent="flex-start"
          paddingvertical={100}
          gap={50}
          className="carousel-container"
        >
          {apartmentGroup.map((apartment, innerIndex) => (
            <HouseCard
              key={innerIndex}
              houseName={apartment.name}
              services={[]}
            />
          ))}
        </Stack>
      ))}
    </ResponsiveCarousel>
  );
};
