import { cva } from "class-variance-authority";

export const checkBoxVariants = cva("lumora-checkbox", {
  variants: {
    variant: {
      default: "text-gray-900",
      error: "text-red-600",
      success: "text-green-600",
    },
    checkBoxSize: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    checkBoxSize: "md",
  },
});
