import { CSSProperties, PropsWithChildren } from "react";
import { StyledText } from "./styled";
import { FontSize, theme } from "../../style/theme";

type Props = PropsWithChildren<{
  fontSize: FontSize;
  color?: string;
  bold?: boolean;
  className?: string;
  fontWeight?: CSSProperties["fontWeight"];
}>;

export const Text = ({
  fontSize,
  color = "primary",
  bold = false,
  children,
  className,
  fontWeight,
}: Props) => {
  return (
    <StyledText
      size={theme.fontSizes[fontSize]}
      color={color}
      bold={bold}
      className={className}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  );
};
