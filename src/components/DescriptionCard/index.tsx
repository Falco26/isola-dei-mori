import { Stack } from "../Stack";
import { Text } from "../Text";
import "./style.css";

type Props = {
  title: string;
  description: string;
  source: string;
};

export const DescriptionCard = ({ description, title, source }: Props) => {
  return (
    <Stack
      flexDirection="column"
      paddinghorizontal={40}
      paddingvertical={40}
      justifycontent="space-between"
      alignitems="center"
      className="container-card-desc fade-in"
      gap={25}
    >
      <Stack className="image-container-desc">
        <img src={source} alt={title} />
      </Stack>
      <Stack
        justifycontent="flex-start"
        flexDirection="column"
        flex={1}
        className="content-desc"
      >
        <Text fontSize="md" bold textAlign="left">
          {title}
        </Text>
        <Text fontSize="sm" textAlign="left">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};
