import "../../pages/HomePage/style.css";
import { Stack } from "../Stack";
import { Text } from "../Text";

type Props = {
  title: string;
  subtitle: string;
};

export const TextSection = ({ title, subtitle }: Props) => {
  return (
    <Stack
      flex={1}
      flexDirection="column"
      wrap
      alignitems="flex-start"
      className="text-container"
      paddinghorizontal={200}
      gap={20}
    >
      <Text bold fontSize="xl" className="text-animation">
        {title}
      </Text>
      <Text fontSize="sm" className="text-animation">
        {subtitle}
      </Text>
    </Stack>
  );
};
