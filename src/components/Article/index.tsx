import { Stack } from "../Stack";

type Props = {
  orientation: "horizontal" | "vertical";
  textWidth: "half" | "full";
};

export const Article = ({ orientation, textWidth }: Props) => {
  return (
    <Stack
      flexDirection={orientation === "horizontal" ? "row" : "column"}
    ></Stack>
  );
};
