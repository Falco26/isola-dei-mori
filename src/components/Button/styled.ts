import styled from "styled-components";

type Props = {
  hovercolor?: string;
};

export const StyledButton = styled.a<Props>`
  cursor: pointer;
  
  :hover {
    transition: 0.2s ease;
    border-color: ${({ hovercolor }) => hovercolor};

    * {
      color: ${({ hovercolor }) => hovercolor};
      transition: 0.3s;
      transform: scale(1.02);
    }
  }
`;
