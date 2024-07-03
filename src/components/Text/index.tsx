import { PropsWithChildren } from "react";
import { StyledText } from "./styled";
import { FontSize, theme } from "../../style/theme";
import { CSSProperties } from "styled-components";

type Props = PropsWithChildren<{
  fontSize: FontSize;
  color?: string;
  bold?: boolean;
  className?: string;
  fontWeight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
}>;

export const Text = ({
  fontSize,
  color = "primary",
  bold = false,
  children,
  className,
  fontWeight,
  textAlign,
}: Props) => {
  return (
    <StyledText
      size={theme.fontSizes[fontSize]}
      color={color}
      bold={bold}
      className={className}
      fontWeight={fontWeight}
      textAlign={textAlign}
    >
      {children}
    </StyledText>
  );
};
