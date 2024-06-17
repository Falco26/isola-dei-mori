import { theme } from "../../../style/theme";
import { Icon, IconsName } from "../../Icon/Index";
import { Stack } from "../../Stack";
import { Text } from "../../Text";

type ServiceProps = {
  iconName: IconsName;
  quantity?: number;
  serviceDescription: string;
};

export const Service = ({
  iconName,
  quantity,
  serviceDescription,
}: ServiceProps) => {
  return (
    <Stack
      flexDirection="row"
      gap={15}
      alignitems="center"
      justifycontent="center"
    >
      <Stack alignitems="center" justifycontent="center" gap={16}>
        <Icon
          iconName={iconName}
          iconSize={50}
          iconColor={theme.colors.black}
        />
        {quantity && (
          <Text bold fontSize="md">
            {quantity}
          </Text>
        )}
      </Stack>

      <Text fontSize="md">{serviceDescription}</Text>
    </Stack>
  );
};
