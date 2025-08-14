import { cva } from "class-variance-authority";

export const buttonVariants = cva("lumora-btn", {
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      outline: "border border-slate-200 bg-white hover:bg-slate-100",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
    },
    size: {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
