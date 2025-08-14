import { type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils";
import { headingVariants } from "./headingVariants";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    const Tag = size ?? "h1";
    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ size, className, variant }))}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = "Heading";

export { Heading };
