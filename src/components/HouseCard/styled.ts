import styled from "styled-components";

export const StyledHouseCard = styled.a`
  width: auto;
  max-width: 70vw;
  transition: 0.4s;

  @media (max-width: 800px) {
    max-width: 60vw;
  }
  @media (max-width: 800px) {
    max-width: 57vw;
  }
`;

export const StyledCardImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
