import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils";

const radioVariants = cva(
    'lumora-radio',
    {
        variants: {
            variant: {
                default: "text-blue-600 focus:ring-blue-500",
                error: "text-red-600 focus:ring-red-500 border-red-500",
                success: "text-green-600 focus:ring-green-500 border-green-500",
            },
            boxSize: {
                sm: 'h-9 rounded-md px-3',
                md: 'h-10 px-4 py-2',
                lg: 'h-11 rounded-md px-8',
            },
        },
        defaultVariants: {
            variant: 'default',
            boxSize: 'md'
        },
    }
);

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof radioVariants> {
    label?: string;
    error?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, error, variant, boxSize, ...props }, ref) => {
        return (
            <label>
                <input type="radio" ref={ref} className={cn(radioVariants({ variant, boxSize }), className)} />
                {label && (
                    <span className={cn("select-none", variant === "error" ? "text-red-600" : "text-gray-900")}>{label}</span>
                )}
                {error && (
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                )}
            </label>
        )
    }
)
Radio.displayName = "Radio";

export { Radio, radioVariants };