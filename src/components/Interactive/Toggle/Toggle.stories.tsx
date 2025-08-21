import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
    title: "Components/Toggle",
    component: Toggle,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "success", "error"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        checked: {
            control: "boolean",
        },
    },
};

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Enable notifications",
        checked: false,
        variant: "default",
        size: "md",
    }
}

export const Success: Story = {
    args: {
        label: "auto-save",
        checked: true,
        variant: "success",
        size: "md",
    }
}
export const Error: Story = {
    args: {
        label: "Critical Toggle",
        checked: false,
        variant: "error",
        size: "md",
    }
}