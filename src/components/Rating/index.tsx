import React from "react";
import { theme } from "../../style/theme";
import { Icon } from "../Icon/Index";

type Props = {
  value: number;
  stars: number;
};

export const Rating = ({ value, stars = 5 }: Props) => {
  const renderStars = () => {
    const starArray = [];

    for (let i = 1; i <= stars; i++) {
      if (i <= value) {
        // Full star
        starArray.push(
          <Icon
            key={i}
            iconName="Star"
            iconColor={theme.colors.black}
            iconSize={25}
          />
        );
      } else if (i === Math.floor(value) + 1 && value % 1 >= 0.8) {
        // Full star if decimal part >= 0.8
        starArray.push(
          <Icon
            key={i}
            iconName="Star"
            iconColor={theme.colors.black}
            iconSize={25}
          />
        );
      } else if (i === Math.ceil(value) && value % 1 !== 0) {
        // Half star
        starArray.push(
          <Icon
            key={i}
            iconName="HalfStar"
            iconColor={theme.colors.black}
            iconSize={25}
          />
        );
      } else {
        // Empty star
        starArray.push(
          <Icon
            key={i}
            iconName="Star"
            iconColor={theme.colors.grey[200]}
            iconSize={25}
          />
        );
      }
    }

    return starArray;
  };

  return <>{renderStars()}</>;
};
