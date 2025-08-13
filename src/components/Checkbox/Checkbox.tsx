import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils";

const checkBoxVariants = cva(
    'lumora-checkbox',
    {
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
            checkBoxSize: "md"
        },
    }
);

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof checkBoxVariants> {
    label?: string;
    error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, variant, checkBoxSize, label, error, ...props }, ref) => {
        return (
            <label>
                <input type="checkbox" ref={ref} className={cn("rounded border-gray-300 text-blue-600 focus:ring-blue-500", checkBoxVariants({ variant, checkBoxSize }), className)} {...props} />
                {label && (
                    <span>
                        {label && (
                            <span className={cn("select-none", variant === "error" ? "text-red-600" : "text-gray-900")}>
                                {label}
                            </span>
                        )}
                    </span>
                )}
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkBoxVariants };
