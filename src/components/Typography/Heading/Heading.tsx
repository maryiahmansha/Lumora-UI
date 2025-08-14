import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";

const headingVariants = cva(
    'font-bold text-gray-900',
    {
        variants: {
            size: {
                h1: "text-5xl",
                h2: "text-4xl",
                h3: "text-3xl",
                h4: "text-2xl",
                h5: "text-xl",
                h6: "text-lg",
            },
            variant: {
                default: "text-gray-900",
                muted: "text-gray-500",
            },
        },
        defaultVariants: {
            size: 'h1',
            variant: 'default',
        },
    }
);

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> { }

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, size, variant, children, ...props }, ref) => {
        const Tag = size ?? "h1";
        return (
            <Tag ref={ref} className={cn(headingVariants({ size, className, variant }))} {...props}>
                {children}
            </Tag>
        )
    }
)

Heading.displayName = 'Heading';

export { Heading, headingVariants }