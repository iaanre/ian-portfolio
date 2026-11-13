import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ease = {
  out: "power4.out",
  soft: "power3.out",
  inOut: "expo.inOut",
} as const;

export { gsap, ScrollTrigger };
