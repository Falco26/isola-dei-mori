import { Image } from "../../api/endpoints";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { groupImagesBySlide } from "../../utils";
import { useEffect, useState } from "react";
import { theme } from "../../style/theme";
import { Icon } from "../Icon/Index";
import "./style.css";
import { Stack } from "../Stack";

type Props = {
  imageList: Image[];
};

export const ImageCarousel = ({ imageList }: Props) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(
    calculateItemsPerSlide(window.innerWidth)
  );

  function calculateItemsPerSlide(windowWidth: number): number {
    return 1;
  }

  useEffect(() => {
    console.log("🚀 ~ ImageCarousel ~ itemsPerSlide:", itemsPerSlide);
    const handleResize = () => {
      setItemsPerSlide(1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemsPerSlide]);

  const groupedImages = groupImagesBySlide(imageList, itemsPerSlide);
  return (
    <ResponsiveCarousel
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <div className="arrow-prev" style={{ zIndex: 2 }}>
          <button
            onClick={onClickHandler}
            className="button-image-carousel"
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
        <div className="arrow-next" style={{ zIndex: 2 }}>
          <button
            onClick={onClickHandler}
            className="button-image-carousel"
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
      {groupedImages.map((imageGroup, index) => (
        <Stack
          key={index}
          justifycontent="center"
          paddingvertical={100}
          gap={50}
          className="carousel-container-apartments fade-in"
        >
          {imageGroup.map((image, innerIndex) => (
            <div className="apartment-image" key={image.id}>
              <img src={image.source} />
            </div>
          ))}
        </Stack>
      ))}
    </ResponsiveCarousel>
  );
};
