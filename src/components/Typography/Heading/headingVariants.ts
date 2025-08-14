import { cva } from "class-variance-authority";

export const headingVariants = cva("font-bold text-gray-900", {
  variants: {
    size: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg",
    },
    variant: {
      default: "text-gray-900",
      muted: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "h1",
    variant: "default",
  },
});
