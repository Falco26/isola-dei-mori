import { memo } from "react";
import { Icon } from "../Icon/Index";
import { Rating } from "../Rating";
import { Booking } from "../SVG/Booking";
import { Google } from "../SVG/Google";
import { WuBook } from "../SVG/WuBook";
import { Stack } from "../Stack";
import { Text } from "../Text";
import "./style.css";

type Props = {
  title?: string;
  description?: string;
  rating?: number;
  reviewSource?: "Booking" | "Google" | "WuBook";
  className?: string;
  reviewLink: string;
};

const reviewIconMap: Record<"Booking" | "Google" | "WuBook", any> = {
  Booking: <Booking />,
  Google: <Google />,
  WuBook: <WuBook />,
};

export const Review =memo( ({
  description,
  rating = 5,
  title,
  reviewSource = "Google",
  className,
  reviewLink,
}: Props) => {
  const handleReviewClick = () => {
    window.open(reviewLink);
  };
  return (
    <Stack
      flexDirection="column"
      alignitems="center"
      justifycontent="center"
      gap={15}
      flex={1}
      className={className}
    >
      {reviewIconMap[reviewSource] || <Google />}
      <Text bold fontSize="lg" textAlign="center" className="text-size-review">
        {title}
      </Text>
      <Text fontSize="sm" textAlign="center" className="text-size-review">
        {description}
      </Text>
      <Stack>
        {reviewSource === "Booking" ? (
          <div className="booking-rating">{rating}/10</div>
        ) : (
          <Rating value={rating} stars={5} />
        )}
      </Stack>
      <div
        style={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
        className="icon-link-review"
        onClick={handleReviewClick}
      >
        <Icon iconName="LinkArrow" iconSize={25} iconColor="#000" />
      </div>
    </Stack>
  );
});
