// TODO: Card hover animation like className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 ${section.color}`}

import { defineAnimationStyles } from "@chakra-ui/react";

export const animationStyles = defineAnimationStyles({
  bounceFadeIn: {
    value: {
      animationName: "bounce, fade-in",
      animationDuration: "300ms",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  },
});
