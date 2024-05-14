import { PropsWithChildren } from "react";
import { StyledButton } from "./styled";
import { Box } from "../Box";
import { FontSize, theme } from "../../style/theme";
import { Text } from "../Text";
import { Icon, IconsName } from "../Icon/Index";
import { Stack } from "../Stack";

type Props = PropsWithChildren<{
  onClick?: () => void;
  buttonTitle?: string;
  color?: string;
  fontSize?: FontSize;
  hovercolor?: string;
  icon?: IconsName;
  iconSize?: number;
  className?: string;
}>;

export const Button = ({
  icon,
  iconSize = 15,
  buttonTitle,
  fontSize,
  onClick,
  hovercolor = theme.colors.black,
  color = theme.colors.grey[300],
  className,
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      hovercolor={hovercolor}
      className={className}
    >
      <Box borderwidth={1} bordercolor={color} borderstyle="solid">
        <Stack
          justifycontent="center"
          alignitems="center"
          gap={10}
          paddinghorizontal={30 * theme.fontSizes[fontSize ?? "sm"]}
          paddingvertical={20 * theme.fontSizes[fontSize ?? "sm"]}
        >
          {buttonTitle && (
            <Text color={color} fontSize={fontSize ?? "sm"}>
              {buttonTitle}
            </Text>
          )}
          {icon && (
            <Icon
              iconName={icon}
              iconColor={theme.colors.black}
              iconSize={iconSize}
            />
          )}
        </Stack>
      </Box>
    </StyledButton>
  );
};
