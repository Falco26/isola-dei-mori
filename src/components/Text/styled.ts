import styled from "styled-components";

type Props = {
  size: number;
  color: string;
  bold: boolean;
};

export const StyledText = styled.span<Props>`
  font-size: ${({ size }) => size}rem;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
