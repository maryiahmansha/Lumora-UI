import { type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";
import { radioVariants } from "./radioVariants";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioVariants> {
  label?: string;
  error?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, variant, boxSize, ...props }, ref) => {
    return (
      <label>
        <input
          type="radio"
          ref={ref}
          className={cn(radioVariants({ variant, boxSize }), className)}
          {...props}
        />
        {label && (
          <span
            className={cn(
              "select-none",
              variant === "error" ? "text-red-600" : "text-gray-900",
            )}
          >
            {label}
          </span>
        )}
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </label>
    );
  },
);
Radio.displayName = "Radio";

export { Radio };
