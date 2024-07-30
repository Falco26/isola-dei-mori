import { useEffect } from "react";
import { Stack } from "../Stack";
import {
  StyledHeroContainer,
  StyledHeroGradient,
  StyledHeroTextContainer,
  StyledHeroTitle,
  StyledImageContainer,
  StyledVideoContainer,
} from "./styled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  imgSrc: string;
  title: string;
  className?: string;
  isVideo?: boolean;
};

gsap.registerPlugin(ScrollTrigger);

export const HeroHeader = ({
  title,
  imgSrc,
  className,
  isVideo = false,
}: Props) => {
  useEffect(() => {
    // Parallax effect for the overlaying div

    // Zoom-in effect for the hero header image
    gsap.to(".hero-image", {
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-image",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);
  return (
    <StyledHeroContainer className={`hero-text-container ${className}`}>
      {isVideo ? (
        <StyledVideoContainer
          className="hero-image"
          src={imgSrc}
          autoPlay={true}
          loop
          muted
          controls={false}
          draggable={false}
          disableRemotePlayback={false}
          playsInline
        />
      ) : (
        <StyledImageContainer className="hero-image" src={imgSrc} />
      )}

      <StyledHeroGradient className="hero-image" />
      <StyledHeroTextContainer>
        <Stack flexDirection="column" gap={15} className="fade-in">
          <StyledHeroTitle>{title}</StyledHeroTitle>
        </Stack>
      </StyledHeroTextContainer>
    </StyledHeroContainer>
  );
};
