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

gsap.registerPlugin(ScrollTrigger);

export const fadeInAnimation = (className: string) => {
  gsap.from(className, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: className,
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        gsap.to(className, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        return;
      },
      onEnterBack: () => {
        gsap.to(className, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        return;
      },
    },
  });
};
