import styled, { CSSProperties } from "styled-components";

type Props = {
  size: number;
  color: string;
  bold: boolean;
  fontWeight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
};

export const StyledText = styled.span<Props>`
  font-size: ${({ size }) => size}rem;
  color: ${({ color }) => color};
  font-weight: ${({ bold, fontWeight }) => (bold ? "bold" : fontWeight)};
  text-align: ${({ textAlign }) => textAlign || "left"};
`;
