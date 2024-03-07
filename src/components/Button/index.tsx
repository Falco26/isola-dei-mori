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
  className?: string;
}>;

export const Button = ({
  icon,
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
          paddinghorizontal={20}
          paddingvertical={15}
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
              iconSize={15}
            />
          )}
        </Stack>
      </Box>
    </StyledButton>
  );
};
