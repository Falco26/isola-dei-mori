import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

export const initFadeInAnimation = (className: string) => {
  const fadeElements = document.querySelectorAll(className);
  fadeElements.forEach((element) => {
    gsap.set(element, { opacity: 0, y: 100 }); // Set initial opacity to 0

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Adjust as necessary
        end: "bottom 20%", // Adjust as necessary
        toggleActions: "play none none none", // Only play the animation once
        once: true, // Ensure it only triggers once
      },
    });
  });
};
