import { useTranslation } from "react-i18next";
import { Image } from "../Image";
import { Stack } from "../Stack";
import { Text } from "../Text";
import "./textimage.css";

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
  return (
    <Stack
      flexDirection={direction === "reverse" ? "row-reverse" : "row"}
      justifycontent="space-between"
      alignitems="center"
      flex={1}
      className="group-text-image"
      wrap
    >
      <Stack flex={2} flexDirection="column" gap={40}>
        <Text fontSize="lg" bold>
          {title}
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>
      <Stack flex={2} className="img-container-group">
        <Image src={imageSrc} alt="apartmentPic" />
      </Stack>
    </Stack>
  );
};
