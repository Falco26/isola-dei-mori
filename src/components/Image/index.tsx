import { StyledImageContainer } from "./styled";
type Props = {
  alt: string;
  src: string;
};

export const Image = ({ src, alt }: Props) => {
  return (
    <StyledImageContainer>
      <img src={src} alt={alt} />
    </StyledImageContainer>
  );
};
