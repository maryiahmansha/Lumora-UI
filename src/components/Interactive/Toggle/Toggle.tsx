import type { VariantProps } from "class-variance-authority";
import React, { useEffect, useState } from "react";
import { toggleThumbVariants, toggleVariants } from "./toggleVariants";
import { cn } from "../../../utils";

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">, VariantProps<typeof toggleVariants> {
    checked?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
    ({ className, checked = false, label, onChange, variant, size, ...props }, ref) => {

        const [isChecked, setIsChecked] = useState(checked)

        const handleClick = () => {
            const newVal = !isChecked
            setIsChecked(newVal)
            onChange?.(newVal)
        }

        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <label className="flex items-center gap-2 cursor-pointer select-none">
                <button type="button" role="switch" aria-checked={isChecked} data-state={isChecked ? "checked" : "unchecked"} ref={ref} className={cn(toggleVariants({ variant, size }), className)} {...props} onClick={handleClick}>
                    <span data-state={isChecked ? "checked" : "unchecked"} className={toggleThumbVariants({ size })}></span>
                </button>
                {label && <span className="text-sm text-gray-700 ml-2">{label}</span>}
            </label>
        )
    }
)

Toggle.displayName = "Toggle"

export { Toggle }