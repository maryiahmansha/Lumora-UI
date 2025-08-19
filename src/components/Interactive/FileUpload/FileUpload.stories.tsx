import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
    title: "Components/FileUpload",
    component: FileUpload,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
        },
        inputSize: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        }
    }
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: "Upload a file"
    }
}

export const WithError: Story = {
    args: {
        label: "Upload a file",
        variant: "error",
        error: "File is required",
    }
}

export const Sizes: Story = {
    render: () => (
        <div>
            <FileUpload inputSize="sm" label="Small upload" />
            <FileUpload inputSize="md" label="Medium upload" />
            <FileUpload inputSize="lg" label="Large upload" />
        </div>
    )
}