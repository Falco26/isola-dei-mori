import styled from "styled-components";

export const StyledImageContainer = styled.img`
  width: 100vw;
  height: 100vh;
  position: absolute;
  max-height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const StyledHeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StyledHeroGradient = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.20073967086834732) 100%
  );
`;

export const StyledHeroTextContainer = styled.div`
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

export const StyledHeroTitle = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 3.5vw;

  @media (max-width: 1000px) {
    font-size: 5vw;
  }
  @media (max-width: 700px) {
    font-size: 7vw;
  }
`;
