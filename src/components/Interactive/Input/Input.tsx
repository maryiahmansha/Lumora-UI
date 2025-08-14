import { type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";
import { inputVariants } from "./inputVariants";

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

export { Input };
