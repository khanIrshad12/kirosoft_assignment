
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <motion.svg
      className={cn(
        "pointer-events-none absolute z-[1] w-[100%] lg:[100%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}  // Final opacity (or any value you want)
      transition={{
        delay: 1.5, // Delay before animation starts
        duration: 2, // Duration of the fade-in effect
        ease: "easeInOut", // Smooth easing
      }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="3600"
          cy="500"
          rx="1000"
          ry="273.501"
          transform="rotate(-30.7 3100 900)"
          fill={fill || "url(#gradient)"}
          fillOpacity="0.50"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(234, 88, 12)" />
          <stop offset="50%" stopColor="rgb(249, 115, 22)" />
          <stop offset="100%" stopColor="rgb(231, 168, 71)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
