import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
    },
    inputSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input variant="primary" label="Primary" />
      <Input variant="secondary" label="Secondary" />
      <Input variant="outline" label="Outline" />
      <Input variant="ghost" label="Ghost" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div>
      <Input inputSize="sm" />
      <Input inputSize="md" />
      <Input inputSize="lg" />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    variant: "primary",
    label: "Email",
    placeholder: "Enter your email",
    error: "Invalid email address",
  },
};
