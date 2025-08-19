import type { VariantProps } from "class-variance-authority";
import { fileUploadVariants } from "./fileUploadVariants";
import React from "react";
import { cn } from "../../../utils";

export interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>, VariantProps<typeof fileUploadVariants> {
    label?: string;
    error?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
    ({ className, label, error, variant, inputSize, ...props }, ref) => {
        return (
            <div>
                {label && (
                    <label className="text-sm font-medium text-gray-700">{label}</label>
                )}
                <input type="file" ref={ref} className={cn(fileUploadVariants({ variant, inputSize }), className)} {...props} />
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
        )
    }
)

FileUpload.displayName = 'FileUpload'

export { FileUpload }