import { cva } from "class-variance-authority";

export const toggleVariants = cva(
    "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-gray-200 data-[state=checked]:bg-blue-600",
                success: "bg-gray-200 data-[state=checked]:bg-green-600",
                error: "bg-gray-200 data-[state=checked]:bg-red-600",
            },
            size: {
                sm: "h-4 w-7",
                md: "h-5 w-9",
                lg: "h-6 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        }
    }
)

export const toggleThumbVariants = cva(
    "inline-block rounded-full bg-white shadow transform ring-0 transition-transform",
    {
        variants: {
            size: {
                sm: "h-3 w-3 data-[state=checked]:translate-x-3",
                md: "h-4 w-4 data-[state=checked]:translate-x-4",
                lg: "h-5 w-5 data-[state=checked]:translate-x-5",
            }
        },
        defaultVariants: {
            size: "md"
        }
    }
)