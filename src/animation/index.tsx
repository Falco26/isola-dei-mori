import gsap from "gsap";

export const parallaxAnimation = (className: string, yOffset: string) => {
  return gsap.to(className, {
    y: yOffset, // Adjust the parallax effect as needed
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".overlay-div",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });
};
