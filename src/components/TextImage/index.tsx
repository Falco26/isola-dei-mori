import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Stack } from "../Stack";
import { Text } from "../Text";
import "./textimage.css";
import { initFadeInAnimation } from "../../animation";

type Props = {
  direction: "row" | "reverse";
  description: string;
  imageSrc: string;
  title?: string;
};

export const TextImage = ({
  title,
  description,
  direction,
  imageSrc,
}: Props) => {
  useEffect(() => {
    initFadeInAnimation(".fade-in");
  });

  return (
    <Stack
      flexDirection={direction === "reverse" ? "row-reverse" : "row"}
      justifycontent="space-between"
      alignitems="center"
      flex={1}
      className="group-text-image fade-in"
      wrap
    >
      <Stack
        flex={2}
        flexDirection="column"
        gap={40}
        className="text-container"
      >
        {title && (
          <Text fontSize="lg" bold className="text-group-txt">
            {title}
          </Text>
        )}
        <Text fontSize="xsm" className="text-group-txt">
          {description}
        </Text>
      </Stack>
      <Stack flex={2} className="img-container-group">
        <img src={imageSrc} alt="apartmentPic" />
      </Stack>
    </Stack>
  );
};
