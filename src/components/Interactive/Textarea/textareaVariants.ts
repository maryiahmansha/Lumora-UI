import { cva } from "class-variance-authority";

export const textareaVariants = cva("lumora-textArea", {
  variants: {
    size: {
      sm: "text-sm p-2",
      md: "text-base p-3",
      lg: "text-lg p-4",
    },
    variant: {
      default: "",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
