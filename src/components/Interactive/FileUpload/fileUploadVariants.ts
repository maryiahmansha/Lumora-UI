import { cva } from "class-variance-authority";

export const fileUploadVariants = cva(
  "block w-full rounded-md border shadow-sm focus:outline-none focus:ring-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500",
        success: "border-green-500 focus:border-green-500 focus:ring-green-500",
      },
      inputSize: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
      },
      defaultVariants: {
        variant: "default",
        size: "md",
      },
    },
  },
);
