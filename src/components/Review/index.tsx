import { Rating } from "../Rating";
import { Booking } from "../SVG/Booking";
import { Google } from "../SVG/Google";
import { Stack } from "../Stack";
import { Text } from "../Text";

type Props = {
  title?: string;
  description?: string;
  rating?: number;
  reviewSource?: "booking" | "google" | "bookweb";
  className?: string;
};

const reviewIconMap: Record<"booking" | "google" | "bookweb", any> = {
  booking: <Booking />,
  google: <Google />,
  bookweb: <Google />,
};

export const Review = ({
  description,
  rating = 5,
  title,
  reviewSource = "google",
  className,
}: Props) => {
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
      <Text bold fontSize="lg" textAlign="center">
        {title}
      </Text>
      <Text fontSize="sm" textAlign="center">
        {description}
      </Text>
      <Stack>
        <Rating value={rating} stars={5} />
      </Stack>
    </Stack>
  );
};
