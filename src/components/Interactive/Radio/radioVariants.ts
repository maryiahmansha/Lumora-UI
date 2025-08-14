import { cva } from "class-variance-authority";

export const radioVariants = cva("lumora-radio", {
  variants: {
    variant: {
      default: "text-blue-600 focus:ring-blue-500",
      error: "text-red-600 focus:ring-red-500 border-red-500",
      success: "text-green-600 focus:ring-green-500 border-green-500",
    },
    boxSize: {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    boxSize: "md",
  },
});
