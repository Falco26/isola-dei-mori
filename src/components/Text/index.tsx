import { PropsWithChildren } from "react";
import { StyledText } from "./styled";
import { FontSize, theme } from "../../style/theme";

type Props = PropsWithChildren<{
  fontSize: FontSize;
  color?: string;
  bold?: boolean;
  className?: string;
}>;

export const Text = ({
  fontSize,
  color = "primary",
  bold = false,
  children,
  className,
}: Props) => {
  return (
    <StyledText
      size={theme.fontSizes[fontSize]}
      color={color}
      bold={bold}
      className={className}
    >
      {children}
    </StyledText>
  );
};
