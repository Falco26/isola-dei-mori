import styled from "styled-components";

export const StyledHouseCard = styled.a`
  width: 100%;
  max-width: 70vw;
  transition: 0.4s;
  padding-right: 40px;

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
  width: 100%;
`;
