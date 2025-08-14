import { type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";
import { textareaVariants } from "./textareaVariants";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, label, error, variant, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="font-medium text-sm text-gray-700">{label}</label>
        )}
        <textarea
          ref={ref}
          className={cn(textareaVariants({ size, variant, className }))}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
