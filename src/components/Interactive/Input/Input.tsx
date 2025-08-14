import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";

const inputVariants = cva("lumora-input", {
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      outline: "border border-slate-200 bg-white hover:bg-slate-100",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
    },
    inputSize: {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "primary",
    inputSize: "md",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, variant, inputSize, ...props }, ref) => {
    return (
      <>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          type="text"
          className={cn(inputVariants({ variant, inputSize, className }))}
          ref={ref}
          {...props}
          aria-describedby="helper-text"
        />
      </>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
