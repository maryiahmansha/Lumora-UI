import type { VariantProps } from "class-variance-authority";
import { selectVariants } from "./selectVariants";
import React from "react";
import { cn } from "../../../utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof selectVariants> {
    label?: string;
    error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, variant, label, error, inputSize, children, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1">
                {label && (
                    <label className="text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <select ref={ref} className={cn(selectVariants({ inputSize: inputSize || 'md', variant }), className)} {...props}>{children}</select>
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
        );
    }
);

Select.displayName = 'Select'

export { Select }