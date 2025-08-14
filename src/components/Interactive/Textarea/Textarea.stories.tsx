import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
    title: "Components/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ["default", "error", "success"]
        },
        size: {
            control: { type: 'select' },
            options: ["sm", "md", "lg"],
        },
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Type your message here...',
        size: 'md',
        variant: 'default'
    },
};

export const AllSizes: Story = {
    render: () => (
        <div>
            <Textarea size="sm" placeholder="Small textarea" />
            <Textarea size="md" placeholder="Medium textarea" />
            <Textarea size="lg" placeholder="Large textarea" />
        </div>
    ),
};

export const WithError: Story = {
    args: {
        variant: "default",
        label: "Example text area",
        error: "Text field is empty",
        placeholder: "Type your message here..."
    }
}